import React from "react";
import './acercade.css';
import Personal from "./personal/personal";
import Portafolio from "./portafolio/portafolio";

const acercade = () => {
    return (
        <div className="informacionPrincipal">
            <h2>Información personal</h2>
            <Personal />
            <h2>Portafolio</h2>
            <div className="PortafolioAcerca">
                <Portafolio />
                <Portafolio />
                <Portafolio />
                <Portafolio />
                <Portafolio />
            </div>

        </div>
    )
}

export default acercade;