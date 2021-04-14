import React, {Component} from "react";
import logoLinkedIn from "../img/logo_linkedin.svg";
import logoGitHub from "../img/logo_git.svg";
import defaultPicture from "../img/membre/unknow.jpg";
import "./css/membre.css";

export default class Membre extends Component {

    displayLinkedIn(){
        if(this.props.urlLinkedIn !== ""){
            return <a href={this.props.urlLinkedIn} className="logo-linkedin">
                <img src={logoLinkedIn} alt="" height="30px"/>
            </a>
        }
    }

    displayGitHub(){
        if(this.props.urlGitHub !== ""){
            return <a href={this.props.urlGitHub} className="logo-git">
                <img src={logoGitHub} alt="" height="30px"/>
            </a>
        }
    }

    render() {
        return (

        <div className="member-card">
            <img src={this.props.Picture} alt="member" className="member-picture"/>
            <h3 className="name-member">
                {this.props.Name}
            </h3>
            <h4 className="memberFonction">
                {this.props.Poste}
            </h4>
            {this.displayLinkedIn()}
            {this.displayGitHub()}
        </div>

        );
    }
}
Membre.defaultProps = {
    Name: "Inconnu",
    Poste: "Inconnu",
    urlGitHub: "",
    urlLinkedIn: "",
    Picture: defaultPicture
};