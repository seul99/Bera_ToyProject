import React from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styled/styledName";

const Name = () => {
  const navigate = useNavigate();
  const goPN = () => {
    navigate(`/PhoneNumber`);
  };
  const goBack = () => {
    navigate(`/Password`);
  };
  return (
    <W.Container>
      <W.Box>
        <W.TopBox>
          <W.BackBtn onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
              alt="back"
              width="12px"
            />{" "}
          </W.BackBtn>
          <W.JoinText>회원가입</W.JoinText>
        </W.TopBox>
        <W.InputIdText>이름을 입력해 주세요</W.InputIdText>
        <W.IdText> 이름 </W.IdText>
        <W.InputId type="text" />
        <W.ContinueBtn onClick={goPN}> 계속하기 </W.ContinueBtn>
      </W.Box>
    </W.Container>
  );
};

export default Name;
