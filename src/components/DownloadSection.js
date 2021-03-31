import React, {Component} from "react";
import appStore from "../img/appStore.svg";
import googlePlay from "../img/google-play-badge.svg";

export default class DownloadSection extends Component {

    render() {
        return (
                <section id="downloadSection">
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
        );
    }
}