import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Header = styled.h2`
  margin-bottom: 20px;
  font-size: 1.2em;
`;

export const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const QuestionNumber = styled.div`
  width: 30px;
  font-weight: bold;
`;

export const QuestionText = styled.div`
  flex-grow: 1;
  text-align: left;
`;

export const AnswerInput = styled.input`
  width: 200px;
  padding: 5px;
  margin-right: 10px;
`;

export const Feedback = styled.div`
  color: ${(props) => (props.correct == "true" ? "green" : "red")};
  font-weight: bold;
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

export const ResultContainer = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
`;

export const Score = styled.div`
  font-weight: bold;
`;

export const Points = styled.div`
  color: #ffcc00;
  font-weight: bold;
`;

export const PointIcon = styled.span`
  margin-right: 5px;
`;

export const HomeButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;
`;
