<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    //one to many relationship between surveys and questions
    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    //Create many to many relationship between surveys and users (completed by)
    public function usersWhoCompleted(){

        return $this->belongsToMany(User::class);
    }
}
