import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styled/styledSignupSuccess";

function SignupSuccess(props) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <p>
            회원가입이
            <br />
            완료되었습니다.
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/next.svg`}
            alt="next"
            onClick={() => navigate("/login")}
          />
        </S.Title>
        <S.Logo>
          <img
            src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
            alt="logo"
          />
          <p>자리 걱정, 이젠 솜솜이가 해줄게!</p>
        </S.Logo>
      </S.Box>
    </S.Container>
  );
}

export default SignupSuccess;
