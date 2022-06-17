<?php

namespace App\Http\Controllers;

use App\Models\Choice;
use App\Models\Survey;
use App\Models\User;
use App\Models\Question;

use Illuminate\Http\Request;

class SurveyController extends Controller
{
    //this api gets all the available surveys
    public function getAllSurveys(){
        $surveys = Survey::all();
        // foreach($surveys as $survey){
        //     $cat = Category::find($survey->category_id);
        //     $survey->category = $cat->name;
        // }
        return response()->json([
            "status" => "Success",
            "data" => $surveys,
        ], 200);
    }

    //this api gets the completed surveys of the authenticated user
    public function getCompletedSurveys(){
        $completed = auth()->user()->completedSurveys;

        return response()->json([
            "status" => "Success",
            "data" => $completed
        ], 200);
    }

}
