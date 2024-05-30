// LoginPage.jsx
import React from "react";
import * as S from "./SignupPage.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/apiConstants";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username: username, password: password };
    try {
      // console.log(username, password, loginURL);
      const users = await axiosInstance.post("/user/register", data);
      // const users = await axios.post(loginURL, data, config);
      alert("회원가입에 성공하였습니다!");
      nav("/login");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>회원가입</S.Title>
        <S.Input
          type="text"
          placeholder="사용자 명"
          required
          defaultValue={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          required
          defaultValue={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <S.Footer>
          <S.Links to="/">돌아가기</S.Links>
          <S.Button type="submit">가입하기</S.Button>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default SignupPage;
