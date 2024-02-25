<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResumeRequest;
use App\Models\about;
use App\Models\resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;


class ResumeController extends Controller
{


    public function list($user_id)
    {
        $user_id = session()->get('user_id');
        $list = resume::where('user_id', $user_id)
            ->orderBy('user_id', 'desc')
            ->limit(1)->get();
            
        foreach ($list as $resume) {
            $imagePath = public_path('storage/' . $resume->image);
            
            if (file_exists($imagePath)) {
                // Image exists
                $resume->image_url = asset('storage/' . $resume->image);
                $resume->image_exists = true;
            } else {
                // Image does not exist
                $resume->image_url = null;
                $resume->image_exists = false;
            }
        }
        
        if ($list->isNotEmpty()) {
           

            return response()->json([
                'list' => $list,
            ], 200);
        } else {
            return response()->json(['message' => 'No data found for the user'], 404);
        }
    }














    public function index()
    {


        $users=resume::all();
        if($users->count()>0){
            return response()->json([
                'status'=>200,
                'users'=>$users
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Not Found Records!!'
            ],404);
        }
    }





    public function store(ResumeRequest $request)
    {
        $validation=Validator::make($request->all(),[

            'user_id'=>'required|exists:users,id',

            'jobtitle'=> 'required',
            'firstname' => 'required|string|min:3|max:15',
            'lastname' => 'required|string|min:3|max:15',
            'email' => 'required|email',
            'phone' => 'required|min:9|max:15',
            'country' => 'required|string|min:3|max:15',
            'city' => 'required|string|min:3|max:15',
            'aboutme' => 'required|string|min:30|max:600',
            'image' => 'required',
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validation->messages()
            ], 422);
        } else {
            $user_id = $request->input('user_id');
            
            $ImageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
        
            resume::create([
                'user_id'=>$request->user_id,
                'jobtitle' =>$request->jobtitle,
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'phone' => $request->phone,
                'country' => $request->country,
                'city' => $request->city,
                'aboutme'=>$request->aboutme,
                'image' => $ImageName,
            ]);
          
            
          
            Storage::disk('public')->put($ImageName, file_get_contents($request->image));
         
    return response()->json([
        'status' => 200,
        'AboutSuccessImage' => 'Personal Information added successfully!!!'
    ], 200);


    }


      
    }



 










    public function delete()
    {
    }
}
