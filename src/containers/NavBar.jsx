import {ContainerNav, NavLink, NavGroup, Button} from "../components/NavBar";
import {ReactComponent as OBLogo} from "../assets/icons/ob-icon.svg"
import React from 'react'

export default function NavBar() {
    return (
        <ContainerNav>
            <OBLogo/>
            <NavGroup>
            <NavLink>Explora</NavLink>
            <NavLink>Conviertete en vendedor</NavLink>
            <Button>Inicia sesión</Button>
            <Button>Únete</Button></NavGroup>

        </ContainerNav>
    )
}
