import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

function useWordDelete(wordId) {
  async function deleteWord(wordId) {
    try {
      const delWord = await axiosInstance.delete("/word/" + wordId);
      console.log(delWord);
    } catch (error) {
      console.error("error:", error);
    }
  }
  return deleteWord(wordId);
}

export default useWordDelete;
