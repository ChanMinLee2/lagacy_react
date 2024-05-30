import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useExamSubmit(answers, examId, isSubmitted) {
  // / 응답이 배열인지 확인하고, 객체인 경우 배열로 변환
  const [examRes, setExamRes] = useState();

  useEffect(() => {
    async function getExam(answers, examId) {
      try {
        const exam = await axiosInstance.post(`/exam/` + examId + "/submit", {
          answers: Object.values(answers),
        });
        const examInfo = await exam.data;
        console.log(examInfo);
        setExamRes(examInfo);
        // localStorage.setItem("examInfo", JSON.stringify(examInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    if (isSubmitted) {
      getExam(answers, examId);
    }
  }, [isSubmitted]);
  return examRes;
}
