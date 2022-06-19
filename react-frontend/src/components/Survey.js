import { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";

function Survey(){
    const [questions, setQuestions] = useState([]);
    const [choices, setChoices] = useState([]);
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
        <ol>
        {questions.map((question) =>(
            console.log(question.content),
            <Question 
                key = {question.id}
                question ={question}
            />   
        ))}
        </ol>
        </>
    )
}
export default Survey;