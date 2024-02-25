<?php
namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class TestController extends Controller{
    function test(){
            $user=Auth::User()->name;
            return $user;
    }
}