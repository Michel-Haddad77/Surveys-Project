import { useState, useEffect } from "react";
import Button from "./Button";

function AddChoices({choices, setChoices}){
    const [moreChoices, setMoreChoices] = useState([]);
    const [choiceNumber, setChoiceNumber] = useState(2);

    //onclick function that creates a new input for choices  by updating the morechoices state
    function addChoices(){
        setMoreChoices([...moreChoices,
            <><input 
                id ={choiceNumber}
                type="text"
                onChange={(e) => {
                    setChoices({...choices, [e.target.id]:e.target.value});
                    console.log(choices);
                }}
            ></input><br/></>]);
        setChoiceNumber(choiceNumber++);
    }
    return (
        <>
        <label>Possible Answers: </label><br/>
        <input 
            type="text" 
            onChange={(e) => {
                setChoices({...choices, [0]:e.target.value});
                console.log(choices);
            }}
        ></input><br/>
        <input 
            type="text" 
            onChange={(e) => {
                setChoices({...choices, [1]:e.target.value});
                console.log(choices);
                // console.log(Object.values(questionArray));
            }}
        ></input><br/>
        {moreChoices}
        <Button text={"Add More Answers"} onClick={addChoices}/>
        </>
    )
}
export default AddChoices;