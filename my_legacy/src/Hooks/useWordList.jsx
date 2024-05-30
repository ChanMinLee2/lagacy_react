import React, { useEffect } from "react";
import axios from "axios";
import { axiosInstance } from "../api/apiConstants";

// useEffect(() => {
//   async function userMe(userID) {
//     try {
//       const users = await axiosInstance.get("/user/" + userID);
//       const userInfo = await users.data;
//       localStorage.setItem("userInfo", JSON.stringify(userInfo));
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   }

//   userMe(userID);
// }, [userID]);

function useWordList(ordering) {
  console.log(ordering);
  useEffect(() => {
    async function getWordList(ordering) {
      try {
        // const wordListURL = url + `/word${ordering}`;
        const words = await axiosInstance.get("/word" + ordering);
        const wordsInfo = await words.data;
        localStorage.setItem("wordsInfo", JSON.stringify(wordsInfo));
        console.log(localStorage.getItem("wordsInfo"));
      } catch (error) {
        console.error("Login error:", error);
      }
    }

    getWordList(ordering);
  }, [ordering]);
  return localStorage.getItem("wordsInfo");
}

export default useWordList;
