<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Choice;

class UserController extends Controller
{
    //this api gets the selected survey questions and question choices
    public function getSurvey($survey_id){
        $questions = Survey::find($survey_id)->questions;
        
        foreach($questions as $question){
            $type = $question->type;
            if ($type === "radio_button" or $type ==="dropdown" or $type ==="checkbox" or $type ==="range"){
                //create a choices key with the content related to the question
                $question->choices = Choice::all()->where('question_id','=',$question->id)->map(function ($choice) {
                    return $choice->content;
                });
            }
        }

        return response()->json([
            "status" => "Success",
            "data" => $questions
        ], 200);
    }

    public function submitSurvey(Request $request){
        
    }


}
