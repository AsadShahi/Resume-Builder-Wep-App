<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class language extends Model
{
    use HasFactory;
    protected $fillable=['user_id','language','level'];


  
    //relashonship
    public function LanguageToUsers(){
        return $this->belongsTo(User::class);
    }
}
