import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {animateScroll as scroll, Link} from "react-scroll";
import pointerBlack from "../img/placeholder_black.svg";
import pointerWhite from "../img/placeholder.svg";

export function NavbarCompte () {

    const history = useHistory();
    const handleClick = () => history.push('/ProfilClement');
    const homeClick = () => history.push('/');

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
                        onClick={homeClick}
                    />
                    <img
                        src={pointerWhite}
                        className="nav-logo logo-white"
                        alt="Logo."
                        onClick={homeClick}

                    />
                    <ul className="nav-items">
                        <li className="nav-item">
                            <button className="LoginButton" onClick={handleClick}>
                                Paramètres
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}