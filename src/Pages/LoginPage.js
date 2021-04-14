import React from "react";
import {randomUrlVideoHeader} from "../configFiles/configContent";
import "../components/css/LoginPage.css";
import {LoginForm} from "../components/LoginForm";






export default function LoginPage (){


        return (
            <div className="LoginPage" >
                <div className="fond-video-header">
                    <video src={randomUrlVideoHeader()} autoPlay="autoPlay" muted loop="infinite"/>
                    <div className="glass-card-container">
                        <div className="loginface">
                            <LoginForm/>
                        </div>
                        <div className="registerface">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
