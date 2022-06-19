function Answer({question,type}){
    switch (type) {
        case 'checkbox':
            return (<input type={type}></input>)
            
        default:
            return (
                <input type={type}></input>
            )
    }
}
export default Answer;