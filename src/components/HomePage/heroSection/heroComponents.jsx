import styled from "styled-components";
import img from "../../../assets/images/heroimage.jpg";

export const HeroDiv = styled.div`
  background-image: url(${img});

  height: 60vh;
  background-size: cover;
  opacity: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10%;



  @media screen and (max-width: 468px) {
    height: auto;      
    
  }
`;

export const SearchDiv = styled.div`
  margin-top: 1.5rem;

  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.bodyBg};
  min-width: 40vw;
  min-height: 5vh;



`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  padding: 1rem;
  min-width: 20vw;
  :focus {
    outline: none;
    border: none;
  }
`;
export const InputButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.bodyBg};
  border: none;
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.subaccent};
  }
`;

export const HeroHeader = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.bodyBg};
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.42);
  white-space: wrap;
  @media screen and (max-width: 468px) {
    font-size: 1.5rem;      }
`;

export const TagsDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  @media screen and (max-width: 468px) {
    display:flex;
  flex-direction: column;     }
`;

export const PTags = styled.p`
  margin-top: 1.5rem;
  color: ${(props) => props.theme.bodyBg};
  font-weight: 500;
  margin-right: 0.5rem;


`;

export const ButtonTags = styled.button`
  color: ${(props) => props.theme.bodyBg};
  font-weight: 500;
  font-size: 1rem;
  border: 1px solid ${(props) => props.theme.bodyBg};
  background: none;
  border-radius: 1rem;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  height: fit-content;
  margin-right: 0.5rem;

  :hover {
    background: ${(props) => props.theme.bodyBg};
    color: ${(props) => props.theme.headings};
  }

  @media screen and (max-width: 468px) {
    margin-top: 10px;    }
`;
