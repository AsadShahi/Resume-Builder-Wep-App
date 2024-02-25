<?php

namespace App\Http\Controllers;

use App\Models\experience;
use Dotenv\Repository\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Symfony\Component\HttpKernel\Event\ResponseEvent;

class ExperienceController extends Controller
{






    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'experienceData.*.jobtitle' => 'required|string|min:3',
            'experienceData.*.role' => 'required|string',
            'experienceData.*.start_date' => 'required|string',
            'experienceData.*.end_date' => 'required|string',
            'experienceData.*.country' => 'required|string',
            'experienceData.*.city' => 'required|string',
            'experienceData.*.state' => 'required|string',
            'experienceData.*.info' => 'required|string|min:80|max:400',
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => $validator->errors()->first()], 422);
        }

        $user_id = $request->user_id;
        $experienceData = $request->experienceData;

        // Loop through each experience data and save it
        foreach ($experienceData as $experience) {
            Experience::create([
                'user_id' => $user_id,
                'title' => $experience['jobtitle'],
                'role' => $experience['role'],
                'start_date' => $experience['start_date'],
                'end_date' => $experience['end_date'],
                'country' => $experience['country'],
                'city' => $experience['city'],
                'state' => $experience['state'],
                'information' => $experience['info'],
            ]);
        }

        return response()->json(['message' => 'Experience data saved successfully']);
    }









    
    
    public function index()
    {
        $values = experience::all();
        if ($values->count() > 0) {
            return response()->json([
                'status' => 200,
                'myexperience' => $values
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => 'Not Found Records!!'
            ], 404);
        }
    }
    public function list($user_id)
    {
        // $list = experience::orderBy('id', 'desc')->limit(1)->get();
        // if ($list) {
        //     return response()->json([
        //         'list' => $list
        //     ], 200);
        // }
        $user_id=session()->get('user_id');
        $list = experience::where('user_id', $user_id)
                        ->orderBy('user_id', 'desc')
                        ->limit(3)->get();
    
        if ($list) {
            return response()->json(['list' => $list], 200);
        } else {
            return response()->json(['message' => 'No languages found for the user'], 404);
        }
    }


    public function delete($id){
        $delete=experience::find($id);
        if($delete){
            $delete->delete();
            return response()->json([
                'status'=>200,
                'message'=>'deleted'
            ],200);
        }
    }
}
