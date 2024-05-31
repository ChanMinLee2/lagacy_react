import React, { useState } from "react";
import * as S from "./Store_InventoryPage.style";
import { Link } from "react-router-dom";
import useStreakFreezeBuy from "../../Hooks/useStreakFreezeBuy";
import useStreakFreezeToggle from "../../Hooks/useStreakFreezeToggle";

const Store_InventoryPage = () => {
  const me = JSON.parse(localStorage.getItem("userInfo"));
  const [points, setPoints] = useState(me.point);
  const [buyClick, setBuyClick] = useState(false);
  const [ownItemCount, setOwnItemCount] = useState(me.freeze_amount); // 사용자가 가지고 있는 아이템 개수
  const [isEquipped, setIsEquipped] = useState(me.freeze_activated);

  useStreakFreezeBuy(buyClick);
  useStreakFreezeToggle(isEquipped);

  const handleEquipToggle = () => {
    setIsEquipped(!isEquipped);
    console.log(isEquipped);
  };

  const handleBuyItem = () => {
    if (points >= 20 && ownItemCount <= 2) {
      setPoints(points - 20);
      setBuyClick(true);
    }
  };

  return (
    <S.Container>
      <S.Header>포인트 상점</S.Header>
      <S.Points>
        <S.PointIcon>💰</S.PointIcon>
        {points.toFixed(2)}
      </S.Points>
      <S.Message>매일 오전 5:30부터 오전 6:30까지는 휴점합니다.</S.Message>
      <S.ItemContainer>
        <S.Item>
          <S.ItemTitle>스트릭 프리저</S.ItemTitle>
          <S.ItemDescription>
            미리 장착해 두면 어제 문제 푸는 걸 잊었더라도 스트릭이 깨지지
            않습니다. 단, 스트릭 길이가 늘어나지는 않습니다.
          </S.ItemDescription>
          <S.ItemDescription>
            인벤토리에서 장착해서 사용할 수 있습니다.
          </S.ItemDescription>
          <S.ItemDescription>
            *최대 2개까지 보유할 수 있습니다
          </S.ItemDescription>
          <S.ItemDescription weight="700">
            현재 보유 개수 : {ownItemCount}
          </S.ItemDescription>
          <S.ItemPrice>
            <S.PointIcon>💰</S.PointIcon>20
          </S.ItemPrice>
          <S.BuyButton
            onClick={handleBuyItem}
            active={points >= 20 && ownItemCount <= 2}
            disabled={points < 20 || ownItemCount > 2}
          >
            구매
          </S.BuyButton>
          <S.Button
            onClick={handleEquipToggle}
            active={ownItemCount > 0}
            disabled={ownItemCount == 0}
          >
            {isEquipped ? "해제하기" : "장착하기"}
          </S.Button>
        </S.Item>
        {/* Add more items here if needed */}
      </S.ItemContainer>
      <S.BackButton to="/menu">뒤로 가기</S.BackButton>
    </S.Container>
  );
};

export default Store_InventoryPage;
