// LoginPage.jsx
import React from "react";
import * as S from "./LoginPage.style";
import { useState } from "react";
import axios from "axios";
import { url, config } from "../../api/apiConstants";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginID, setLoginID] = useState("");
  const [loginPW, setLoginPW] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username: loginID, password: loginPW };
    const loginURL = url + "/user/login";

    try {
      const res = await axios.post(loginURL, data, config);
      console.log(res.data);
      nav("/menu");
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  console.log(loginID, loginPW);

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <S.Input
          type="text"
          placeholder="사용자명"
          required
          defaultValue={loginID}
          onChange={(e) => setLoginID(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          required
          defaultValue={loginPW}
          onChange={(e) => setLoginPW(e.target.value)}
        />

        <S.Footer>
          <S.Links to="/signup">계정 만들기</S.Links>
          <S.Button type="submit">로그인</S.Button>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default LoginPage;
