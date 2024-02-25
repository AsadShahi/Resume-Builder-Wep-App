 <?php
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
Route::post('/register', [RegisteredUserController::class, 'store'])
                ->middleware('guest')
                ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
                ->middleware('guest')
                ->name('login');

Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
                ->middleware('guest')
                ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
                ->middleware('guest')
                ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['auth', 'signed', 'throttle:6,1'])
                ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware(['auth', 'throttle:6,1'])
                ->name('verification.send');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
                ->middleware('auth')
                ->name('logout');

                Route::get('/users',function(){
                    return Auth::User()->id;
                    die;
                    $user_id= Auth::User()->id;
                    session()->put('user_id', $user_id);
                    $value=session('user_id');
                    return $value;
                });


                
                
                //this is for language list
                Route::get('/language-list', function(){
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                   return app()->call('App\Http\Controllers\LanguageControlelr@list', ['user_id' => $user_id]);
                });



               //this is skill
                Route::get('/skills-list', function(){
                    
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                    return app()->call('App\Http\Controllers\SkillsControlelr@list', ['user_id' => 
                    $user_id]);
                });




                //intrest
                Route::get('/interest-list', function(){
                    
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                    return app()->call('App\Http\Controllers\InterestsController@list', ['user_id' => $user_id]);
                });



                //education
                Route::get('/education-list', function(){
                    
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                    return app()->call('App\Http\Controllers\EducationController@list', ['user_id' => $user_id]);
                });

                //experience
                Route::get('/experience-list', function(){
                    
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                    return app()->call('App\Http\Controllers\ExperienceController@list', ['user_id' => $user_id]);
                });


                //persanal details
                Route::get('/personal-list', function(){
                    
                    $user_id = Auth::user()->id;            
                    session()->put('user_id', $user_id);
                       
                    //app is helper function to retrieve the list of the applicathin
                    return app()->call('App\Http\Controllers\ResumeController@list', ['user_id' => $user_id]);
                });
             
                    //ُSocial links 
                    Route::get('/social-links-list', function(){
                                        
                        $user_id = Auth::user()->id;            
                        session()->put('user_id', $user_id);
                        
                        //app is helper function to retrieve the list of the applicathin
                        return app()->call('App\Http\Controllers\SocialLinkController@list', ['user_id' => $user_id]);
                    });


            




            


                // Route::get('/langage-list', function(){
                    
                //         $user_id = Auth::user()->id;            
                //         session()->put('user_id', $user_id);
                          
                       
                //    });





   