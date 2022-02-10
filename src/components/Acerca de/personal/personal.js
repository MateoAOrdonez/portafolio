import React from "react";
import htmlImg from "../../../images/html.png"
import cssImg from "../../../images/css.png"
import jsImg from "../../../images/Js.png"
import gitImg from "../../../images/git.png"
import reactImg from "../../../images/React.svg"
import './personal.css';
import { Button } from "@material-ui/core";


const personal = () => {
    return (
        <div>
            <div>
            <p>Conocimiento y habilidades en temas relacionados a la edición y animación de videos, el <br />
            modelado 3D, la realidad aumentada, la realidad virtual y el desarrollo de videojuegos.</p>
            <Button >Descargar CV</Button>
            </div>
            

            <h2>Habilidades</h2>
            <div className="skills">
                <img src={htmlImg} alt="html" className="skillsPersonal"></img>
                <img src={cssImg} alt="css" className="skillsPersonal"></img>
                <img src={jsImg} alt="js" className="skillsPersonal"></img>
                <img src={gitImg} alt="git" className="skillsPersonal"></img>
                <img src={reactImg} alt="react" className="skillsPersonal"></img>
            </div>
            
        </div>
    )
}

export default personal;