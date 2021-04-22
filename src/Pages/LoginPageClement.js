import React,{useState} from "react";
import "../components/css/LoginPageClement.css";
import {useHistory} from 'react-router-dom';

export function LoginPageClement (){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");

    const history = useHistory();
    const handleClick = () => history.push('/profilClement');

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
                    localStorage.setItem('idPerso', data.userId);
                    setError("Correct");
                    console.log(localStorage.getItem('tokenAuth') + "USERID : " + localStorage.getItem('idPerso'))
                    handleClick()
                }else{
                    setError(data.message);
                }
            }
        )
    };

        return (
            <div className="main">
                <div className="loginfield">
                    <div className="loginconnectionfield">
                        <div className="logintextfield">
                            <label className="logintextinput">Pseudo</label>
                        </div>
                        <div className="logininputfield">
                            <input className="logininput" type="text" name="Pseudo"
                                   onChange={(e) => {
                                       setUsername(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="loginconnectionfield">
                        <div className="logintextfield">
                            <label className="logintextinput">Password</label>
                        </div>
                        <div className="logininputfield">
                            <input className="logininput" type="password" name="Password"
                                   onChange={(e) =>{
                                       setPassword(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="loginbuttonfield">
                        <button className="loginbutton" onClick={connect}>Log in</button>
                    </div>
                    {
                        console.log("User : " +username + " " + "Password : " + password)
                    }
                </div>
            </div>
        );
}