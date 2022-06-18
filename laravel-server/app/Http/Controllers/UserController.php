<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Choice;
use App\Models\User;
use Tymon\JWTAuth\Contracts\Providers\Auth;

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

    //this function updates the completes surveys (pivot) table 
    //and inserts the received question_ids and answers in the answers table(pivot)
    public function submitSurvey(Request $request){
        //update the survey_user pivot table (completed)
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $user->completedSurveys()->attach($request->survey_id);

        //answers is an object sent from the frontend{"question_id": "answer"} 
        $answers = $request->answers; 
        //$answers = (array) $answers;

        //loop over each key:value pair and insert them in the answers table
        foreach ($answers as $question_id => $answer_content) {
            $user->answers()->attach($question_id, array('content' => $answer_content));
        }

        return response()->json([
            "status" => "Success",
            "data" => $answers
        ], 200);
    }


}
