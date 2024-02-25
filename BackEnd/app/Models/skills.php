<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class skills extends Model
{
    use HasFactory;
    protected $fillable=['skills','skills_level'];

    
    public function SkillsBelongsToUser(){
        return $this->belongsTo(User::class);
    }
}
