import React from "react";
import styled from "styled-components";
// 메인화면 로고 컴포넌트
const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
const LogoImg = styled.img`
  width: 44.211px;
  height: 48px;
  flex-shrink: 0;
  aspect-ratio: 44.21/48;
`;
const LogoText = styled.p`
  color: #70b9be;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #70b9be;
  font-family: "Gowun Dodum";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 3px 0;
`;
function MainLogo(props) {
  return (
    <LogoBox>
      <LogoImg
        src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
        alt="logo"
      />
      <LogoText>자리있솜</LogoText>
    </LogoBox>
  );
}

export default MainLogo;
