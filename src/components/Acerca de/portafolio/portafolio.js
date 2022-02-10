import React from "react";
import './portafolio.css';
import porta from '../../../images/portafolio.jpg'
import { Button } from "@material-ui/core";


const Portafolio = () => {
    return (
        <div>
            <img src={porta} alt="portafolo" className="PortafolioImg"></img>
                <div className="PortafolioBotones">
                    <Button>Repositorio</Button>
                    <Button>Ver pagina</Button>
                </div>
        </div>
    )
}

export default Portafolio;