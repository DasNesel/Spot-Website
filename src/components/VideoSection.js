import React, {Component} from "react";
import { Player, BigPlayButton  } from 'video-react';
import videoLink from "../configFiles/configContent";
import style from "./css/videoSection.css";

export default class VideoSection extends Component {

    render() {
        return (
            <section id="videoSection">
                <div className="video">
                    <div className="countainer-description">
                        <h2>Partage tes meilleures SPOT à tes amis ou au monde</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aspernatur dolorem id illo iure magni nihil quos, rerum sequi. Autem commodi delectus eligendi impedit neque nihil, optio quod sunt.</p>
                    </div>
                    <div className="videoPlayer">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src={videoLink.urlVideoPresentation}>
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                </div>
            </section>
        );
    }
}