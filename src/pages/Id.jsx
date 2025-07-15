import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styled/styledId";

const Id = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const goPW = () => {
    if (id.length >= 8) {

      navigate(`/Password`);
    }
  };

  const goBack = () => {
    navigate(`/Start`);
  };


  return (
    <I.Container>
      <I.Box>
        <I.TopBox>
          <I.BackBtn onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
              alt="back"
              width="12px"
            />{" "}
          </I.BackBtn>
          <I.JoinText>회원가입</I.JoinText>
        </I.TopBox>
        <I.InputIdText>아이디를 입력해 주세요</I.InputIdText>
        <I.IdText> 아이디 </I.IdText>
        <I.InputId type="text" value={id} onChange={(e) => setId(e.target.value)}
        />
        <I.Caution>*숫자, 영문 조합 8자 이상</I.Caution>
        <I.ContinueBtn onClick={goPW} active={id.length >= 8}
        > 계속하기 </I.ContinueBtn>
      </I.Box>
    </I.Container>
  );
};

export default Id;
