import React from "react";
import './acercade.css';
import Personal from "./personal/personal";
import Tecnologias from "./Tecnologias/tecnologias";

const acercade = () => {
    return (
        <div className="informacionPrincipal">
            <h2>Información personal</h2>
            <Personal/>
            <Tecnologias/>
        </div>
    )
}

export default acercade;