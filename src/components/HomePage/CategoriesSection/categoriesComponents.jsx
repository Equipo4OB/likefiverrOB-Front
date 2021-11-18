import styled from "styled-components";
import { Link } from "react-router-dom";

export const CatDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 6rem 2rem 6rem 2rem;
`;

export const GroupDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: border-bottom 0.6s linear;
  margin-right: 2rem;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.accent};
    transition: border-bottom 0.6s linear;
  }
`;

export const CatLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.accent};
`;
export const CatHeader = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 2rem;
`;
