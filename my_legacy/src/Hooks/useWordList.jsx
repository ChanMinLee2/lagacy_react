import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

function useWordList(ordering) {
  useEffect(() => {
    async function getWordList(ordering) {
      try {
        // const wordListURL = url + `/word${ordering}`;
        const words = await axiosInstance.get("/word" + ordering);
        const wordsInfo = words.data;
        localStorage.setItem("wordsInfo", JSON.stringify(wordsInfo));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    getWordList(ordering);
  }, [, ordering]);
  return;
}

export default useWordList;
