import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

function Survey(){
    const [questions, setQuestions] = useState([]);
    
    useEffect(()=>{
        let survey_id = localStorage.getItem("survey_id")
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/get_survey/'+survey_id,
        }).then(function (response) {
            let all_questions = response.data.data;
            setQuestions(all_questions);
        }).catch(function(error){
            console.log(error);
        })
    },[])

    return (
        <>
        <h1>
            {localStorage.getItem("survey_name")}
        </h1>
        
        {questions.map((question) =>(
            console.log(question.content),
            <Question 
                key = {question.id}
                question ={question}
            />   
        ))}
        </>
    )
}
export default Survey;