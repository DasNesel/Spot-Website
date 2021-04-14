import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import VideoSection from "../components/VideoSection";
import DownloadSection from "../components/DownloadSection";
import TeamSection from "../components/TeamSection";

export default class Homepage extends Component {

    render() {
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
}