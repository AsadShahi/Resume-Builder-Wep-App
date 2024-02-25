<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class interests extends Model
{
  
    use HasFactory;
  

    public function intrestToUser(){

      return $this->belongsTo(User::class);

    }
   
  protected $fillable=[

    'user_id',
    'title',
    'image'
  ];
}
