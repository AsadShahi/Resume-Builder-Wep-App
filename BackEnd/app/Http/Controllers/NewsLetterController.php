<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\newsLetter;

class NewsLetterController extends Controller
{
    public function index(){
    $list=newsLetter::all();
        if($list->count()>0){
            return response()->json([
                'status'=>200,
                'list'=>$list
            ],200);
        }else{
            return response()->json([
                'status'=>404,
                'message'=>'Not Found Records!!'
            ],404);
        
    }
}
    public function create(Request $request){
        $validation=Validator::make($request->all(),[
            'newsletterEmail'=>'required|email'
        ]);
        if($validation->fails()){
            return response()->json([
                'newsletter'=>   $validation->messages()
            ]);
        }else{
            $newsletter=newsLetter::create([
                'emailuser'=>$request->newsletterEmail
            ]);
        }
        if($newsletter){
            return response()->json([
                'status'=>200,
                'message'=>'news letter has been created successfully'
            ],200);
        }else{
            return response()->json([
                'error'=>'Not Insert'
            ]);
        }
    }
    public function delete($id){
        $delete=newsLetter::find($id);
        if($delete){
            $delete->delete();
            return response()->json([
                'delete'=>'deleted'
            ]);
        }
    }
}
