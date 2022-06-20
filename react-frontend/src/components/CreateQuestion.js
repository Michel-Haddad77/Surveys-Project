import { useState, useEffect } from "react";
import AddChoices from "./AddChoices";

function CreateQuestion(){
    const [newChoices, setNewChoices] = useState([]);

    return (
        <div>
            <label>Question Content: </label>
            <input type="text"></input><br />

            <label>Question type: </label>
            <select 
                onChange={(e) => {
                    if(e.target.value !== "text"){
                        setNewChoices(<AddChoices/>);
                    }
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