import React, {Component} from "react";
import pointer from "../img/placeholder.svg";
import { Player, BigPlayButton  } from 'video-react';

export default class VideoSection extends Component {

    render() {
        return (
            <section id="videoSection">
                <div className="video">
                    <div className="videoPlayer">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                            <BigPlayButton position="center" />
                        </Player>
                    </div>
                </div>
            </section>
        );
    }
}