<?php

namespace App\Http\Controllers;
use App\Models\Survey;

use Illuminate\Http\Request;

class SurveyController extends Controller
{
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
}
