import React, {Component} from "react";
import pointer from "../img/placeholder.svg";
import {Link} from "react-scroll";

export default class Header extends Component {

    render() {
        return (
                <header className="App-header">
                    <img src={pointer} className="App-logo" alt="logo" />
                    <p>
                        Mettre une phrase inspirante !
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
                </header>
        );
    }
}