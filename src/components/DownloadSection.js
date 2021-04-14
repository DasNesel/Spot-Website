import React, {Component} from "react";
import appStore from "../img/appStore.svg";
import googlePlay from "../img/google-play-badge.svg";
import illustration from "../img/svg-tracking.svg";
import "./css/downloadSection.css";

export default class DownloadSection extends Component {

    render() {
        return (
                <section id="downloadSection">
                    <div className="download">
                        <div className="container-illustration">
                            <img src={illustration} alt=""/>
                        </div>
                        <div className="container-store">
                            <h2 className="title">
                                Essayer <br/>SPOT !
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
                    </div>
                </section>
        );
    }
}