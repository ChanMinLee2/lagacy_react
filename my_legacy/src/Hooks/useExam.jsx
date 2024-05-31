import { useEffect, useState } from "react";
import { axiosInstance } from "../api/apiConstants";

export default function useExam(level, amount, ranked) {
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getExam(level, amount, ranked) {
      try {
        const response = await axiosInstance.post(`/exam`, {
          level: level,
          amount: amount,
          ranked: ranked,
        });
        const examInfo = await response.data;
        setExam(examInfo);
        localStorage.setItem("examInfo", JSON.stringify(examInfo));
      } catch (error) {
        console.error("Fetch exam error:", error);
      } finally {
        setLoading(false);
      }
    }

    getExam(level, amount, ranked);
  }, [level, amount, ranked]);

  return { exam, loading };
}
