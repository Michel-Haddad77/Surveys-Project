<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Choice extends Model
{
    use HasFactory;

    //create an inverse one to many (belongs to) between choices and questions
    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
