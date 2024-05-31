import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 100vh;
  background-color: #f7f7f7;
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Points = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PointIcon = styled.span`
  font-size: 24px;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: 800px;
  justify-content: center;
`;

export const Item = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const ItemTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: #555;
  font-weight: ${(props) => (props.weight ? props.weight : 400)};
`;

export const ItemPrice = styled.div`
  font-size: 18px;
  margin-top: auto;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: ${({ active }) => (active ? "#4caf50" : "#888")};
  border: none;
  border-radius: 4px;
  cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};

  &:hover {
    background-color: ${({ active }) => (active ? "#388e3c" : "#888")};
  }
`;

export const BuyButton = styled(Button)`
  background-color: #1a73e8;
  margin-bottom: 10px;

  &:hover {
    background-color: #1669c1;
  }
`;

export const BackButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #888;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;
