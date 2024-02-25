<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Nette\Utils\Validators;

class UserController extends Controller
{


    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'username' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = User::create([
            'name' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);
    
        return response()->json([
            'message' => 'You have successfully registred and logged in',
            'user' => $user,
        ], 200);
    }



    public function index()
    {
        $users=User::all();
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
    public function show($id)
    {
        $userList = User::find($id);
        if (!$userList) {
            return response()->json([
                'message' => 'User not found'
                ,
                400
            ]);
        } else {
            return response()->json(
                ['results' => $userList],
                200
            );
        }
    }

    public function UserEdit($id)
    {
        $user = User::findOrFail($id);
        if ($user) {
            return response()->json([
                'status' => 200,
                'user' => $user
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such User Found!!!'
            ], 404);
        }
    }
    public function deleteFunction($id)
    {
        $deleteID = User::find($id);
        // dd($deleteID);
        $deleteID->delete();
        if ($deleteID) {
            return response()->json([
                'status' => 200,
                'DeleteUser' => 'User has been deleted!!',
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'DeleteUser' => 'Error has been occured!!!'
            ], 404);
        }
    }
}
