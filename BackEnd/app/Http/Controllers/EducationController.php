<?php

namespace App\Http\Controllers;

use App\Models\education;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EducationController extends Controller
{
    
    public function store(Request $request)
    {
        $user_id = $request->input('user_id');
        $education = $request->input('education');

        foreach ($education as $edu) {
            $newEducation = new Education();
            $newEducation->user_id = $user_id;
            $newEducation->school = $edu['school'];
            $newEducation->field = $edu['field'];
            $newEducation->graduationDate = $edu['graduationDate'];
            $newEducation->city = $edu['city'];
            $newEducation->state = $edu['state'];
            $newEducation->country = $edu['country'];
            $newEducation->info = $edu['info'];
            $newEducation->save();
        }

        return response()->json(['message' => 'Education stored successfully'], 201);
    }







    


    public function index()
    {
        $education = education::all();
        if ($education) {
            return response()->json(
                [
                    'myeducation' => $education
                ],    
                200
            );    
        }    
    }    





    


    


    
    public function list($user_id)
    {


        $user_id=session()->get('user_id');


        $list = Education::where('user_id', $user_id)
                        ->orderBy('user_id', 'desc')->limit(2)
                        ->get();


    
        if ($list) {
            return response()->json(['list' => $list], 200);
        } else {
            return response()->json(['message' => 'No languages found for the user'], 404);
        }

      }
    public function delete($id){
        $delete=education::find($id);
        if($delete){
            $delete->delete();
            return response()->json([
                'status'=>200,
                'message'=>'deleted'
            ],200);
        }
    }
}
