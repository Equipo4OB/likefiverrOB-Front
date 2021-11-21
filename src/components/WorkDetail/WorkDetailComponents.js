import styled from "styled-components";

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  min-height: 60vh;
`;

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;
  column-gap: 4rem;
`;

export const DetailContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailTitle = styled.h1`
  font-size: 2rem;
`;

export const DetailScoreDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;
export const DetailScore = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  color: gray;
  font-weight: bold;
`;
export const CategoryButton = styled.button`
  background-color: ${(props) => props.theme.accent};
  color: ${(props) => props.theme.bodyBg};
  text-transform: uppercase;
  width: fit-content;
  padding: 0.3rem 1rem 0.3rem 1rem;
  border: none;
  border-radius: 20px;
  margin: 0 0 1rem 0;
  opacity: 0.6;
  font-size: 10px;
`;
