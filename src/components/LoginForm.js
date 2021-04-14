import React, {useState} from "react";
import "./css/LoginForm.css";

export function LoginForm(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const connect = () => {
        const myInit ={
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "username": username,
                "password": password
            })
        };

        fetch("http://localhost:8080/auth/login",myInit).then(
            (reponse) => reponse.json()).then(
            (data) => {
                console.log(data)
                if(data.success === 1){
                    localStorage.setItem('tokenAuth', data.token);
                    setError("Correct");
                    console.log(localStorage.getItem('tokenAuth'))
                }else{
                    setError(data.message);
                }
            }
        )
    };

    const printError  = () => {
        if(error){
            return (
                <div className="error-box">
                    <h2>{error}</h2>
                </div>
            );
        }
    };

    return (
        <div className="loginForm">
            <h2>Connexion</h2>
                <input type="text"
                       required
                       placeholder="Pseudo"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}/>
                <input type="password"
                       required
                       placeholder="Password"
                onChange={(e) =>{
                    setPassword(e.target.value);
                }}/><br/>
            <button onClick={connect}>Connexion</button>
            {printError()}

            {
                console.log("User : " +username + " " + "Password : " + password)
            }
        </div>
    );
}