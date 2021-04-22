import React, {useState, useEffect} from "react";
import {NavbarCompte} from "../components/NavbarCompte";

export function ProfilPageClement () {
    const[error, setError] = useState("");

    let isMounted = true;

    const setInfo = () => {
        let phoneNumberVar = document.getElementById("Phonenumber").value;
        let mailVar = document.getElementById("Mail").value;
        let passwordVar = document.getElementById("Password").value;
        let passwordConfirmVar = document.getElementById("Passwordconf").value;

        const myInit ={
            method:"PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("tokenAuth")
            },
            body:JSON.stringify({
                "phoneNumber": phoneNumberVar,
                "email": mailVar,
                "password": passwordVar
            })
        };

        if(passwordVar === passwordConfirmVar) {
            fetch("http://localhost:8080/users/" + localStorage.getItem("idPerso"), myInit).then(
                (reponse) => reponse.json()).then(
                (data) => {
                    console.log(data)
                    if (data.success) {
                        console.log("Setdata === success\n" + data)
                    } else {
                        setError(data.message);
                    }
                }
            )
        }else{
            setError("mot de passe différents");
            console.log("mdp non compatible")
            document.getElementById("Password").value = "";
            document.getElementById("Passwordconf").value = "";
        }
    };

    const getInfo = () => {
        const myInit ={
            method:"GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("tokenAuth")
            }
        };

        fetch("http://localhost:8080/auth/me",myInit).then(
            (reponse) => reponse.json()).then(
            (data) => {
                console.log(data)
                if(data.success){
                    document.getElementById("Username").innerText = data.user.username;
                    if (data.user.phoneNumber){
                        document.getElementById("Phonenumber").placeholder = data.user.phoneNumber;
                    }
                    if (data.user.email){
                        document.getElementById("Mail").placeholder = data.user.email;
                    }
                }else{
                    setError(data.message);
                }
            }
        )
    };

    //A revoir pas très propre
    useEffect( () => {
        if (isMounted){
            getInfo()
            isMounted = false;
        }
    }, isMounted)


        return (
            <div>
                <NavbarCompte/>
                <div className="main">
                    <form className="profileform">
                        <div className="profilefield">
                            <div className="profilediv">
                                <div className="profileimage"></div>
                            </div>
                        </div>

                        <div className="profilefield">
                            <div className="profilediv">
                                <div className="profiletextdiv">
                                    <label className="profiletext">Username</label>
                                </div>
                                <div className="profileinputdiv">
                                    <label className="profileinput" id="Username">Clem</label>
                                </div>
                            </div>
                        </div>

                        <div className="profilefield">
                            <div className="profilediv">
                                <div className="profiletextdiv">
                                    <label className="profiletext">Password</label>
                                </div>
                                <div className="profileinputdiv">
                                    <input className="profileinput" type="password" placeholder="Actual password"/>
                                </div>
                                <div className="profileinputdiv">
                                    <input className="profileinput" id="Password" type="password" placeholder="New password"/>
                                </div>
                                <div className="profileinputdiv">
                                    <input className="profileinput" id="Passwordconf" type="password" placeholder="Confirm new password"/>
                                </div>
                            </div>
                        </div>

                        <div className="profilefield">
                            <div className="profilediv">
                                <div className="profiletextdiv">
                                    <label className="profiletext">Phone number</label>
                                </div>
                                <div className="profileinputdiv">
                                    <input className="profileinput" id="Phonenumber" placeholder="06 75 85 62 40"/>
                                </div>
                            </div>
                        </div>

                        <div className="profilefield">
                            <div className="profilediv">
                                <div className="profiletextdiv">
                                    <label className="profiletext">Mail</label>
                                </div>
                                <div className="profileinputdiv">
                                    <input className="profileinput" id="Mail" placeholder="06 75 85 62 40"/>
                                </div>
                            </div>
                        </div>

                        <div className="profilesavebuttonfield">
                            <button className="profilesavebutton" onClick={setInfo}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );

}