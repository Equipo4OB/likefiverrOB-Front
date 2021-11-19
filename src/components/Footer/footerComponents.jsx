import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterDiv = styled.div`

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5%;
  margin-top: 20px;
  flex-wrap: wrap;


  @media screen and (max-width: 468px) {
    padding: 0;
    font-size: 20px;
    justify-content: flex-start;
    margin-left: 30px;

  }
`;


export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: ${(props) => props.theme.accent};
  list-decoration:none;

  li {
    font-weight: 300;
    color: ${(props) => props.theme.text};
    cursor: pointer;
    margin: 0.3rem 0 0.3rem 0;
    
  }

  li:hover {
    color: ${(props) => props.theme.accent};
  }

  @media screen and (max-width: 468px) {
    margin-top: 20px;
    



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
