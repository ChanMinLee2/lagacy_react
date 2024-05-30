import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

import React from "react";

export default function useExam(level, amount) {
  useEffect(() => {
    async function getExam(level, amount) {
      try {
        const exam = await axiosInstance.get(`/exam`, {
          level: level,
          amount: amount,
        });
        const examInfo = exam.data;
        localStorage.setItem("examInfo", JSON.stringify(examInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }
    getExam(level, amount);
  }, [level, amount]);
  return;
}
