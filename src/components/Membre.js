import React from "react";
import logoLinkedIn from "../img/logo_linkedin.svg";
import logoGitHub from "../img/logo_git.svg";
import defaultPicture from "../img/membre/unknow.jpg";
import "./css/membre.css";

export function Membre (props) {

    const displayLinkedIn = () => {
        if(props.urlLinkedIn !== ""){
            return <a href={props.urlLinkedIn} className="logo-linkedin">
                <img src={logoLinkedIn} alt="" height="30px"/>
            </a>
        }
    };

    const displayGitHub = () => {
        if(props.urlGitHub !== ""){
            return <a href={props.urlGitHub} className="logo-git">
                <img src={logoGitHub} alt="" height="30px"/>
            </a>
        }
    };

        return (

        <div className="member-card">
            <img src={props.Picture} alt="member" className="member-picture"/>
            <h3 className="name-member">
                {props.Name}
            </h3>
            <h4 className="memberFonction">
                {props.Poste}
            </h4>
            {displayLinkedIn()}
            {displayGitHub()}
        </div>

        );
}

Membre.defaultProps = {
    Name: "Inconnu",
    Poste: "Inconnu",
    urlGitHub: "",
    urlLinkedIn: "",
    Picture: defaultPicture
};