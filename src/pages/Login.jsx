import React from "react";
import { useNavigate } from "react-router-dom";
import * as L from "../styled/styledLogin";
function Login(props) {
  const navigate = useNavigate();
  return (
    <L.Container>
      <L.Box>
        <L.Title>
          <img
            src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
            alt="logo"
            width="50.658"
            height="55"
          />
          <p>자리있솜</p>
        </L.Title>
        <L.LoginBox>
          <L.InputGroup>
            <L.Row>
              <label>아이디</label>
              <input type="text"></input>
            </L.Row>
            <L.Row>
              <label>비밀번호</label>
              <input type="text"></input>
            </L.Row>
          </L.InputGroup>
          <L.LoginBtn onClick={() => navigate("/main")}>로그인</L.LoginBtn>
          <L.CheckGroup>
            <div className="loginCheck">
              <img
                src={`${process.env.PUBLIC_URL}/images/checkbox.svg`}
                alt="checkbox"
              />
              <p>로그인 상태 유지</p>
            </div>
            <p className="find">아이디 / 비밀번호 찾기</p>
          </L.CheckGroup>
        </L.LoginBox>
        <L.Line>간편로그인</L.Line>
        <L.KakaoBtn>
          <img src={`${process.env.PUBLIC_URL}/images/kakao.svg`} alt="kakao" />
          <p>카카오톡으로 로그인</p>
        </L.KakaoBtn>
        <L.GotoSignup>
          <p>첫 방문이신가요?</p>
          <p className="goto">회원가입 바로가기</p>
        </L.GotoSignup>
      </L.Box>
    </L.Container>
  );
}
export default Login;
