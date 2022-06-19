function SurveyCard({title, id, style, onClick}){

    return(
        <div id={id} className={"survey-card " + style} onClick={onClick}>
            <h3>{title}</h3>
        </div>
    )
}

export default SurveyCard;