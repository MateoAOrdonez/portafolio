import React from "react";
import htmlImg from "../../../images/html.png"
import cssImg from "../../../images/css.png"
import jsImg from "../../../images/Js.png"
import gitImg from "../../../images/git.png"
import reactImg from "../../../images/React.svg"
import './personal.css';

const personal = () => {
    return (
        <div>
            <p>Conocimiento y habilidades en temas relacionados a la edición y animación de videos, el <br />
            modelado 3D, la realidad aumentada, la realidad virtual y el desarrollo de videojuegos.</p>

            <h2>Habilidades</h2>
            <div className="skills">
                <img src={htmlImg} alt="html" className="Logo"></img>
                <img src={cssImg} alt="css" className="Logo"></img>
                <img src={jsImg} alt="js" className="Logo"></img>
                <img src={gitImg} alt="git" className="Logo"></img>
                <img src={reactImg} alt="react" className="Logo"></img>
            </div>
            
        </div>
    )
}

export default personal;