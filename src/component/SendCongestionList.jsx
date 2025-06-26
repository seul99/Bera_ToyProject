import React, { useState } from "react";
import Main from "../pages/Main";
import * as S from "../styled/styledSendCongestionList";
import { useNavigate } from "react-router-dom";

function SendCongestionList() {
  const navigate = useNavigate();
  return (
    <S.Container>
      {/* 손님 입력받기 */}
      <S.Box>
        <S.MainImg
          src={`${process.env.PUBLIC_URL}/images/SendCongetion/customer.svg`}
        />
        <S.Text>방문자 수</S.Text>
        <S.Text>
          <S.PonintImg
            src={`${process.env.PUBLIC_URL}/images/Recomend/point.svg`}
          />
          대기시간
        </S.Text>
        <S.Text>
          <S.PonintImg
            src={`${process.env.PUBLIC_URL}/images/Recomend/point.svg`}
          />
          혼잡도 정보
        </S.Text>
        <S.SendBtn onClick={() => navigate("/inputcust")}>입력</S.SendBtn>
      </S.Box>

      {/* 사장님 입력받기 */}
      <S.Box>
        <S.MainImg
          src={`${process.env.PUBLIC_URL}/images/SendCongetion/manager.svg`}
        />
        <S.Text>사장님 직접 입력</S.Text>
        <S.Text>
          <S.PonintImg
            src={`${process.env.PUBLIC_URL}/images/Recomend/point.svg`}
          />
          ___ 명
        </S.Text>
        <S.Text>/ ___명</S.Text>
        <S.SendBtn onClick={() => navigate("/inputmanager")}>입력</S.SendBtn>
      </S.Box>
    </S.Container>
  );
}

export default SendCongestionList;
