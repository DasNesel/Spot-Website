import React from "react";
import "./css/Footer.css";

export function Footer () {

        return (
            <section className="footer">
                <div className="menu-footer">
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>
                <hr className="divider"/>
                    <div className="cr-network">
                        <p className="copyright">© 2020 SPOTS. Tous droits réservés</p>
                    </div>
            </section>
        );
};