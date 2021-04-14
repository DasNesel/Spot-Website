import LoucasR from "../img/membre/LoucasR.jpg";
import JohanR from "../img/membre/JohanR.jpg";
import ClementA from "../img/membre/ClementA.jpg";
import HadrienB from "../img/membre/HadrienB.jpg";

//Mettre les membres sous la forme : {Name: String, Fonction: String, Profil: Image, urlLinkedIn: String, urlGitHub: String}
//Si element inconnu ou vide merci de ne pas mettre le champs manquant
const membres = [
    {Name: "Matthieu", Fonction: "Developpeur Front-end et Scrum master", urlLinkedin: "https://fr.linkedin.com/in/matthieu-licette", urlGitHub: ""},
    {Name: "Loucas", Fonction: "Developpeur ReactJs", Profil: LoucasR, urlLinkedin: "https://fr.linkedin.com/in/loucas-rodrigues-38aa8a1a3", urlGitHub: ""},
    {Name: "Lucas", Fonction: "Developpeur NodeJs", urlLinkedin: "https://fr.linkedin.com/in/lucas-landru", urlGitHub: ""},
    {Name: "Johan", Fonction: "Developpeur NodeJs", Profil: JohanR, urlLinkedin: "https://fr.linkedin.com/in/johan-roux-69a950195", urlGitHub: "https://github.com/Johan971"},
    {Name: "Clément", Fonction: "Developpeur Front-end", Profil: ClementA, urlLinkedin: "https://fr.linkedin.com/in/cl%C3%A9ment-arnaud-7326841a2", urlGitHub: ""},
    {Name: "Hadrien", Fonction: "Developpeur ReactJs", Profil: HadrienB, urlLinkedin: "https://fr.linkedin.com/in/hadrien-bernard-83bb95178", urlGitHub: ""}
];

export default membres;