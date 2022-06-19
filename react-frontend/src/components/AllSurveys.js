import SurveyCard from "./SurveyCard";
import { useState, useEffect } from "react";
import axios from "axios";

function AllSurveys(){
    const [surveys, setSurveys] = useState([]);

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

    return (
        <>
        <div className="all-surveys-container">
            <h2>All Surveys</h2>
            <>
            {surveys.map((survey) =>(
                <SurveyCard 
                    key={survey.id}
                    title = {survey.name}
                />
            )) }
            </>
        </div>
        </>
    )
}

export default AllSurveys;