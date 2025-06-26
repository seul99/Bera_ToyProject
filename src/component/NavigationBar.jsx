import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// 네비게이션바
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

function NavigationBar(props) {
  const navigate = useNavigate();
  const [active, setActive] = useState("main");
  // 클릭 이벤트
  const itemClick = (menu) => {
    setActive(menu);
    navigate(`/${menu}`);
  };
  return (
    <Bar>
      <Item onClick={() => itemClick("main")}>
        <img
          src={
            active === "main"
              ? `${process.env.PUBLIC_URL}/images/nave/home_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/home_off.svg`
          }
        />
      </Item>
      <Item onClick={() => itemClick("serch")}>
        <img
          src={
            active === "serch"
              ? `${process.env.PUBLIC_URL}/images/nave/serch_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/serch_off.svg`
          }
        />
      </Item>
      <Item onClick={() => itemClick("favorit")}>
        <img
          src={
            active === "favorit"
              ? `${process.env.PUBLIC_URL}/images/nave/star_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/star_off.svg`
          }
        />
      </Item>
      <Item onClick={() => itemClick("profile")}>
        <img
          src={
            active === "profile"
              ? `${process.env.PUBLIC_URL}/images/nave/profile_on.svg`
              : `${process.env.PUBLIC_URL}/images/nave/profile_off.svg`
          }
        />
      </Item>
    </Bar>
  );
}

export default NavigationBar;
