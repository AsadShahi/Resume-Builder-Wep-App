<?php

namespace App\Http\Controllers;
use App\Models\skills;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

use App\Models\User;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
class SkillsControlelr extends Controller
{
    public function store(Request $request)
{
    // Validate the incoming request data
    $validatedData = $request->validate([

        'user_id' => 'required|exists:users,id',
        'skills.*.skill' => 'required|string',
        'skills.*.level' => 'required|string',
    ]);

    // Get the user ID
    // $userId = auth()->user()->id;

    $user_id = $request->input('user_id');
    // Loop through each skill and save it to the database
    foreach ($validatedData['skills'] as $skillData) {
        $skill = new Skills();
        
        $skill->user_id = $user_id; 
        $skill->skills = $skillData['skill'];
        $skill->skills_level = $skillData['level'];
        $skill->save();
    }

    // Return a success response
    return response()->json([
        'message' => 'Skills created successfully',
    ], 200);
}




    
    
    public function index(){
            $skills=skills::all();
            if($skills){
                return response()->json(
                    [
                        'skills'=>$skills
                    ],200
                );
            }
    }
    public function show($id){
    }
    public function delete($id){
    }









   public function list($user_id)
{
    // $user_id = Auth::guard('api')->user()->id;

   

        $user_id=session()->get('user_id');
        $list = Skills::where('user_id', $user_id)
                        ->orderBy('user_id', 'desc')->limit(3)
                        ->get();
                        if ($list) {
                            return response()->json(['list' => $list], 200);
                        } else {
                            return response()->json(['message' => 'No languages found for the user'], 404);
                        }
    
    }


    
}
   

