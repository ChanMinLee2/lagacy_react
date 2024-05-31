// MenuPage.style.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100vh; */
  background-color: #f7f7f7;
`;

export const HeaderImage = styled.img`
  width: 0%;
  height: 25vh;
`;

export const ProfileContainer = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: -40px; */
  margin-bottom: 20px;
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ccc;
  border-radius: 50%;
  border: 4px solid white;
`;

export const Username = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
`;

export const UserLevel = styled.div`
  font-size: 18px;
  color: #666;
`;

export const StreakCalendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin: 20px auto;
  width: 80%;
  /* place-self: start center; */
`;

export const WeekRow = styled.div`
  display: contents;
`;

export const DayBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 4px;
  place-self: start center;
  background-color: ${({ learned }) => (learned ? "#66bb6a" : "#e0e0e0")};
`;

export const StreakBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 15px;
  border-radius: 8px;
  background-color: #c8e6c9;
  margin-bottom: 20px;
`;

export const StreakTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const StreakCount = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  /* color: white; */
`;

export const PointsBox = styled.a`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff9c4;
  margin-bottom: 20px;
  text-decoration: none;
  color: #000;

  &:hover {
    background-color: #f6f279;
  }
`;

export const PointsTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PointsStatus = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

export const TestCategory = styled.div`
  width: 80%;
  padding: 15px;
  border-radius: 8px;
  background-color: #e1f5fe;
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const TestOption = styled.a`
  display: block;
  background-color: #b3e5fc;
  color: #000;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
  text-align: center;

  &:hover {
    background-color: #81d4fa;
  }
`;

export const AdminBox = styled.div`
  width: 80%;
  padding: 15px;
  border-radius: 8px;
  background-color: #ffccbc;
  margin-bottom: 20px;
`;

export const AdminOption = styled.a`
  display: block;
  background-color: #ffab91;
  color: #000;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
  text-align: center;

  &:hover {
    background-color: #ff8a65;
  }
`;

export const LogoutBox = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const LogoutButton = styled.a`
  display: inline-block;
  background-color: #d32f2f;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;

  &:hover {
    background-color: #c62828;
  }
`;
