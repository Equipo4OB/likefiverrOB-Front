import styled from "styled-components";

export const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 1px solid lightgray;
  margin: 20px;
  
`;

export const WorkTitle = styled.p`
  margin-left: 10px;
`;

export const WorkStars = styled.p`
  margin-left: 10px;
  margin-top: 10px;
  color: #e6a715;
  fill: #e6a715;
  font-size: 15px;
`;

export const WorkPriceDiv = styled.div`
  border-top: 1px solid lightgray;
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const PriceLabel = styled.p`
  font-size: 10px;
  font-weight: bold;
  color: darkgray;
`;
export const Price = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Seller = styled.div`
  display: flex;
  margin: 10px;

  img {
    height: 35px;
    width: auto;
    border-radius: 10px;
  }
  span {
    display: flex;
    flex-direction: column;
  }
`;
export const SellerData = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  margin-left: 10px;
`;
export const SellerNick = styled.p`
  font-size: 13px;
  font-weight: bold;
`;
export const SellerLevel = styled.p`
  font-size: 12px;
  opacity: 0.8;
`;
