import React, { useState } from "react";
import * as S from "./LoginPage.style";
import { axiosInstance } from "../../api/apiConstants";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username: username, password: password };
    try {
      const response = await axiosInstance.post("/user/login", data, {
        withCredentials: true, // include this line to handle cookies
      });
      console.log(response);
      localStorage.clear();
      localStorage.setItem("userID", response.data.id);
      nav("/menu");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <S.Input
          type="text"
          placeholder="사용자명"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
