import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function login(e){
        e.preventDefault();
        let data = new FormData();
        
        data.append('email', email);
        data.append('password', password);
        
        //linking with login api
        axios({
            method: 'post',
            url: 'http://localhost:8000/api/login',
            data: data,
        })
        .then(function (response) {
            console.log(response.data);
            //storing the token in local storage
            let token = response.data.access_token;
            localStorage.setItem("token", token);

            //saving logged in user id in local storage
            let id = response.data.id;
            localStorage.setItem("id", id);

            navigate("/all_surveys");
        })
        .catch(function (error){
            //In case of Unauthorization or invalidation
            //saving the data object in a variable
            let data = error.response.data;
            let msg = '';
            
            //loop over the entire data object to aollect all messages
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
                placeholder="Email address"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                required
            ></input><br/>
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            ></input>
            <Button text="Login" onClick={login}/>
            <h4 className="welcome-h4">New account? <Link to="/signup">Sign Up</Link></h4>
        </div>
    );
};

export default LoginForm;