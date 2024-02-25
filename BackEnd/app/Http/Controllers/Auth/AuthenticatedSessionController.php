<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AuthenticatedSessionController extends Controller
{
 




    public function store(LoginRequest $request): Response
{
    $request->authenticate();

    $request->session()->regenerate();

    // Store the user ID in the session
    $userId = Auth::user()->id;
    $request->session()->put('user_id', $userId);

    return response()->noContent();
}







// public function store(LoginRequest $request): Response
// {
//     $request->authenticate();

//     $request->session()->regenerate();
//     // This part temporarily
//     $userId = Auth::user()->id;

//     $request->session()->put('user_id', $userId);

//     return response()->noContent();
// }












    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): Response
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->noContent();
    }
}
