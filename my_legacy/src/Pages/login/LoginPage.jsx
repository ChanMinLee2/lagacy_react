// LoginPage.jsx
import React from "react";
import * as S from "./LoginPage.style";

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>로그인</S.Title>
        <S.Input type="text" placeholder="사용자 명" required />
        <S.Input type="password" placeholder="비밀번호" required />

        <S.Footer>
          <S.Links to="/signup">계정 만들기</S.Links>
          <S.Button type="submit">로그인</S.Button>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default LoginPage;
