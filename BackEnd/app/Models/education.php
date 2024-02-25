<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class education extends Model
{



    public function User()
{
    return $this->belongsTo(User::class);
}
    use HasFactory;
    protected $fillable = [
        'user_id',
        'school',
        'field',
        'graduationDate',
        'city',
        'state',
        'country',
        'info',
    ];
}
