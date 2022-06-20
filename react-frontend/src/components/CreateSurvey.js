import { useState, useEffect } from "react";
import CreateQuestion from "./CreateQuestion";
import Button from "./Button";

function CreateSurvey(){
    const [newQuestions, setNewQuestions] = useState([]);

    function addQuestion(){
        setNewQuestions([...newQuestions,[<CreateQuestion/>]]);
    }

    return (
        <>
            <CreateQuestion />
            {newQuestions}
            <Button text={"Add Question"} onClick={addQuestion} />
        </>
    );

}
export default CreateSurvey;