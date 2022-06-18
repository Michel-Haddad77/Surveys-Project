import Button from "./Button";
import { Link } from "react-router-dom";

function Form({login}){
    return(
        <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input type="text" placeholder="Email address"></input><br/>
            <input type="password" placeholder="Password"></input>
            <Button text="Login" onClick={login}/>
            <h4 className="welcome-h4">New account? <Link to="/signup">Sign Up</Link></h4>
        </div>
    );
};

export default Form;