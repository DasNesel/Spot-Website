import React, { Component } from "react";
import pointerBlack from '../img/placeholder_black.svg';
import pointerWhite from  '../img/placeholder.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import "./css/navBar.css";

export default class Navbar extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    componentDidMount() {
        window.addEventListener('scroll', this.changebackground)
    }

    componentWillUnmount() {
        window.addEventListener('scroll', this.changebackground)
    }

    changebackground = () => {
        if(window.scrollY >= 280){
            this.setState({
                visible:true
            });
        }else{
            this.setState({
                visible:false
            });
        }
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className={this.state.visible ? "visible" : " "}>
                    <div className="nav-content">
                        <img
                            src={pointerBlack}
                            className="nav-logo logo-black"
                            alt="Logo."
                            onClick={this.scrollToTop}
                        />
                        <img
                            src={pointerWhite}
                            className="nav-logo logo-white"
                            alt="Logo."
                            onClick={this.scrollToTop}

                        />
                        <ul className="nav-items">
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="videoSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-55}
                                    duration={500}
                                >
                                    Vidéo
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="downloadSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-55}
                                    duration={500}
                                >
                                    Télécharger
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    activeClass="active"
                                    to="TeamSection"
                                    spy={true}
                                    smooth={true}
                                    offset={-55}
                                    duration={500}
                                >
                                    L'Équipe
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}