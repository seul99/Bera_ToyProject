import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styled/styledPhoneNumber";

const PhoneNumber = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("");
  const goMain = () => {
    if (phoneNumber.length === 11) {
      navigate(`/main`);
    }
  };

  const goBack = () => {
    navigate(`/Name`);
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
            />
          </P.BackBtn>
          <P.JoinText>회원가입</P.JoinText>
        </P.TopBox>
        <P.InputPnText>전화번호를 입력해 주세요</P.InputPnText>
        <P.PnText> 전화번호 </P.PnText>
        <P.InputPn
          type="tell"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="01012340000"
        />
        <P.ContinueBtn onClick={goMain} active={phoneNumber.length === 11}>
          회원가입 완료
        </P.ContinueBtn>
      </P.Box>
    </P.Container>
  );
};

export default PhoneNumber;
