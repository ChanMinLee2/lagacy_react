import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

function useWordModify(word, wordId) {
  async function modifyWord(type, english, korean, level, wordId) {
    try {
      // const wordListURL = url + `/word${ordering}`;
      const modifyWord = await axiosInstance.patch("/word/" + wordId, {
        type: type,
        english: english,
        korean: korean,
        level: level,
      });
      console.log(modifyWord);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return modifyWord(word.type, word.english, word.korean, word.level, wordId);
}

export default useWordModify;
