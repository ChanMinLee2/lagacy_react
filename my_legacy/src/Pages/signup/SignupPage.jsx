// LoginPage.jsx
import React from "react";
import * as S from "./SignupPage.style";

const SignupPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리 로직 추가
  };

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <S.Title>회원가입</S.Title>
        <S.Input type="text" placeholder="사용자 명" required />
        <S.Input type="password" placeholder="비밀번호" required />
        <S.Footer>
          <S.Links to="/">돌아가기</S.Links>
          <S.Button type="submit">가입하기</S.Button>
        </S.Footer>
      </S.Form>
    </S.Container>
  );
};

export default SignupPage;
