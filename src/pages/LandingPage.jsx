import React from "react";
import * as L from "../styled/styledLandingPage.jsx";
import { useNavigate } from "react-router-dom";

function LandingPage(props) {
  const navigate = useNavigate();
  return (
    <L.Container>
      <L.Box>
        <L.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/landingLogo.svg`}
            alt="logo"
          />
        </L.Logo>
        <L.Title>자리있솜</L.Title>
        <L.StartBtn onClick={() => navigate("/start")}>시작하기</L.StartBtn>
        <L.GotoLogin>
          <p>이미 계정이 있나요?</p>
          <L.LoginBtn onClick={() => navigate("/login")}>로그인</L.LoginBtn>
        </L.GotoLogin>
      </L.Box>
    </L.Container>
  );
}
export default LandingPage;
