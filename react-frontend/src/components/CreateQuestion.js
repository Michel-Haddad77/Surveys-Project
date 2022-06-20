
function CreateQuestion(){
    return (
        <>
            <label>Question Content: </label>
            <input type="text"></input><br />

            <label>Question type: </label>
            <select name="cars" id="cars">
                <option value="text">Text</option>
                <option value="radio">MCQ</option>
                <option value="checkbox">MCQ checkbox</option>
                <option value="dropdown">Dropdown List</option>
                <option value="range">Range</option>
            </select><br />
            
        </>
    );

}
export default CreateQuestion;