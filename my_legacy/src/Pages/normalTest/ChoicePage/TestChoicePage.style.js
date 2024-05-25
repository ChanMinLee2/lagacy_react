import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LevelSelection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const LevelButton = styled.button`
  background-color: ${(props) => (props.selected ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#000000")};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#0056b3" : "#f0f0f0")};
  }
`;

export const QuestionsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
`;

export const QuestionsHeader = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const QuestionsSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 20px;
  width: 100%;
`;

export const QuestionRadio = styled.input`
  margin: 10px;
`;

export const QuestionLabel = styled.label`
  margin: 10px;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export const HomeButton = styled.a`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #007bff;
  border: 1px solid #007bff;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

export const StartButton = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
