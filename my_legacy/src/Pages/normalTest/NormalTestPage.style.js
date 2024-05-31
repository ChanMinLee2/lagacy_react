import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Header = styled.h1`
  font-size: 24px;
  text-align: center;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const QuestionNumber = styled.span`
  width: 30px;
  text-align: center;
`;

export const QuestionText = styled.span`
  flex: 1;
  margin-right: 10px;
  color: red; /* Ensure the color stands out */
`;

export const AnswerInput = styled.input`
  flex: 2;
  padding: 5px;
  margin-right: 10px;
`;

export const Feedback = styled.span`
  flex: 1;
  color: ${(props) => (props.correct === "true" ? "green" : "red")};
  font-weight: bold;
  text-align: right;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
  width: 40%;

  &:hover {
    background-color: darkblue;
  }
`;

export const HomeButton = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  width: 35%;

  &:hover {
    background-color: darkred;
  }
`;

export const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const Score = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const Points = styled.p`
  font-size: 20px;
`;

export const PointIcon = styled.span`
  margin-right: 5px;
`;
