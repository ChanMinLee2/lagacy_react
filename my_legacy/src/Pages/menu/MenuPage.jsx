import React from "react";
import * as S from "./MenuPage.style";
import useUserMe from "../../Hooks/useUserMe";
import { useNavigate } from "react-router-dom";
import headerImage from "../../assets/menu_bg.webp";
import useStreakCalendar from "../../Hooks/useStreakCalendar";
import { format, subDays } from "date-fns";

const generateLast28Days = () => {
  const days = [];
  for (let i = 0; i < 28; i++) {
    days.push(format(subDays(new Date(), i), "yyyy-MM-dd"));
  }
  return days.reverse(); // Reverse to have the most recent day at the end
};

const MenuPage = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");

  // Always call hooks at the top level of your component
  const { userInfo, loading: userLoading } = useUserMe(userID);
  const { calendar, loading: calendarLoading } = useStreakCalendar(
    userInfo ? userInfo.id : null
  );
  // const calendar = {
  //   "2024-05-01": 1,
  //   "2024-05-02": 0,
  //   "2024-05-03": 3,
  //   "2024-05-04": 10,
  //   "2024-05-05": 0,
  //   "2024-05-06": 0,
  //   "2024-05-07": 1,
  //   "2024-05-08": 1,
  //   "2024-05-09": 0,
  //   "2024-05-10": 2,
  //   "2024-05-11": 0,
  //   "2024-05-12": 3,
  //   "2024-05-13": 0,
  //   "2024-05-14": 1,
  //   "2024-05-15": 0,
  //   "2024-05-16": 0,
  //   "2024-05-17": 1,
  //   "2024-05-18": 1,
  //   "2024-05-19": 0,
  //   "2024-05-20": 0,
  //   "2024-05-21": 1,
  //   "2024-05-22": 1,
  //   "2024-05-23": 0,
  //   "2024-05-24": 2,
  //   "2024-05-25": 0,
  //   "2024-05-26": 0,
  //   "2024-05-27": 1,
  //   "2024-05-28": 3,
  // };

  if (userLoading || calendarLoading) {
    return <div>Loading...</div>;
  }

  // console.log(calendar.calendar.calendar); // Check the structure of the calendar object

  const streakData = generateLast28Days();

  const getRandomLevel = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  return (
    <S.Container>
      {/* <S.HeaderImage src={headerImage} /> */}
      <S.ProfileContainer>
        <S.ProfilePic />
        {userInfo && userInfo.username && (
          <S.Username>{userInfo.username}</S.Username>
        )}
        {userInfo && userInfo.level && (
          <S.UserLevel>현재 사용자 레벨 : {userInfo.level}</S.UserLevel>
        )}
      </S.ProfileContainer>
      <S.StreakCalendar>
        {streakData.map((date) => (
          <S.DayBox key={date} learned={calendar.calendar.calendar[date] > 0}>
            {new Date(date).getDate()}
          </S.DayBox>
        ))}
      </S.StreakCalendar>
      <S.StreakBox>
        <S.StreakTitle>🪴 스트릭</S.StreakTitle>
        {userInfo && (
          <S.StreakCount>오늘 포함 {userInfo.streak}일</S.StreakCount>
        )}
      </S.StreakBox>
      <S.PointsBox href="/store">
        <S.PointsTitle>🪙 포인트 상점 & 인벤토리</S.PointsTitle>
        <S.PointsStatus>
          스트릭 프리즈{" "}
          {userInfo && userInfo.streak_freeze_activated
            ? "장착 중"
            : "미장착 중"}
        </S.PointsStatus>
      </S.PointsBox>
      <S.TestCategory>
        <S.CategoryTitle>🗡 단어 테스트</S.CategoryTitle>
        <S.TestOption href="/testChoice">🍏 일반 단어 맞추기</S.TestOption>
        <S.TestOption
          onClick={() => {
            navigate(
              `/test?level=${getRandomLevel()}&amount=${10}&ranked=${true}`
            );
          }}
        >
          🍎 내 수준 점검하기
        </S.TestOption>
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
