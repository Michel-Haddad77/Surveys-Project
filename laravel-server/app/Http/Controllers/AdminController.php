<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;
use App\Models\Question;
use App\Models\Choice;

class AdminController extends Controller
{
    //this function adds a new survey to the db along with its questions and choices(if any)
    public function createSurvey(Request $request){
        $survey = new Survey;
        $survey->name = $request->survey_name;
        $survey->save();

        $questions = $request->questions;//questions received from frontend is an array of arrays [[content,type,[choice1,..]],..]

        //creating new question row for each added question
        foreach ($questions as $question) {
            $new_question = new Question;

            $new_question->content = $question[0];
            $new_question->type = $question[1];
            $new_question->survey_id = $survey->id;
            $new_question->save();

            //creating choices for each question (if there any)
            if(count($question)>2){
                //get choices array from the question array
                $choices = $question[2]; 
                if ($question[1] == "radio_button" or $question[1] ==="dropdown" or $question[1] ==="checkbox" or $question[1] ==="range"){
                    //create new choice row for the associated question
                    foreach ($choices as $choice) {
                        $new_choice = new Choice;
                        $new_choice->content = $choice;
                        $new_choice->question_id = $new_question->id;
                        $new_choice->save();
                    }
                }
            }
        }

        return response()->json([
            "status" => "Success",
        ], 200);
    }
}
