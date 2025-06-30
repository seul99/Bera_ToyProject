import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
//네비게이션바
const Bar = styled.div`
  display: flex;
  width: 393px;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 60px;
  border: 1px solid #f4f5f7;
  background: #fff;
  position: absolute;
  bottom: 0;
`;

const Item = styled.div`
  width: 23px;
  height: 42.06px;
  flex-shrink: 0;
  cursor: pointer;
`;

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname || "";

  const itemClick = (menu) => {
    navigate(`/${menu}`);
  };

  return (
    <Bar>
      <Item onClick={() => itemClick("main")}>
        <img
          src={
            path === "/main"
              ? `${process.env.PUBLIC_URL}/images/nave/home_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/home_off.svg`
          }
          alt="홈"
        />
      </Item>
      <Item onClick={() => itemClick("SearchMain")}>
        <img
          src={
            path.startsWith("/SearchMain")
              ? `${process.env.PUBLIC_URL}/images/nave/serch_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/serch_off.svg`
          }
          alt="검색"
        />
      </Item>
      <Item onClick={() => itemClick("favorit")}>
        <img
          src={
            path === "/favorit"
              ? `${process.env.PUBLIC_URL}/images/nave/star_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/star_off.svg`
          }
          alt="즐겨찾기"
        />
      </Item>
      <Item onClick={() => itemClick("MyPage")}>
        <img
          src={
            path === "/MyPage"
              ? `${process.env.PUBLIC_URL}/images/nave/profile_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/profile_off.svg`
          }
          alt="프로필"
        />
      </Item>
    </Bar>
  );
}

export default NavigationBar;
