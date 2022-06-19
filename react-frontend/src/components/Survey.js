import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Question from "./Question";
import Button from "./Button";

function Survey(){
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] =useState({});
    const navigate = useNavigate();

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

    function submitSurvey(){
        //create object to send to backend
        let request = {
            "survey_id":localStorage.getItem("survey_id"),
            "user_id":localStorage.getItem("id"),
            "answers": answers
        }
    
        //linking with submit_survey api
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/submit_survey',
        headers: {
            "Content-type": "application/json",
          },
        data: request,//axios automatically stringifies objects to JSON
        })
        .then(function (response) {
            console.log(response.data.data);
            alert("thank you for submitting the survey");
            //navigate to all surveys page
            navigate("/all_surveys");
        })
        .catch(function (error){
            console.log(error);
        })
    }

    return (
        <>
        <h1>
            {localStorage.getItem("survey_name")}
        </h1>

        {questions.map((question) =>(
            <Question 
                key = {question.id}
                question ={question}
                answers = {answers}
                setAnswers = {setAnswers}
            />   
        ))}
        <Button text="Submit Survey" onClick={submitSurvey}/>
        </>
    )
}
export default Survey;