import { useEffect, useState } from "react";
import { axiosInstance } from "../api/apiConstants";

export default function useExamSubmit(answers, examId, isSubmitted) {
  const [examRes, setExamRes] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function submitExam(answers, examId) {
      setIsSubmitting(true);
      try {
        const exam = await axiosInstance.post(`/exam/${examId}/submit`, {
          answers: Object.values(answers),
        });
        const examInfo = await exam.data;
        console.log(examInfo);
        setExamRes(examInfo);
      } catch (error) {
        console.error("Submit exam error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }

    if (isSubmitted) {
      submitExam(answers, examId);
    }
  }, [isSubmitted, answers, examId]);

  return { examRes, isSubmitting };
}
