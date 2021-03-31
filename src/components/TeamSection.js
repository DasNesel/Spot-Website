import React, {Component} from "react";
import {BigPlayButton, Player} from "video-react";
import membreTest from '../img/member-test.jpg';


export default class TeamSection extends Component {

    render() {
        return (
            <section id="TeamSection">
                <div className="team">
                    <h2 className="title-team">
                        Notre équipe
                    </h2>
                    <div className="team-carrousel">
                        <div className="member-card">
                            <img src={membreTest} alt="member" className="member-picture"/>
                            <h3 className="name">
                                Matthieu
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}