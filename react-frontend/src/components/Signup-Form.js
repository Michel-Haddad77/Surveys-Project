import Button from "./Button";
import { Link } from "react-router-dom";

function SignupForm(){
    return(
        <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input type="text" placeholder="Name"></input><br/>
            <input type="text" placeholder="Email address"></input><br/>
            <input type="password" placeholder="Password"></input><br/>
            <input type="password" placeholder="Confirm Password"></input>
            <Button text="Sign Up"/>
            <h4 className="welcome-h4">Already have an account? <Link to="/">Login</Link></h4>
        </div>
    );
};

export default SignupForm;