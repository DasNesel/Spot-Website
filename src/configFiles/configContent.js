import videoSkate from "../video/video-skate.mp4";
import videoCity from "../video/video-city.mp4";
import videoLake from "../video/video-lake.mp4";
import videoCity2 from "../video/video-ville.mp4";
import videoSea from  "../video/video-sea.mp4";

//Mettre le lien url de la vidéo de présentation de l'application
const videoLink = {
    urlVideoHeader: videoLake,
    urlVideoPresentation:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"};

//mettre dans le return une phrase inspirante présente sur le header contenu dans une balise p. Il est possible de
//mettre des balises de personnalisation
export function inspiranteSentence(){
    return "Partage tes meilleurs SPOTs";
}

export function randomUrlVideoHeader(){
    let randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber){
        case 0:
            return videoLake;
        case 1:
            return videoCity;
        case 2:
            return videoSkate;
        case 3:
            return videoCity2;
        case 4:
            return videoSea;
        default:
            return videoLink.urlVideoHeader;
    }
}

export default videoLink;