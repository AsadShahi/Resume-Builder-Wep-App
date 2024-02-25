<?php
namespace App\Http\Middleware;
return [


    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */







    'paths' => [
      '*',
      'api/*',
      'oauth/*',
      'sanctum/csrf-cookie',
      'storage/*', // Add the specific image path here
      'http://localhost:3000/storage/*'
  ],
  


    // 'paths' => ['*'],  it was defulth but now comment

    'allowed_methods' => ['*'],

    
    
    'allowed_origins' => [
        '*',
      'http://localhost:3000',
   

        env('FRONTEND_URL', 'http://localhost:3000')
    
         ],


    'allowed_origins_patterns' => ['*'],

    'allowed_headers' => ['*'],
    

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
