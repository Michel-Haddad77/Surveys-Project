import { useState } from "react";

function Answer({question,choices}){
    //console.log(question);

    //return an input based on the type
    switch (question.type) {
        case 'checkbox':
            return (
                Object.values(choices).map(choice => {
                    return (
                        <>
                            <input type={question.type} value={choice}/>
                            <label for={choice}>{choice}</label> <br/>
                        </>
                    );
                })
            );

        case 'radio':
            return (
                Object.values(choices).map(choice => {
                    return (
                        <>
                            <input type={question.type} name={question.id}  value={choice}/>
                            <label for={choice}>{choice}</label> <br/>
                        </>
                    );
                })
            );    
            
        case 'dropdown':
            const options = Object.values(choices).map(choice => {
               return( <option value={choice}>{choice}</option> );
            })
            return (
                <select id={question.id}>
                    {options}
                </select>
            );
            
        case 'range':
            let ranges = Object.values(choices);
            return(
                <input type="range" id={question.id} min={ranges[0]} max={ranges[1]}></input>
            )
            
        default:
            return (
                <input type={question.type}></input>
            )
    }
}
export default Answer;