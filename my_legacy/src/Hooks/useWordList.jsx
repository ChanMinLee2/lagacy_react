import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

function useWordList(ordering) {
  // console.log(ordering);
  const [wordsInfo, setWordsInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(loading);
    async function getWordList(ordering) {
      try {
        // const wordListURL = url + `/word${ordering}`;
        const words = await axiosInstance.get("/word" + ordering);
        const wordsInfo = await words.data;
        setWordsInfo(wordsInfo);
        setLoading(false);
        localStorage.setItem("wordsInfo", JSON.stringify(wordsInfo));
        console.log(localStorage.getItem("wordsInfo"));
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        setLoading(false);
      }
    }

    getWordList(ordering);
  }, [ordering]);
  // return localStorage.getItem("wordsInfo");
  return { wordsInfo, loading };
}

export default useWordList;
