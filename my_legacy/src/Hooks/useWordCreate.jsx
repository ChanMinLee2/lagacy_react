import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

function useWordCreate(props) {
  const { type, english, korean, level } = props;

  async function createWord(type, english, korean, level) {
    try {
      // const wordListURL = url + `/word${ordering}`;
      const addWord = await axiosInstance.post("/word", {
        type: type,
        english: english,
        korean: korean,
        level: level,
      });
      console.log(addWord);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return createWord(type, english, korean, level);
}

export default useWordCreate;
