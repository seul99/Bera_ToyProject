import React from "react";
import * as S from "../styled/styledStartPage";
import { useNavigate } from "react-router-dom";

function StartPage(props) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Box>
        <S.Title>
          자리있솜을 시작하려면
          <br />
          회원가입을 해주세요
        </S.Title>
        <S.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
            alt="logo"
          />
          <p>
            지금 어디가 비어있는지,
            <br />
            솜솜이가 알려줘요!
          </p>
        </S.Logo>
        <S.BtnGroup>
          <S.StartBtn onClick={() => navigate("/Id")}>시작하기</S.StartBtn>
          <S.kakaoBtn>
            <img
              src={`${process.env.PUBLIC_URL}/images/kakao.svg`}
              alt="logo"
            />{" "}
            카카오톡으로 시작하기
          </S.kakaoBtn>
        </S.BtnGroup>
      </S.Box>
    </S.Container>
  );
}

export default StartPage;
