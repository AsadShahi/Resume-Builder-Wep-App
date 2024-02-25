<?php

namespace App\Http\Controllers;

use App\Http\Requests\ResumeRequest;
// use App\Http\Requests\resumesample;
use App\Models\coversample;
use App\Models\resumesample;
// use App\Models\resumesample as ModelsResumesample;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use LDAP\ResultEntry;

class ResumeSampleController extends Controller
{
    public function index()
    {
        $resume = resumesample::all();
        if ($resume) {
            return response()->json([
                'status' => 200,
                'resume' => $resume
            ], 200);
        }
    }
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(), [
            'title' => 'required|string',
            'image' => 'required'
        ]);
        if ($validation->fails()) {
            return response()->json([
                'status' => 422,
                'message' => $validation->messages()
            ], 422);
        } else {
            $imageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
            resumesample::create(
                [
                    'title' => $request->title,
                    'image' => $imageName
                ]
            );
        }
        Storage::disk('public')->put($imageName, file_get_contents($request->image));
        return response()->json([
            'status' => 200,
            'message' => 'Resume Sample Added Successsfully!!'
        ], 200);
    }
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $delete = resumesample::findOrFail($id);
        if (!$delete) {
            return response()->json([
                'status' => 404,
                'message' => 'No Such File Found!!!'
            ], 404);
        }
        $Link = Storage::disk('public');
        if ($Link->exists($delete->image))
            $Link->delete($delete);
        $delete->delete();
        return response()->json(['message' => 'Deleted Successfully']);
    }
    public function List()
    {
        // $list = resumesample::orderBy('id', 'desc')->limit(1)->get();

        // if ($list) {
        //     return response()->json(
        //         ['list' => $list],
        //         200
        //     );
        // }
        return 'welcome';
    }
}
