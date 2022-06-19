import Button from "./Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function SignupForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signUp(){
        let data = new FormData();
  
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        data.append('password_confirmation', confirmPassword);
    
        //linking with sign up api
        axios({
        method: 'post',
        url: 'http://localhost:8000/api/register',
        data: data,
        })
        .then(function (response) {
            console.log(response.data);
            alert(response.data.user.name + " has successfully registered! \nPlease login to proceed");
            //navigate to login page
            navigate("/");
        })
        .catch(function (error){
            //In case of Unauthorization or invalidation
            //saving the data object in a variable
            let data = error.response.data;
            let msg = '';
            
            //loop over the entire data object to collect all messages
            Object.keys(data).forEach(key =>{
                msg = msg + data[key] + '\n';
            })
            alert(msg);
        })
    }

    return(
        <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}    
            ></input><br/>
            <input 
                type="text" 
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            ></input><br/>
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input><br/>
            <input 
                type="password" 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                    setConfirmPassword(e.target.value);
                }}
                ></input>
            <Button text="Sign Up" onClick={signUp}/>
            <h4 className="welcome-h4">Already have an account? <Link to="/">Login</Link></h4>
        </div>
    );
};

export default SignupForm;