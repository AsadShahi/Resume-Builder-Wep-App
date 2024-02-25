<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cover extends Model
{
    use HasFactory;
    protected $fillable = [
        'fullname',
        'email',
        'jobtitle',
        'phone',
        'company',
        'coverdetails'
    ];
}
