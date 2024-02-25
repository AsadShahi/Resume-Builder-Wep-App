<?php

namespace App\Http\Controllers;

use App\Models\SocialLink;
use Illuminate\Http\Request;

class SocialLinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
    
            'user_id' => 'required|exists:users,id',
            'socialLinks.*.label' => 'required|string',
            'socialLinks.*.link' => 'required|string',
        ]);
    
        // Get the user ID
        // $userId = auth()->user()->id;
    
        $user_id = $request->input('user_id');
        // Loop through each socail links and labels and save it to the database
        foreach ($validatedData['socialLinks'] as $socialLinkData) {
            $socialLink = new SocialLink();
            
            $socialLink->user_id = $user_id; 
            $socialLink->label = $socialLinkData['label'];
            $socialLink->link = $socialLinkData['link'];
            $socialLink->save();
        }
    
        // Return a success response
        return response()->json([
            'message' => 'links created successfully',
        ], 200);
    }




    public function list($user_id)
    {
        // $user_id = Auth::guard('api')->user()->id;
    
       
    
            $user_id=session()->get('user_id');
            $list = SocialLink::where('user_id', $user_id)
                            ->orderBy('user_id', 'desc')->limit(3)
                            ->get();
                            if ($list) {
                                return response()->json(['list' => $list], 200);
                            } else {
                                return response()->json(['message' => 'No links and lebel found for the user'], 404);
                            }
        
        }











    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function show(SocialLink $socialLink)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function edit(SocialLink $socialLink)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SocialLink $socialLink)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SocialLink  $socialLink
     * @return \Illuminate\Http\Response
     */
    public function destroy(SocialLink $socialLink)
    {
        //
    }
}
