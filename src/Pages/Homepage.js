import React from "react";
import {Navbar} from "../components/Navbar";
import {Header} from "../components/Header";
import {VideoSection} from "../components/VideoSection";
import {DownloadSection} from "../components/DownloadSection";
import {TeamSection} from "../components/TeamSection";

export function Homepage () {

        return (
            <div className="Homepage" >
                <Navbar />
                <Header />
                <VideoSection />
                <DownloadSection />
                <TeamSection/>
            </div>
        );
}