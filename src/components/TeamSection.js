import React, {Component} from "react";
import Membre from "./Membre";
import membres from "../configFiles/configMembres";


export default class TeamSection extends Component {

    render() {
        const elements = membres.map(membre => (<Membre
            Name={membre.Name}
            Poste={membre.Fonction}
            Picture={membre.Profil}
            urlLinkedIn={membre.urlLinkedin}
            urlGitHub={membre.urlGitHub}
        /> ));

        return (
            <section id="TeamSection">
                <div className="team">
                    <h2 className="title-team">
                        Notre équipe
                    </h2>
                    <div className="team-carrousel">
                        {elements}
                    </div>
                </div>
            </section>
        );
    }
}