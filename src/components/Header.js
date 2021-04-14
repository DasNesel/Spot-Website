import React, {Component} from "react";
import pointer from "../img/placeholder.svg";
import {Link} from "react-scroll";
import {inspiranteSentence, randomUrlVideoHeader} from "../configFiles/configContent";
import "./css/header.css";

export default class Header extends Component {

    render() {
        return (
                <header className="App-header">
                    <div className="fond-video-header">
                        <video src={randomUrlVideoHeader()} autoPlay="autoPlay" muted loop="infinite"></video>
                            <img src={pointer} className="App-logo" alt="logo" />
                            <p>
                                {inspiranteSentence()}
                            </p>
                            <Link
                                activeClass="active"
                                to="download"
                                spy={true}
                                smooth={true}
                                offset={-55}
                                duration={500}
                            >
                                <button id="downloadApp" >
                                    Télécharger l'application !
                                </button>
                            </Link>
                    </div>
                </header>
        );
    }
}