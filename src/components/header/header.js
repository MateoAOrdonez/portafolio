import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import './header.css';

const Header = () => {
    const x1 = "<";
    const x2 = "MO";
    const x3 = "/>";

    const [navbar, setNavbar] = useState(false);

    const changeBackgroundNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackgroundNavbar);


    return (
        <Grid>
            <header className={navbar ? 'HeaderPrincipal active' : 'HeaderPrincipal'}>
                <Container>
                    <div className="headerAjusteContainer">
                        <div className="HeaderNombre">
                            <h1 className="HeaderNombre1 Espacio0">{x1}</h1>
                            <h1 className="HeaderNombre2 Espacio0">{x2}</h1>
                            <h1 className="HeaderNombre3 Espacio0">{x3}</h1>
                        </div>
                        <div className="HeaderMenu">
                            <h3 className="Espacio0">Incio</h3>
                            <h3 className="Espacio0">Perfil</h3>
                            <h3 className="Espacio0">Portafolio</h3>
                        </div>
                    </div>

                </Container>
            </header>
        </Grid>
    )
}

export default Header;
