import React, { useEffect, useState } from "react";
import * as S from "./NormalTestPage.style";
import { useSearchParams } from "react-router-dom";
import useExam from "../../Hooks/useExam";
import useExamSubmit from "../../Hooks/useExamSubmit";

const NormalTestPage = () => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [points, setPoints] = useState(0);

  const [searchParams] = useSearchParams();
  const level = searchParams.get("level");
  const amount = searchParams.get("amount");
  const ranked = searchParams.get("ranked");

  const { exam, loading } = useExam(level, amount, ranked);
  const { examRes, isSubmitting } = useExamSubmit(
    answers,
    exam ? exam.id : null,
    submitted
  );

  useEffect(() => {
    if (submitted && examRes) {
      let newScore = 0;
      examRes.questions.forEach((res) => {
        if (res.is_correct) {
          newScore += 1;
        }
      });
      setScore(newScore);
      setPoints(newScore);
    }
  }, [submitted, examRes]);

  const handleChange = (e, id) => {
    setAnswers({
      ...answers,
      [id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isSubmitting) {
    return <div>Submitting...</div>;
  }

  const questions = exam.questions;

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
      <S.ButtonContainer>
        <S.HomeButton href="/menu">홈으로</S.HomeButton>
        <S.SubmitButton onClick={handleSubmit}>테스트 완료</S.SubmitButton>
      </S.ButtonContainer>
      {submitted && examRes && (
        <S.ResultContainer>
          <S.Score>
            {score}/{questions.length} 점
          </S.Score>
          <S.Points>
            + <S.PointIcon>💰</S.PointIcon> {points.toFixed(2)}
          </S.Points>
        </S.ResultContainer>
      )}
    </S.Container>
  );
};

export default NormalTestPage;
