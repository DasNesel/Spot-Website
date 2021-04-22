import React, {useState} from "react";
import "../components/css/LoginPageClement.css";
import {useHistory} from 'react-router-dom';

export function RegisterPageClement () {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[mail, setMail] = useState("");
    const[phoneNumber, setPhoneNumber] = useState("");
    const[error, setError] = useState("");
    const[confirmPassword, setconfimPassword] = useState("");

    const history = useHistory();
    const handleClick = () => history.push('/profilClement');

    const register = () => {
        const myInit ={
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                "username": username,
                "password": password,
                "email": mail,
                "phoneNumber": phoneNumber
            })
        };

        if(password === confirmPassword){
            fetch("http://localhost:8080/users",myInit).then(
                (reponse) => reponse.json()).then(
                (data) => {
                    console.log(data)
                    if(data.success){
                        localStorage.setItem('tokenAuth', data.token);
                        setError("Correct");
                        console.log(localStorage.getItem('tokenAuth'))
                        handleClick()
                    }else{
                        setError(data.message);
                    }
                }
            )
        }else{
            setError("mot de passe différents");
            console.log("mdp non compatible")
            document.getElementById("Password").value = "";
            document.getElementById("ConfirmPassword").value = "";
        }


    };

        return (
            <div className="main">
                <div className="registerfield">
                    <div className="registerconnectionfield">
                        <div className="registertextfield">
                            <label className="registertextinput">Email</label>
                            <label className="registertextstar">*</label>
                        </div>
                        <div className="registerinputfield">
                            <input className="registerinput" type="text" name="Pseudo"
                                   onChange={(e) =>{
                                       setMail(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="registerconnectionfield">
                        <div className="registertextfield">
                            <label className="registertextinput">Phone number</label>
                            <label className="registertextstar">*</label>
                        </div>
                        <div className="registerinputfield">
                            <input className="registerinput" type="text" name="Pseudo"
                                   onChange={(e) =>{
                                       setPhoneNumber(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="registerconnectionfield">
                        <div className="registertextfield">
                            <label className="registertextinput">Pseudo</label>
                            <label className="registertextstar">*</label>
                        </div>
                        <div className="registerinputfield">
                            <input className="registerinput" type="text" name="Pseudo"
                                   onChange={(e) =>{
                                       setUsername(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="registerconnectionfield">
                        <div className="registertextfield">
                            <label className="registertextinput">Password</label>
                            <label className="registertextstar">*</label>
                        </div>
                        <div className="registerinputfield">
                            <input className="registerinput" id="Password" type="password" name="Password"
                                   onChange={(e) =>{
                                       setPassword(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="registerconnectionfield">
                        <div className="registertextfield">
                            <label className="registertextinput">Confirm password</label>
                            <label className="registertextstar">*</label>
                        </div>
                        <div className="registerinputfield">
                            <input className="registerinput" id="ConfirmPassword"  type="password" name="Password"
                                   onChange={(e) =>{
                                       setconfimPassword(e.target.value);
                                   }}/>
                        </div>
                    </div>
                    <div className="registerbuttonfield">
                        <button className="registerbutton" onClick={register}>Register</button>
                    </div>

                    {
                        console.log("User : " +username + " Password : " + password + " Mail : " + mail + " phone : " + phoneNumber)
                    }

                </div>
            </div>
        );
}