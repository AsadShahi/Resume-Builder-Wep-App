<?php

namespace App\Http\Controllers;

use App\Models\contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        $ContactIndex = Contact::all();
        if ($ContactIndex->count() > 0) {
            return response()->json([
                'status' => 200,
                'contactindex' => $ContactIndex,
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "No Records Found!!!"
            ], 404);
        }
    }



    
    public function ContactStore(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'fullname' => 'required|string|max:60',
            'email' => 'required|email|max:300',
           
            'subject' => 'required|min:30|max:800',
        ]);
        if ($validate->fails()) {
            return response()->json(
                [
                    'status' => 422,
                    'Errors' => $validate->messages()
                ],
                422
            );
        } else {
            $contact = Contact::create(
                [
                    'fullname' => $request->fullname,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'subject' => $request->subject
                ]
            );
            if ($contact) {
                return response()->json([
                    'status' => 200,
                    'message' => 'Contact Added Successfully!'
                ], 200);
            } else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Somthing relly wrong!'
                ], 500);
            }
        }
    }
    public function ContactEdit(Request $request, $id)
    {
        $ContactEdit = Contact::findOrFail($id);
        if ($ContactEdit) {
            return response()->josn([
                'status' => 200,
                'ContactEdit' => $ContactEdit
            ], 200);

        } else {
            return response()->json([
                'status' => 404,
                'message' => 'No Such Contact Found!!!'
            ], 404);
        }
    }
    public function ContactUpdate($id)
    {

    }
    public function delete($id)
    {
        $ContactDelete = contact::findOrFail($id);
        if ($ContactDelete) {
            $ContactDelete->delete();
            return response()->json([
                'status' => 200,
                'ContactDelete' => $ContactDelete
            ], 200);
        } else {
            return response()->josn(
                [
                    'status' => 404,
                    'message' => 'No Such File Found!!!'
                ],
                404
            );
        }
    }
}
