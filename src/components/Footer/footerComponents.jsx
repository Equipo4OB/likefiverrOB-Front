import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterDiv = styled.div`
  height: 30vh;
  background-size: cover;
  opacity: 1;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: ${(props) => props.theme.accent};

  li {
    font-weight: 300;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    margin: 0.3rem 0 0.3rem 0;
  }

  li:hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const FootLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: ${(props) => props.theme.accent};
  }
`;
