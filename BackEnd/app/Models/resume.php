<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class resume extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'user_id',
        'jobtitle',
        'firstname',
        'lastname',
        'email',
        'phone',
        'country',
        'city',
        'aboutme',
        'image'
    ];

    public function userR(){
        return $this->belongsTo(User::class);
    }
}
