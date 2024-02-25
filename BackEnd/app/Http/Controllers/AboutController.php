<?php

namespace App\Http\Controllers;

use App\Http\Requests\AboutRequest;
use App\Models\about;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AboutController extends Controller
{
    public function index()
    {
        $about = about::all();
        return response()->json([
            'about'=>$about
        ],200);
    }
  
    public function store(Request $request)
    {
        $Validatore=Validator::make($request->all(),[
            'title' => 'required',
            'content' => 'required|string',
            'image' => 'required'
        ]);
        if($Validatore->fails()){
            return response()->json([
                'status' => 404,
                'message' => $Validatore->messages()
            ], 404);
        }else{
        $ImageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
        about::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $ImageName
        ]);
        Storage::disk('public')->put($ImageName, file_get_contents($request->image));
        return response()->json([
            'status' => 200,
            'AboutSuccessImage' => 'About Added Successfully!!!'
        ], 200);
    }
    }
    public function edit(Request $request, $id)
    {
        try {
            $AboutEdit = About::find($id);
            if (!$AboutEdit) {
                return response()->json(
                    ['aboutEdit' => 'not Found']
                );
            }
            $AboutEdit->title = $request->title;
            $AboutEdit->content = $request->content;
            if ($request->image) {
                $storage = Storage::disk('public');
                if ($storage->exists($AboutEdit->image))
                    $storage->delete($AboutEdit->image);
                $NewImageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
                $AboutEdit->image = $NewImageName;
                $storage->put($NewImageName, file_get_contents($request->image));
            }
            $AboutEdit->save();
            return response()->json([
                'update' => 'Data Updated Successfully!!!'
            ]);

        } catch (\Throwable $th) {
            //throw $th;
        }


    }
    public function list($id)
    {
        $list = About::find($id);
        if (!$list) {
            return response()->json(
                [
                    'status' => 404,
                    'message' => 'Not Found!!!'
                ],
                404
            );
        } else {
            return response()->json([
                'status' => 200,
                'list' => $list
            ], 200);
        }
    }
    public function delete($id)
    {
        $AboutDelete = About::findOrFail($id);

        if (!$AboutDelete) {
            return response()->json([
                'status' => 404,
                'message' => 'No Such File Found!!!'
            ], 404);
        }
        $Link = Storage::disk('public');
        if ($Link->exists($AboutDelete->image))
            $Link->delete($AboutDelete);
        $AboutDelete->delete();
        return response()->json(['message' => 'Deleted Successfully']);
    }
}
