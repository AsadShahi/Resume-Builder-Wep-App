<?php

namespace App\Http\Controllers;

use App\Models\language;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Session;
//
use Illuminate\Support\Facades\Route;

use App\Models\User;
// use Illuminate\Support\Facades\Auth;
class LanguageControlelr extends Controller
{




    public function create(Request $request)
    {
        
        try {
            $this->validate($request, [
                'user_id' => 'required|exists:users,id',
                'languages' => 'required|array',
                'languages.*.language' => 'required|string',
                'languages.*.level' => 'required|string',
            ]);
    
            $user_id = $request->input('user_id');
            $languages = $request->input('languages');
      
    
            foreach ($languages as $languageData) {
                // Create a new Language model instance
                $language = new Language();

                $language->user_id = $user_id; // Assign the user_id as foreign key
               
                $language->language = $languageData['language'];
                $language->level = $languageData['level'];
    
                // Save the language
                $language->save();
            }
            return response()->json(['message' => 'Languages created successfully', 'user_id' => $user_id], 201);
    
          
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Internal Server Error'], 500);
        }
    }


    // public function index()
    // {
    //     $language = language::all();
    //     if ($language) {
    //         return response()->json(
    //             [
    //                 'mylang' => $language
    //             ],
    //             200
    //         );
    //     }
    // }


    public function show($id)
    {
    }
    public function delete($id)
    {
        $delete=language::find($id);
        if($delete){
            $delete->delete();
            return response()->json([
                'status'=>200,
                'message'=>'Deleted User'
            ],200);
        }
    }//4:40

    public function getUserID()
    {
        $user = Auth::user();
        $userId = $user->id;
        dd($userId);
        return $userId;
    }



    



//     public function list(Request $request)
// {

//     $userId = $request->session()->get('user_id');


//     dd($userId);


//     $list = Language::where('user_id', $userId)
//                     ->orderBy('user_id', 'desc')
//                     ->get();

//     if ($list) {
//         return response()->json(['list' => $list], 200);
//     } else {
//         return response()->json(['message' => 'No languages found for the user'], 404);
//     }

// }


// public function list($userId)
// {
//     // // Retrieve the user ID from the session
//     // $userId = $request->session()->get('user_id');
//     // dd($userId); // You can remove this line after debugging

//     $list = Language::where('user_id', $userId)
//                     ->orderBy('user_id', 'desc')
//                     ->get();

//     if ($list->count() > 0) {
//         return response()->json(['list' => $list], 200);
//     } else {
//         return response()->json(['message' => 'No languages found for the user'], 404);
//     }
// }



// public function list(Request $request)
// {
//     $user_id = $request->session()->get('user_id');
//     dd($user_id); 
    
//     $list = Language::where('user_id', $user_id)
//                     ->orderBy('user_id', 'desc')
//                     ->get();

//     if ($list->count() > 0) {
//         return response()->json(['list' => $list], 200);
//     } else {
//         return response()->json(['message' => 'No languages found for the user'], 404);
//     }
// }






 //that function is true an work do not handle this
    public function list($user_id)
    {

        
        

       $user_id=session()->get('user_id');
        $list = Language::where('user_id', $user_id)
                        ->orderBy('user_id', 'desc')->limit(4)
                        ->get();
    
        if ($list) {
            return response()->json(['list' => $list], 200);
        } else {
            return response()->json(['message' => 'No languages found for the user'], 404);
        }
    }













    // public function list()
    // {
    //     // $userId = $request->user()->id;
        
    //   $user =  auth('sanctum')->user();
    //      dd($user);

    //     $list = Language::where('user_id', 2)
    //                     ->orderBy('user_id', 'desc')
    //                     ->get();
    
    //     if ($list) {
    //         return response()->json(['list' => $list], 200);
    //     } else {
    //         return response()->json(['message' => 'No languages found for the user'], 404);
    //     }
    // }

    

            // function TestLang() {
            //     $user_id=User::orderBy('id','desc')->limit(1)->get();

            //     $list=Language::where('user_id',1)
            //     ->orderBy('user_id','desc')
            //     ->get();
            //     return $list;
            // }

//     public function list()
//     {
//         // $list = language::whereDate('created_at', '=', date('Y-m-d'))->orderBy('created_at', 'desc')->limit(3)->get();

//         $list=language::all();
//     if ($list) {
//     return response()->json(
//         [
//             'list' => $list
//         ],
//         200
//     );
// }
//     }

    
    public function userlist(){
        $users = User::join('skills', 'users.id', '=', 'skills.user_id')
        ->select('users.name', 'skills.skills')
        ->get();
        return $users;
    }   
}
