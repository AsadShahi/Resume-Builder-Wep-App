<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\interests;

class InterestsController extends Controller
{
  


    // public function store(Request $request)
    // {
    //     $interestsData = $request->validate([
    //         'interests.*.interest' => 'required',
    //         'interests.*.image' => 'required|image|max:2048', // Maximum file size is 2MB
    //     ]);

    //     foreach ($interestsData['interests'] as $interestData) {
    //         $imagePath = $interestData['image']->store('interests', 'public');

    //         Interest::create([
    //             'user_id' => auth()->id(), // Assuming you have authentication set up
    //             'title' => $interestData['interest'],
    //             'image' => $imagePath,
    //         ]);
    //     }

    //     return response()->json(['message' => 'Interests created successfully']);
    // }













    


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'interests.*.title' => 'required|string|max:255',
            'interests.*.image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
    
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }
        $user_id = $request->input('user_id');

        foreach ($request->input('interests') as $interestData) {
            $interest = new Interests();
            $interest->user_id = $user_id; 
            $interest->title = $interestData['title'];
    
            if (isset($interestData['image'])) {
                $imagePath = $interestData['image']->store('interests', 'public');
                $interest->image = $imagePath;
            }
    
            $interest->save();
        }
    
        return response()->json(['message' => 'Interests created successfully'], 200);
    }








    //for list all intrest 
    public function list($user_id)
    {
    
        $user_id=session()->get('user_id');
  

           $interests=Interests::where('user_id', $user_id)->limit(3)
           ->orderBy('user_id', 'desc')
           ->get();


        if($interests){
            return response()->json([
                'interest'=>$interests,
            ],200);
        }else{
            return response()->json([
                'message'=>'no intresets found',
            ],404);
        }
    }
























}
