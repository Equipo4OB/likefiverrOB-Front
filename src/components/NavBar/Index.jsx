import { ReactComponent as OBLogo } from "../../assets/icons/ob-icon.svg";
import React from "react";
import Burger from "./Burger";
import { Nav, NavLink } from "./NavBarElements";

export default function NavBar() {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <OBLogo />
        </NavLink>
        <Burger />
      </Nav>
    </>
  );
}
