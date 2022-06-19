import Answer from "./Answer";

function Question({question}){
    console.log(question);

    return(
        <>
        <p>{question.content}</p>
        <Answer question = {question} type= {question.type}/>
        </>
    )
}

export default Question;