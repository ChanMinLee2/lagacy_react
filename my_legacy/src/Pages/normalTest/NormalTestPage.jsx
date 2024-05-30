import React, { useEffect, useState } from "react";
import * as S from "./NormalTestPage.style";
import { useLocation, useSearchParams } from "react-router-dom";
import useExam from "../../Hooks/useExam";
import useExamSubmit from "../../Hooks/useExamSubmit";

const NormalTestPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const level = searchParams.get("level");
  const amount = searchParams.get("amount");
  const ranked = searchParams.get("ranked");
  // console.log(level, amount, ranked);

  const exam = useExam(level, amount, ranked);

  const questions = JSON.parse(exam).questions;
  const examRes = useExamSubmit(answers, JSON.parse(exam).id, submitted);

  const handleChange = (e, id) => {
    setAnswers({
      ...answers,
      [id]: e.target.value,
    });
    console.log(answers);
  };

  const handleSubmit = () => {
    let newScore = 0;
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
        <S.QuestionContainer key={question.order}>
          <S.QuestionNumber>{question.order}</S.QuestionNumber>
          <S.QuestionText>
            ({question.word.type}) {question.word.korean}
          </S.QuestionText>
          <S.AnswerInput
            type="text"
            value={answers[question.order] || ""}
            onChange={(e) => handleChange(e, question.order)}
            disabled={submitted}
          />
          {submitted && examRes && (
            <S.Feedback
              correct={examRes.questions[index].is_correct.toString()}
            >
              {examRes.questions[index].word.english}
            </S.Feedback>
          )}
        </S.QuestionContainer>
      ))}
      {!submitted && (
        <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
      )}
      {submitted && examRes && (
        <S.ResultContainer>
          <S.Score>
            {examRes.point}/{questions.length} 점
          </S.Score>
          <S.Points>
            + <S.PointIcon>💰</S.PointIcon> {examRes.point.toFixed(2)}
          </S.Points>
        </S.ResultContainer>
      )}
      <S.HomeButton href="/menu">홈으로</S.HomeButton>
    </S.Container>
  );
};

export default NormalTestPage;
