import { useState, useEffect } from "react";
import AddChoices from "./AddChoices";

function CreateQuestion({questionArray,setQuestionArray, choices, setChoices}){
    const [newChoices, setNewChoices] = useState([]);

    return (
        <div className="question-container">
            <h2>New Question:</h2>
            <label>Enter your question: </label>
            <input 
                type="text"
                onChange={(e) => {
                    setQuestionArray({...questionArray, [0]:e.target.value});
                    console.log(questionArray);
                    // console.log(Object.values(questionArray));
                }}
            ></input><br />

            <label>Question type: </label>
            <select
                onChange={(e) => {
                    //if any type other than text is selected ,create an Addchoices component
                    if(e.target.value !== "text"){
                        setNewChoices(<AddChoices
                            choices={choices}
                            setChoices={setChoices}
                        />);
                    }

                    setQuestionArray({...questionArray, [1]:e.target.value});
                    console.log(questionArray);
                }}
            >
                <option value="text">Text</option>
                <option value="radio">MCQ</option>
                <option value="checkbox">MCQ checkbox</option>
                <option value="dropdown">Dropdown List</option>
                <option value="range">Range</option>
            </select><br />
            {newChoices}
            
        </div>
    );

}
export default CreateQuestion;