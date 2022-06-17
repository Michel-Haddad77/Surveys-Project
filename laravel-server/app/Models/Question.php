<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    //create an inverse one to many (belongs to) between questions and surveys
    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }

    //Create many to many relationship between users and questions (answers)
    public function answers(){

        return $this->belongsToMany(User::class, 'answers');
    }

    //one to many relationship between questions and choices
    public function questions()
    {
        return $this->hasMany(Choice::class);
    }
}
