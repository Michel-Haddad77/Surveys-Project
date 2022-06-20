import SurveyCard from "./SurveyCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function AllSurveys(){
    const [surveys, setSurveys] = useState([]);
    const [completed, setCompleted] = useState([]);
    const navigate = useNavigate();

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

    //get all surveys and put them in surveys array on render
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/all_surveys',
        }).then(function (response) {
            
            let all_surveys = response.data.data;
            setSurveys(all_surveys);
        }).catch(function(error){
            console.log(error);
        })
    },[])

    //get completed surveys and put them in completed array on render
    useEffect(()=>{
        let token = localStorage.getItem("token");
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/completed_surveys',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        }).then(function (response) {
            
            let completed_surveys = response.data.data;
            setCompleted(completed_surveys);
        }).catch(function(error){
            console.log(error);
        })
    },[])

    return (
        <>
        <Button text={"Logout"} onClick={logOut}/>
        <div className="surveys-container">
            <h2>All Surveys</h2>
            <>
            {surveys.map((survey) =>(
                <SurveyCard 
                    key = {survey.id}
                    id={survey.id}
                    title = {survey.name}
                    onClick = {
                        function openSurvey(){
                            navigate("/survey");
                            localStorage.setItem("survey_id",survey.id)
                            localStorage.setItem("survey_name",survey.name)
                        }}
                />
            )) }
            </>
        </div>

        <div className="surveys-container">
            <h2>Completed Surveys</h2>
            <>
            {completed.length? completed.map((survey) =>(
                <SurveyCard 
                    key = {survey.id}
                    id={survey.id}
                    title = {survey.name}
                    style = {"completed"}
                    
                />
            )) : (<p>You haven't completed any surveys yet.Go complete some surveys</p>) }
            </>
        </div>

        </>
    )
}

export default AllSurveys;