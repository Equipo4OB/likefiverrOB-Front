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

  @media screen and (max-width: 468px) {
    flex-direction: column;
  }
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
  @media screen and (max-width: 468px) {
    margin-top: 10px;
  }
`;

export const CatLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.accent};
`;
export const CatHeader = styled.h1`
  color: ${(props) => props.theme.text};
  font-size: 2rem;

  @media screen and (max-width: 468px) {
    font-size: 1.5rem;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 100px;
  margin: 20px;
  background-color: ${(props) => props.theme.accent};
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

  img {
    opacity: 0.4;
    height: 350px;
    position: relative;
  }
`;

export const CategoryTitle = styled.h2`
  color: white;
  font-size: 30px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
  position: absolute;
  text-transform: uppercase;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  justify-content: center;

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
