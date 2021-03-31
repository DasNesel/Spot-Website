import React, { Component } from "react";
import pointer from '../img/placeholder_black.svg';
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content">
                    <img
                        src={pointer}
                        className="nav-logo"
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
            </nav>
        );
    }
}