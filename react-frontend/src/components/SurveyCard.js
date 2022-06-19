function SurveyCard({title, id, style}){
    return(
        <div id={id} className={"survey-card " + style}>
            <h3>{title}</h3>
        </div>
    )
}

export default SurveyCard;