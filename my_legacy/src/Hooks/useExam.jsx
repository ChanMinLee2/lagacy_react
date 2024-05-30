import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

export default function useExam(level, amount, ranked) {
  const [exam, setExam] = useState(null);
  useEffect(() => {
    async function getExam(level, amount, ranked) {
      try {
        const exam = await axiosInstance.post(`/exam`, {
          level: level,
          amount: amount,
          ranked: ranked,
        });
        const examInfo = await exam.data;
        setExam(examInfo);
        // console.log(examInfo);
        localStorage.setItem("examInfo", JSON.stringify(examInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }
    if (!exam) {
      getExam(level, amount, ranked);
    }
  }, []);
  return localStorage.getItem("examInfo");
}
