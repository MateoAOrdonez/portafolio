import React from "react";
import './acercade.css';
import Personal from "./personal/personal";

const acercade = () => {
    return (
        <div className="informacionPrincipal">
            <h2>Información persona</h2>
            <Personal/>
        </div>
    )
}

export default acercade;