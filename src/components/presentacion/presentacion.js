import React from "react";
import mainLogo from "../../images/Foto.jpg"
import './presentacion.css';

const presentacion = () => {
    return (
        <div className="Fondo">
            <img src={mainLogo} alt="Logo" className="Logo"></img>
            <div className="Nombre">
                <h1 style={{color: "white", margin: "5px"}}>Hola</h1>
                <h1 style={{color: "#4369D9", margin: "5px"}}>Soy Mateo Ordoñez</h1>
                <h2 style={{color: "white", margin: "10px"}}>Ingeniero Multimedia</h2>
            </div>
        </div>
    )
}

export default presentacion;