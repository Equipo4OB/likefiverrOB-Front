import styled from "styled-components";
import { Link } from "react-router-dom";

export const LastWorksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 6rem 2rem 6rem 2rem;
`;

export const GroupDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const LastWorksLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.text};

  :hover {
    color: ${(props) => props.theme.accent};
  }
`;

export const LastWorksHeader = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 2rem;

  @media screen and (max-width: 468px) {
    font-size: 1.5rem;
  }
`;
