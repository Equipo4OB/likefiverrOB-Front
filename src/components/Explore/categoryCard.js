import styled from "styled-components";

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
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
`;
