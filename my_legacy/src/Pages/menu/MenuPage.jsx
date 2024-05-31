// MenuPage.jsx
import React, { useEffect, useState } from "react";
import * as S from "./MenuPage.style";
import useUserMe from "../../Hooks/useUserMe";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import headerImage from "../../assets/menu_bg.webp";

const MenuPage = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  let userInfo = useUserMe(userID);
  userInfo = JSON.parse(userInfo);

  const streakData = [
    [1, 1, 1, 0, 0, 1, 1], // Week 1
    [1, 0, 1, 1, 0, 1, 1], // Week 2
    [1, 1, 0, 0, 1, 1, 1], // Week 3
    [1, 0, 0, 1, 1, 0, 1], // Week 4
    [0, 1, 1, 0, 0, 1, 1], // Week 5
  ];

  const getRandomLevel = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  return (
    <S.Container>
      {/* <img sr></img> */}
      {/* <S.HeaderImage src={headerImage} /> */}
      <S.ProfileContainer>
        <S.ProfilePic />
        {console.log(userInfo)}
        {userInfo.username && <S.Username>{userInfo.username}</S.Username>}
        {userInfo.level && (
          <S.UserLevel>현재 사용자 레벨 : {userInfo.level}</S.UserLevel>
        )}
      </S.ProfileContainer>
      <S.StreakCalendar>
        {streakData.map((week, i) => (
          <S.WeekRow key={i}>
            {week.map((day, j) => (
              <S.DayBox key={j} learned={day} />
            ))}
          </S.WeekRow>
        ))}
      </S.StreakCalendar>
      <S.StreakBox>
        <S.StreakTitle>🪴 스트릭</S.StreakTitle>
        {userInfo.streak && (
          <S.StreakCount>오늘 포함 {userInfo.streak}일</S.StreakCount>
        )}
      </S.StreakBox>
      <S.PointsBox href="/store">
        <S.PointsTitle>🪙 포인트 상점 & 인벤토리</S.PointsTitle>
        <S.PointsStatus>스트릭 프리즈 장착 중</S.PointsStatus>
      </S.PointsBox>
      <S.TestCategory>
        <S.CategoryTitle>🗡 단어 테스트</S.CategoryTitle>
        <S.TestOption href="/testChoice">🍏 일반 단어 맞추기</S.TestOption>
        {/* <Link
          to={{
            pathname: "/test",
            state: { level: getRandomLevel(), amount: 10, ranked: true },
          }}
        > */}
        <S.TestOption
          onClick={() => {
            navigate(
              `/test?level=${getRandomLevel()}&amount=${10}&ranked=${true}`
            );
          }}
        >
          🍎 내 수준 점검하기
        </S.TestOption>
        {/* </Link> */}
      </S.TestCategory>
      <S.AdminBox>
        <S.AdminOption href="/wordManage">🔍 단어 관리</S.AdminOption>
      </S.AdminBox>
      <S.LogoutBox>
        <S.LogoutButton href="/">로그아웃</S.LogoutButton>
      </S.LogoutBox>
    </S.Container>
  );
};

export default MenuPage;
