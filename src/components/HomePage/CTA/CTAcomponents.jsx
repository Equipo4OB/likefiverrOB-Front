import styled from "styled-components";
import img from "../../../assets/images/findimage.jpg";

export const CTADiv = styled.div`
  background-image: url(${img});

  height: 30vh;
  background-size: cover;
  opacity: 1;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10%;
`;

export const CTAHeader = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.bodyBg};
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.42);
`;

export const CTAButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.bodyBg};
  border: none;
  font-size: 1.3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.42);

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.subaccent};
  }
`;
