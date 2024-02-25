<?php

namespace App\Http\Controllers;

use App\Models\cover;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CoverController extends Controller
{
    public function index()
    {
        $covers=cover::all();
        if($covers->count()>0){
            return response()->json([
                'status'=>200,
                'covers'=>$covers
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Not Found Records!!'
            ],404);
        }
    }

    public function store(Request $request)
    {
           $Validation = Validator::make($request->all(),[
            'fullname' => 'required|string|max:60',
            'email' => 'required|email|max:300',
            'jobtitle' => 'required|min:5|max:32',
            'phone' => 'required',
            'company' => 'required',
            'coverdetails' => 'required',
        ]);
        if ($Validation->fails()) {
            return response()->json([
                'status' => 422,
                'CoverError' => $Validation->messages(),
                'error'=>'Error Found!!!'
            ], 422);
        } else {
            $cover = cover::create([
                'fullname' => $request->fullname,
                'email' => $request->email,
                'jobtitle' => $request->jobtitle,
                'phone' => $request->phone,
                'company' => $request->company,
                'coverdetails' => $request->coverdetails
            ], 200);
        }
        if ($cover) {
            return response()->json([
                'status' => 200,
                'CoverSuccessMessage' => 'Cover Latter added Successfully!!!'
            ], 200);
        } else {
            return response()->json([
                'status' => 500,
                'message' => 'Somthing relly wrong!'
            ], 500);
        }

    }
    public function CoverLatterEdit($id)
    {
        $CoverLatterEdit = cover::findOrFail($id);
        if ($CoverLatterEdit) {
            return response()->josn(
                [
                    'status' => 200,
                    'CoverLatterEdit' => $CoverLatterEdit
                ]
            );
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No such File'
            ], 404);
        }

    }

    public function delete($id)
    {

        $CoverLatterDelete = cover::find($id);
        if ($CoverLatterDelete) {
            $CoverLatterDelete->delete();
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such Student Found!!!'
            ], 404);
        }

    }
    public function onlyFunction(){
        $users=cover::all();
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
}
