import Button from "./Button";

function Form({login}){
    return(
        <div className="login-container">
            <h3 className="login-h3">Login</h3>
            <input type="text" placeholder="Email address" id="login-email"></input><br/>
            <input type="password" placeholder="Password" id="login-password"></input>
            <Button text="Login" onClick={login}/>
            <h4 className="welcome-h4">New account? <a id="sign-up" href="#">Sign up</a></h4>
        </div>
    );
};

export default Form;