<?php
require_once('auth.php');

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CoverController;
use App\Http\Controllers\CoverSampleController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\LanguageControlelr;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\ResumeSampleController;
use App\Http\Controllers\SkillsControlelr;
use App\Http\Controllers\SocialLinkController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\InterestsController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Auth;






//end


use Illuminate\Support\Facades\Session;


//auth



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/userlist',[TestController::class,'test']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::prefix('admin')->group(function () {
    Route::controller(UserController::class)->group(function () {
        Route::get('user-list', 'index');
        Route::post('user-create', 'StoreUser');
        Route::get('user-edit/{id}', 'UserEdit');
        Route::delete('user-delete/{id}', 'deleteFunction');
    });
    Route::controller(ContactController::class)->group(function () {
        Route::get('contact-index', 'index');
        Route::post('contact-create', 'ContactStore');
        Route::get('contact-show/{id}', 'show');
        Route::delete('contact-delete/{id}', 'delete');
    });
    Route::controller(AboutController::class)->group(function () {
        Route::get('about-index', 'index');
        Route::get('about-show/{id}', 'list');
        Route::post('about-create', 'store');
        Route::put('about-edit/{id}','edit');
        Route::delete('about-delete/{id}', 'delete');
    });
    Route::controller(CoverController::class)->group(function () {
        Route::get('cover-index', 'index');
        Route::post('cover-create', 'store');
        Route::delete('cover-delete/{id}', 'delete');
        Route::get('cover-show-only', 'onlyFunction');
    });
    Route::controller(ResumeController::class)->group(function () {
        Route::get('resume-index', 'index');
        Route::get('resume-list','list');
        Route::post('resume-create', 'store');
    });
    Route::controller(ExperienceController::class)->group(function () {
        // Route::get()
        Route::post('experience-create', 'store');
        Route::get('experience-index', 'index');
        Route::get('experience-list', 'list');
        Route::delete('experience-delete/{id}','delete');
    });
    Route::controller(EducationController::class)->group(function () {
        Route::get('education-index', 'index');
        Route::post('education-create', 'store');
        Route::get('education-list', 'list');
        Route::delete('education-delete/{id}','delete');
    });
    Route::controller(TestimonialController::class)->group(function () {
        Route::get('test-index', 'index');
        Route::post('test-create', 'store');
        Route::get('test-show/{id}', 'show');
        Route::put('test-edit/{id}', 'edit');
        Route::delete('test-delete/{id}', 'delete');
    });
    Route::controller(ResumeSampleController::class)->group(function () {
        Route::get('resume-sample-index', 'index');
        Route::post('resume-sample-create', 'store');
        Route::get('resume-sample-show/{id}', 'show');
        Route::get('resume-sample-edit/{id}', 'edit');
        Route::delete('resume-sample-delete/{id}', 'delete');
        Route::get('resume-sample-list','lsit');
     
    });
    Route::controller(CoverSampleController::class)->group(function () {
        Route::get('cover-sample-index', 'index');
        Route::post('cover-sample-create', 'store');
        Route::get('cover-sample-show/{id}', 'show');
        Route::put('cover-sample-edit/{id}', 'edit');
        Route::delete('cover-sample-delete/{id}', 'delete');
    });

    Route::controller(LanguageControlelr::class)->group(function () {
        Route::post('language-create', 'store');
        Route::get('language-index', 'index');
        //  Route::get('language-list', 'list');
        Route::delete('language-delete/{id}','delete');
        Route::get('/test/lang','TestLang');
        
    });
    Route::controller(SkillsControlelr::class)->group(function () {
        Route::post('skills-create', 'create');
        Route::get('skills-index', 'index');
    Route::get('skills-list', 'list');
    });
    Route::controller(NewsLetterController::class)->group(function(){
        Route::get('newsletter-index','index');
        Route::post('newsletter-create','create');
        Route::get('newsletter-show/{id}','show');
        Route::get('newsletter-edit/{id}','edit');
        Route::delete('newsletter-delete/{id}','delete');
    });
    Route::controller(InterestsController::class)->group(function(){
        Route::post('interest-create','store');
        Route::get('interest-list','list');
    });
    Route::controller(AdminController::class)->group(function(){
        Route::post('/store-admin','store');
        Route::get('adminlists','index');
        Route::put('admins/{admin}','update');
        Route::get('admins/{admin}','show');
        Route::get('admin-delete','deleteAdmin');
        Route::post('/login-system','adminLogin');
        Route::get('/test-login','LoginWithSession');
        Route::delete('/admin/delete/{id}','AdminDelete');
    });
    // Route::get('admins', 'App\Http\Controllers\AdminController@index');
    // Route::post('admins', 'App\Http\Controllers\AdminController@store');
    // Route::get('admins/{admin}', 'App\Http\Controllers\AdminController@show');
    // Route::put('admins/{admin}', 'App\Http\Controllers\AdminController@update');
    // Route::delete('admins/{admin}', 'App\Http\Controllers\AdminController@destroy');
});




// Route::get('/admin/language-create/{user_id}', [AdminController::class,'list'])->middleware('auth:api');

//users
// Route::post('/users', 'UserController@store');


//it is registration
Route::post('/register', [UserController::class, 'store']);
Route::get('/register', [UserController::class, 'index']);

Route::get('/test-list',function(){
    // return session::get('user_id');
//  return session
});
//it is for user panel
Route::post('/login', [AuthController::class,'login']);
Route::get('/login', [AuthController::class,'login']);
Route::get('/test', [AuthController::class,'test'])->middleware('guest');



//it is for admin panel
Route::post('/admin/login', [AdminController::class,'loginAdmin']);
Route::get('/admin/login', [AdminController::class,'loginAdmin']);


Route::post('/admin/skills-create', [SkillsControlelr::class,'create']);


Route::post('/admin/skills-create', [SkillsControlelr::class, 'store']);
Route::get('/admin/show-message',[SkillsControlelr::class,'ShowMessage']);   
Route::get('/admin/list',function(){
    return Auth::User()->email;
});
//for admins
Route::post('/admin/', [SkillsControlelr::class, 'store']);

//for showing admin lists
Route::post('/admin/login', [AdminController::class, 'adminlogin']);
Route::post('/admin/logout', [AdminController::class, 'adminlogout']);
Route::get('/user-list',[LanguageControlelr::class,'userlist']);
Route::get('/admin-delete/{id}',[AdminController::class,'deleteAdmin']);

Route::resource('adminlists', AdminController::class);

//this is for social links
Route::post('/admin/solial-links', [SocialLinkController::class, 'store']);

// $user_id = Auth::user()->id;


//for sending user_id to list
///////////////////

// Route::get('/userid-list', function(){
//     $user_id = Auth::user()->id;
//     dd($user_id);
// });


// Route::middleware('auth:api')->get('/user-id', function () {
//     $user_id = Auth::guard('api')->user()->id;
//     return $user_id;
// });


/////////////////////////////////

   

// Route::get('/list-user',function(){
    
    // });





    Route::middleware('auth:sanctum')->get('/user', function () {
        $user = Auth::user();
        $userId = $user->id;
        
        return $userId;
    });
    


 


     Route::post('/admin/language-create', [LanguageControlelr::class, 'create']);

   Route::get('/admin/language-list', [LanguageControlelr::class, 'list']);





    // Route::post('/admin/language-create', [LanguageControlelr::class, 'create']);
    // Route::get('/admin/language-create', [LanguageControlelr::class, 'list']);


    ///////////this is for testing
 





    Route::get('/resume/image/{imageName}', [ResumeController::class, 'getImage'])->name('resume.image');







    Route::middleware('auth:sanctum')->get('/example', function (Request $request) {
        $userId = $request->user()->id;
        // Your code here
        dd($userId);
        
        return response()->json(['user_id' => $userId]);
    });








    










        //default غرض نگیر
    Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {


        return $request->user();
    });




