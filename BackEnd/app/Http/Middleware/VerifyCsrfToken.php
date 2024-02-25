<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        'api/admin/contact-delete/*',
        'api/admin/newsletter-delete/*',
        'api/admin/test-create',
        'api/admin/contact-create',
        'api/admin/resume-create',
        'api/admin/experience-create',
        'api/admin/education-create',
        'api/admin/interest-create',
        'api/admin/skills-create',
        'api/admin/language-create',
        'api/admin/adminlist',
       'api/admin/store-admin',
       'api/admin/login-system',
       'api/admin/cover-create',
       'api/admin/newsletter-create',
       'api/admin/solial-links',
       'api/admin/user-delete/*',
      'api/admin/admin/delete/*',

    ];
}
