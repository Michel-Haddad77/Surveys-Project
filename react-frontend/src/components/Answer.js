import { useState } from "react";

function Answer({question,choices,answers,setAnswers}){
    //console.log(question);

    //return an input based on the type
    switch (question.type) {
        case 'checkbox':
            return (
                Object.values(choices).map(choice => {
                    return (
                        <>
                            <input 
                                type={question.type} 
                                value={choice}
                                onChange={(e) => {
                                    setAnswers({...answers, [question.id]:e.target.value});
                                    console.log(answers);
                                }}    
                                />
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
                            <input 
                                type={question.type} 
                                name={question.id}  
                                value={choice}
                                onChange={(e) => {
                                    setAnswers({...answers, [question.id]:e.target.value});
                                    console.log(answers);
                                }} 
                            />
                            <label for={choice}>{choice}</label> <br/>
                        </>
                    );
                })
            );    
            
        case 'dropdown':
            const options = Object.values(choices).map(choice => {
               return( <option  value={choice}> {choice} </option> );
            })
            return (
                <select 
                    onChange={(e) => {
                        setAnswers({...answers, [question.id]:e.target.value});
                        console.log(answers);
                    }}>
                    {options}
                </select>
            );
            
        case 'range':
            let ranges = Object.values(choices);
            return(
                <input 
                    key={question.id} 
                    type="range"
                    min={ranges[0]}
                    max={ranges[1]}
                    onChange={(e) => {
                        setAnswers({...answers, [question.id]:e.target.value});
                        console.log(answers);
                    }}
                ></input>
            )
            
        default:
            return (
                <input 
                    key={question.id} 
                    type={question.type}
                    onChange={(e) => {
                        setAnswers({...answers, [question.id]:e.target.value});
                        console.log(answers);
                    }}
                ></input>
            )
    }
}
export default Answer;