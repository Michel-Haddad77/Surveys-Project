import Button from "./Button";

function AddChoices(){
    return (
        <>
        <label>Possible Answers: </label><br/>
        <input type="text"></input><br/>
        <input type="text"></input><br/>
        <Button text={"Add More Answers"}/>
        </>
    )
}
export default AddChoices;