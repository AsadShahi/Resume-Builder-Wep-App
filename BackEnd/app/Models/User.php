<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
//form jwt

use Illuminate\Contracts\Auth\MustVerifyEmail;

use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{


    use HasApiTokens, HasFactory, Notifiable;



    public function getJWTIdentifier()
{
    return $this->getKey();
}

public function getJWTCustomClaims()
{
    return [];
}
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];  public  function personalR(){
        return $this->hasOne(resume::class);
    }
    public function educations()
    {
        return $this->hasMany(education::class);
    }
    public function ExperienceR(){
        return $this->hasMany(experience::class);
    }
    public function LanguageR(){
        return $this->hasMany(language::class);
    }
    public function SkillsR(){
        return $this->hasMany(skills::class);
    }
   

    public function interest(){
        return $this->hasMany(interest::class);
    }
    public function socialLink(){
        return $this->hasMany(socialLinks::class);
    }



}
