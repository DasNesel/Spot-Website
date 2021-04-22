import React, { useState } from "react";
import pointerBlack from '../img/placeholder_black.svg';
import pointerWhite from  '../img/placeholder.svg'
import { Link, animateScroll as scroll } from "react-scroll";
import "./css/navBar.css";
import {useHistory} from "react-router-dom";

export function Navbar () {

    const history = useHistory();
    const handleClick = () => history.push('/LoginClement');

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const[visible, setVisible] = useState(false);

    const changebackground = () => {
        if(window.scrollY >= 280){
            setVisible(true);
        }else{
            setVisible(false);
        }
    };

    window.addEventListener('scroll', changebackground);

        return (
            <nav className="nav" id="navbar">
                <div className={visible ? "visible" : " "}>
                    <div className="nav-content">
                        <img
                            src={pointerBlack}
                            className="nav-logo logo-black"
                            alt="Logo."
                            onClick={scrollToTop}
                        />
                        <img
                            src={pointerWhite}
                            className="nav-logo logo-white"
                            alt="Logo."
                            onClick={scrollToTop}

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
                            <li className="nav-item">
                                <button className="LoginButton" onClick={handleClick}>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
}