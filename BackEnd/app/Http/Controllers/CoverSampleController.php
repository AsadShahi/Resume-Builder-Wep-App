<?php

namespace App\Http\Controllers;

use App\Http\Requests\coversample as RequestsCoversample;
use App\Models\coversample;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
class CoverSampleController extends Controller
{
     public function index()
    {
        $about = coversample::all();
        return response()->json([
            'about'=>$about
        ],200);
        // $coverSample = coversample::all();
        // if ($coverSample->count() > 0) {
        //     return response([
        //         'status' => 200,
        //         'data' => $coverSample
        //     ], 200);
        // } else {
        //     return response([
        //         'status' => 404,
        //         'errorMessage' => 'Not Found Any Data'
        //     ], 404);
        // }
    }
    public function store(RequestsCoversample $request)
    {
        $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
        coversample::create(
            [
                'title' => $request->title,
                'image' => $imageName
            ]
        );
        Storage::disk('public')->put($imageName, file_get_contents($request->image));
        return response()->json([
            'status' => 200,
            'message' => 'Resume Sample Added Successsfully!!'
        ], 200);
    }
    public function edit(coversample $request, $id)
    {
        try {
            $coversampleEdit = coversample::find($id);
            if (!$coversampleEdit) {
                return response()->json(
                    [
                        'status' => 404,
                        'message' => 'Somethings Really Wrong!!'
                    ],
                    404
                );
            }
            $coversampleEdit->title = $request->title;
            if ($request->image) {
                $storage = Storage::disk('public');
                if ($storage->exists($coversampleEdit->image))
                    $storage->delete($coversampleEdit->image);
            }
            $ImageNewName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
            $coversampleEdit->image = $ImageNewName;
            $storage->put($ImageNewName, file_get_contents($request->image));
            $coversampleEdit->save();
            return response()->json([
                'update' => 'Data Updated Successfully!!!'
            ]);
        } catch (\Throwable $th) {
        }
    }
    public function show($id)
    {
        $Show = coversample::find($id);
        if ($Show) {
            return response()->json([
                'show' => $Show
            ]);
        } else {
            return response()->json([
                'show' => 'Not Found'
            ]);
        }
    }
    public function delete($id)
     {
        $AboutDelete = coversample::findOrFail($id);

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