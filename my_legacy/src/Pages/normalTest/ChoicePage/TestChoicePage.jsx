import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./TestChoicePage.style";

const TestChoicePage = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(10);
  const navigate = useNavigate();

  const handleLevelChange = (level) => {
    if (level === "입문반(550+), 기본반(650+)") {
      setSelectedLevel(1);
    } else if (level === "중급반(750+)") {
      setSelectedLevel(2);
    } else if (level === "정규반(850+)") {
      setSelectedLevel(3);
    } else if (level === "실전반(900+)") {
      setSelectedLevel(4);
    }
  };

  const handleQuestionsChange = (questions) => {
    if (questions === "10문제") {
      setSelectedQuestions(10);
    } else if (questions === "20문제") {
      setSelectedQuestions(20);
    } else if (questions === "30문제") {
      setSelectedQuestions(30);
    } else if (questions === "40문제") {
      setSelectedQuestions(40);
    }
  };

  const handleStartClick = (e) => {
    if (selectedLevel === null) {
      e.preventDefault();
      alert("난이도를 선택해주세요.");
      return;
    }
    navigate(
      `/test?level=${selectedLevel}&amount=${selectedQuestions}&ranked=${false}`
    );
  };

  return (
    <S.Container>
      <S.Header>시험 난이도</S.Header>
      <S.LevelSelection>
        {[
          "입문반(550+), 기본반(650+)",
          "중급반(750+)",
          "정규반(850+)",
          "실전반(900+)",
        ].map((level) => (
          <S.LevelButton
            key={level}
            selected={
              (selectedLevel === 1 && level === "입문반(550+), 기본반(650+)") ||
              (selectedLevel === 2 && level === "중급반(750+)") ||
              (selectedLevel === 3 && level === "정규반(850+)") ||
              (selectedLevel === 4 && level === "실전반(900+)")
            }
            onClick={() => handleLevelChange(level)}
          >
            {level}
          </S.LevelButton>
        ))}
      </S.LevelSelection>
      <S.QuestionsHeader>문제 수</S.QuestionsHeader>
      <S.QuestionsSelection>
        {["10문제", "20문제", "30문제", "40문제"].map((question) => (
          <S.QuestionsContainer key={question}>
            <S.QuestionRadio
              type="radio"
              name="questions"
              value={question}
              checked={selectedQuestions === parseInt(question)}
              onChange={() => handleQuestionsChange(question)}
            />
            <S.QuestionLabel>{question}</S.QuestionLabel>
          </S.QuestionsContainer>
        ))}
      </S.QuestionsSelection>
      <S.ButtonContainer>
        <S.HomeButton href="/menu">홈으로</S.HomeButton>
        <S.StartButton onClick={handleStartClick}>테스트 시작</S.StartButton>
      </S.ButtonContainer>
    </S.Container>
  );
};

export default TestChoicePage;
