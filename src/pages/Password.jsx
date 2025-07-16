import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styled/styledPassword";

const Password = () => {
  const navigate = useNavigate();

  const [pw, setPw] = useState("");
  const [conPw, setconPw] = useState("");

  const goName = () => {
    if (pw.length >= 8 && pw === conPw) {
      navigate(`/Name`);
    }
  };

  const goBack = () => {
    navigate(`/Id`);
  };
  return (
    <P.Container>
      <P.Box>
        <P.TopBox>
          <P.BackBtn onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
              alt="back"
              width="12px"
            />{" "}
          </P.BackBtn>
          <P.JoinText>회원가입</P.JoinText>
        </P.TopBox>
        <P.InputPwText>비밀번호를 입력해 주세요</P.InputPwText>
        <P.PwText> 비밀번호 입력 </P.PwText>
        <P.InputPw
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <P.Caution>* 8자리 이상 입력해 주세요.</P.Caution>
        <P.PwText className="reText"> 비밀번호 확인 </P.PwText>
        <P.InputPw
          type="password"
          className="reInput"
          value={conPw}
          onChange={(e) => setconPw(e.target.value)}
        />
        <P.Caution className="reCaution">*다시 한번 입력해 주세요.</P.Caution>
        <P.ContinueBtn onClick={goName} active={pw.length >= 8 && pw === conPw}>
          {" "}
          계속하기{" "}
        </P.ContinueBtn>
      </P.Box>
    </P.Container>
  );
};
export default Password;
