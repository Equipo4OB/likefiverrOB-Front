import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    cursor: pointer;
    font-weight: 500;
  }

  li:hover {
    color: ${(props) => props.theme.accent};
  }
  @media (max-width: 768px) {
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
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Explora</li>
      <li>Conviertete en vendedor</li>
      <li>Contáctanos</li>
      <li>Únete</li>
      <li>Regístrate</li>
    </Ul>
  );
};

export default RightNav;
