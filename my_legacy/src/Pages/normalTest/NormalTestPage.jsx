import React, { useState } from "react";
import * as S from "./NormalTestPage.style";

const NormalTestPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);

  const questions = [
    { id: 1, question: "약속, 임명", pos: "n", correctAnswer: "promise" },
    { id: 2, question: "증가하는", pos: "a", correctAnswer: "increasing" },
    { id: 3, question: "시각화하다", pos: "v", correctAnswer: "visualize" },
    { id: 4, question: "현신, 전념", pos: "n", correctAnswer: "commitment" },
    { id: 5, question: "토론, 토의", pos: "n", correctAnswer: "discussion" },
    {
      id: 6,
      question: "유난히, 비정상적으로",
      pos: "ad",
      correctAnswer: "unusually",
    },
    { id: 7, question: "보존하다", pos: "v", correctAnswer: "preserve" },
    { id: 8, question: "만족", pos: "n", correctAnswer: "satisfaction" },
    { id: 9, question: "자선의", pos: "a", correctAnswer: "charitable" },
    {
      id: 10,
      question: "주된, (직급상) 최고위자인",
      pos: "a",
      correctAnswer: "chief",
    },
  ];

  const handleChange = (e, id) => {
    setAnswers({
      ...answers,
      [id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question) => {
      if (
        answers[question.id]?.toLowerCase() ===
        question.correctAnswer.toLowerCase()
      ) {
        newScore++;
      }
    });
    setScore(newScore);
    setPoints(newScore * 5.4);
    setSubmitted(true);
  };

  return (
    <S.Container>
      <S.Header>
        ※ 왼쪽의 단어에 어울리는 영단어 또는 우리말 뜻을 쓰세요.
      </S.Header>
      {questions.map((question, index) => (
        <S.QuestionContainer key={question.id}>
          <S.QuestionNumber>{index + 1}</S.QuestionNumber>
          <S.QuestionText>
            ({question.pos}) {question.question}
          </S.QuestionText>
          <S.AnswerInput
            type="text"
            value={answers[question.id] || ""}
            onChange={(e) => handleChange(e, question.id)}
            disabled={submitted}
          />
          {submitted && (
            <S.Feedback
              correct={
                answers[question.id]?.toLowerCase() ===
                question.correctAnswer.toLowerCase()
              }
            >
              {question.correctAnswer}
            </S.Feedback>
          )}
        </S.QuestionContainer>
      ))}
      {!submitted && (
        <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
      )}
      {submitted && (
        <S.ResultContainer>
          <S.Score>
            {score}/{questions.length} 점
          </S.Score>
          <S.Points>
            + <S.PointIcon>💰</S.PointIcon> {points.toFixed(2)}
          </S.Points>
        </S.ResultContainer>
      )}
      <S.HomeButton href="/menu">홈으로</S.HomeButton>
    </S.Container>
  );
};

export default NormalTestPage;
