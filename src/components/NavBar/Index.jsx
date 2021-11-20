import { ReactComponent as OBLogo } from "../../assets/icons/ob-icon.svg";
import React from "react";
import Burger from "./Burger";
import { Nav, NavLink } from "./NavBarElements";
import { BrowserRouter } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Nav>
        <BrowserRouter>
          <NavLink href="/">
            <OBLogo />
          </NavLink>{" "}
        </BrowserRouter>
        <Burger />
      </Nav>
    </>
  );
}
