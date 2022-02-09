import { Container, Grid } from "@material-ui/core";
import React from "react";
import './header.css';

const header = () => {
    const x1 = "<";
    const x2 = "MO";
    const x3 = "/>";
    return (
        <Grid>
            <header className="HeaderPrincipal">
                <Container>
                    <div className="HeaderFlex">
                        <div className="HeaderNombre">
                            <h1 className="HeaderNombre1">{x1}</h1>
                            <h1 className="HeaderNombre2">{x2}</h1>
                            <h1 className="HeaderNombre3">{x3}</h1>
                        </div>
                        <div className="HeaderMenu">
                            <h3>Incio</h3>
                            <h3>Perfil</h3>
                            <h3>Portafolio</h3>
                        </div>
                    </div>
                </Container>
            </header>
        </Grid>
    )
}

export default header;
