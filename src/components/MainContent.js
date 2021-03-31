import React, { Component } from "react";
import appStore from '../img/appStore.svg';
import googlePlay from '../img/google-play-badge.svg';
import pointer from '../img/placeholder.svg';
import '../App.css';
import { Link } from "react-scroll";

export default class MainContent extends Component {

    render() {
        return (
            <div>
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
        <section id="download">
            <div className="download">
                <h2 className="title">
                    Télécharger notre application !
                </h2>
                <div className="store">
                    <a href="#">
                        <img className="appStoreIcon" src={appStore} alt=""/>
                    </a>
                    <a href="#">
                        <img className="googlePlayIcon" src={googlePlay} alt=""/>
                    </a>
                </div>
            </div>
        </section>
        </div>
        );
    }
}