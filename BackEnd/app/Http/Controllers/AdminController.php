<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
class AdminController extends Controller
{
    // public function loginAdmin(Request $request)
    // {
    //     // Validate the request data
    //     $validator = Validator::make($request->all(), [
    //         'email' => 'required|email',
    //         'password' => 'required|string|',
    //     ]);
    //     if ($validator->fails()) {
    //         return response()->json(['message' => $validator->messages()], 422);
    //     }

    //     // Check if the email exists and the password matches
    //     if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
    //         // Generate a token and return it as a response
    //         $token = auth()->user()->createToken('API Token')->accessToken;
    //         $userInfo=auth()->user();
    //         return response()->json(['token' => $token,'user',$userInfo], 200);
    //     } else {
    //         return response()->json(['error' => 'Password or email is invalid'], 401);
    //     }
    // }

    
    public function getUser(){
        $user=$_SESSION->auth();
        response()->json(['user' => $user], 401);
        
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $admins = Admin::all();
        return response()->json($admins);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */











    //  this is original

    public function store(Request $request)
    {
       
        $validate=Validator::make($request->all(),[
       'name'=>'required',
       'email'=>'required|string|email|unique:Admins',
       'password'=>'required|min:5|max:12'
        ]);
        if($validate->fails()){
            return response()->json([
                'status'=>422,
                'message'=>$validate->messages()
            ],422);
        }


       $admin= Admin::create([

            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);
        if($admin){
            return response()->json([
                'status'=>200,
                'message'=>'Admin Added Successfully!!'
            ],200);
        }else{
            return response([
                
            ]);
        }
    }



    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        return response()->json($admin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Admin $admin)
    {
        $admin->name = $request->input('name');
        $admin->lastname = $request->input('lastname');
        $admin->username = $request->input('username');
        $admin->email = $request->input('email');
        $admin->password = $request->input('password');
        $admin->image = $request->input('image');
        $admin->save();

        return response()->json($admin);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Admin $admin)
    {
        $admin->delete();
        return response()->json(['message' => 'Admin deleted successfully']);
    }







    public function adminLogin(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);
    
        if ($validation->fails()) {
            return response()->json([
                'message' => $validation->messages(),
            ], 422);
        }
    
        $admin = Admin::where('email', '=', $request->email)->first();
    
        if ($admin) {
            if (Hash::check($request->password, $admin->password)) {
                Auth::login($admin);
    
                $token = $admin->createToken('adminToken')->accessToken;
                
                
    
                return response()->json([
                    'status' => 200,
                    'token' => $token,
                    'admin'=>$admin,
                    'message' => 'Welcome to the system!'
                ], 200);
            } else {
                return response()->json([
                    'status' => 401,
                    'message' => 'Password or Email is Incorrect.'
                ], 401);
            }
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'You are not registered.'
            ], 404);
        }

    }








 



function LoginWithSession(){

    
}



function AdminDelete($id){
    $delete=admin::find($id);
    if($delete){
        $delete->delete();
        return response()->json([
            'status'=>200,
            'delete'=>$delete
        ],200);
    }else{
        return response()->json([
            'message'=>'not deleted'
        ]);
    }
}
}