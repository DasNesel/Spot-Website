import React, {useState} from "react";
import "./css/LoginForm.css";

export function LoginForm(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const connect = () => {
        fetch("",{
            method:"POST",
            headers: {'Content-Type':'application/json'},
            body:{
                "username": username,
                "password": password
            }
        }).then(
            (reponse) => reponse.json()).then(
            (data) => {
                if(data.success === 1){
                    localStorage.setItem('tokenAuth', data.token);
                }else{
                    setError(data.error);
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