import { useState, useEffect } from "react";
import CreateQuestion from "./CreateQuestion";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function CreateSurvey(){
    const navigate = useNavigate();

    const [newQuestions, setNewQuestions] = useState([]);
    //states to store the inserted questions and choices to send to the backend
    //allQuestionsArray: [[content,type,[choice1,choice2,...]], ...]
    const [allQuestionsArray, setAllQuestionsArray] = useState([]);
    const [questionArray, setQuestionArray] = useState([]);
    //choices to be sent to backend [choice1,choice2,...]
    const [choices, setChoices] = useState([]);

    //onclick function that creates a new question component  by updating the newQuestions state
    function addQuestion(){
        setNewQuestions([...newQuestions,<CreateQuestion questionArray={questionArray} setQuestionArray ={setQuestionArray}/>]);
    }

    //when admin clicks on create survey
    function createSurvey(){

    }

    //function called when logout buttn is pressed
    function logOut(){
        let token = localStorage.getItem("token");
        //linking to logout api
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/logout',
        headers: {
            'Authorization': 'Bearer ' + token
        },
        })
        .then(function (response) {
        console.log(response.data.message);
        localStorage.clear();
        navigate("/");
        })
    }

    return (
        <>
            <Button text={"Logout"} onClick={logOut}/>
            <CreateQuestion 
                questionArray={questionArray} 
                setQuestionArray ={setQuestionArray}
                choices = {choices}
                setChoices = {setChoices}
            />
            {newQuestions}
            <Button text={"Add Question"} onClick={addQuestion} />
            <Button text={"Create Survey"}/>
        </>
    );

}
export default CreateSurvey;