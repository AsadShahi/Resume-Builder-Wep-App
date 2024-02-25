<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class experience extends Model
{

  
    use HasFactory;

   
    protected $fillable = ['user_id', 'title', 'role', 'start_date', 'end_date', 'country', 'city', 'state', 'information'];

    public function ExperienceBelongsToUser(){
        return $this->belongsTo(User::class);
    }
}
