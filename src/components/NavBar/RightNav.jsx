import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  a {
    padding: 18px 10px;
    cursor: pointer;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
  a {
    text-decoration: none;
  }

  a:hover {
    color: ${(props) => props.theme.accent};
  }
  @media (max-width: 964px) {
    flex-flow: column nowrap;
    background-color: ${(props) => props.theme.text};
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="/explorar">Explorar</a>
      <a href="/">Conviertete en vendedor</a>
      <a href="/">Contáctanos</a>
      <a href="/">Únete</a>
      <a href="/">Regístrate</a>
    </Ul>
  );
};

export default RightNav;
