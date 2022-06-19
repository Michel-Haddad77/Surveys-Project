import { useState, useEffect } from "react";
import Answer from "./Answer";

function Question({question}){
    const [choices, setChoices] = useState([]);
    //var choices = ["empty"];
    
    useEffect(() =>{
        if(Object.keys(question).includes("choices")){
            //console.log("working");
            //console.log(question.choices);
            setChoices(question.choices);
        }
    },[])
    
    return(
        <>
        <p>{question.content}</p>
        <Answer 
            key={question.id}
            question = {question}
            choices = {choices}
        />
        {/* {renderSwitch()} */}
        </>
    )
}

export default Question;

//function for using switch casing and returning the appropriate input type for answer
// function renderSwitch(){
        
// }