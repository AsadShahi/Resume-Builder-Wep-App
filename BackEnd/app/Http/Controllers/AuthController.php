<?php

namespace App\Http\Controllers;

// Import the necessary classes
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function __constructor() {
        $this->middleware('auth.api');
    }
    public function test(){
        return session::get('user_id');
    }


    public function login(Request $request)
    {
        // Validate the request data
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|',
        ]);
        if ($validator->fails()) {
            return response()->json(['message' => $validator->messages()], 422);
        }

        // Check if the email exists and the password matches
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Generate a token and return it as a response
            $token = auth()->user()->createToken('API Token')->accessToken;
            $userInfo=auth()->user();
            
            return response()->json(['token' => $token,'user',$userInfo], 200);
        } else {
            return response()->json(['error' => 'Password or email is invalid'], 401);
        }
    }






    
    public function getUser(){
        $user=$_SESSION->auth();
        response()->json(['user' => $user], 401);
        
    }
    function ShowResume(){
            // Here we should join user and resume table 
    }
    function ShowLetter(){
        // Here We Should Joing User and Cover Letter Table and show to users 
    }
}

//


