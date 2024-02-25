<?php

namespace App\Http\Controllers;

use App\Http\Requests\TestRequest;
use Illuminate\Http\Request;
use App\Models\testimonial;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


class TestimonialController extends Controller
{
   public function index(){
   $test=testimonial::all();
  if($test){
    return response()->json([
        'test'=>$test
    ],200);
  }
}
public function show($id)
{
    $list = testimonial::find($id);
    if (!$list) {
        return response()->json([
            'status' => 404,
            'message' => 'Testimonial Not Found!!!'
        ], 404);
    } else {
        return response()->json([
            'status' => 200,
            'list' => $list
        ], 200);
    }
}
public function store(TestRequest $request)
{
    try {
        $ImageName = Str::random(32) . '.' . $request->image->getClientOriginalExtension();
        Testimonial::create([
            'name' => $request->name,
            'lastname' => $request->lastname,

            'test_title' => $request->title,
            'test_body' => $request->body,
            'test_image' => $ImageName
        ]);
        Storage::disk('public')->put($ImageName, file_get_contents($request->image));
        return response()->json([
            'TestSuccessMessage' => 'Data Inserted '
        ], 200);
    } catch (\Throwable $th) {
        return response()->json([
            'testError' => 'Occured An Error',
            'errorMessage' => $th->getMessage(), // Add this line to get the actual error message
        ], 500);
    }
}
public function edit(Request $request, $id)
{

    try {
        $testimonialEdit = Testimonial::find($id);
        if (!$testimonialEdit) {
            return response()->josn([
                'TestError' => 'NotFound!!'
            ]);
        }
        $testimonialEdit->name = $request->name;
        $testimonialEdit->lastname = $request->lastname;

        $testimonialEdit->test_title = $request->test_title;
        $testimonialEdit->test_body = $request->test_body;
        if ($request->test_image) {
            $storage = Storage::disk('public');
            if ($storage->exists($testimonialEdit->test_image))
                $storage->delete($testimonialEdit->test_image);
            $NewImageName = Str::random(32) . '.' . $request->test_image->getClientOriginalExtension();
            $testimonialEdit->test_image = $NewImageName;
            $storage->put($NewImageName, file_get_contents($request->test_image));
        }
        $testimonialEdit->save();
        return response()->json(['message' => 'Ok!! Update your data']);

    } catch (\Throwable $th) {
        return response()->json(
            [
                'TestimonialNotFound' => 'NotFound'
            ]
        );
    }
}
public function delete($id)
{

    try {
        $TestimonialDelete = Testimonial::findOrFail($id);
        if (!$TestimonialDelete) {
            return response()->json(
                [
                    'testDelete' => 'Not Found'
                ]
            );
        }
        $Link = Storage::disk('public');
        if ($Link->exists($TestimonialDelete->test_image))
            $Link->delete($TestimonialDelete->test_image);
        $TestimonialDelete->delete();
        return response()->json([
            'test_delete' => 'Delete Successfully'
        ]);
    } catch (\Throwable $th) {


    }

}
}
