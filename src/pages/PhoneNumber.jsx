import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styled/styledPhoneNumber";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PhoneNumber = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { id, password, name } = location.state;
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:8000/user/", {
        username: id,
        password: password,
        first_name: name,
        phone: phoneNumber,
      });

      console.log("회원가입 성공", res.data);
      navigate("/main");
    } catch (error) {
      console.error("회원가입 실패", error.response?.data || error.message);

      if (error.response?.data) {
        alert(
          "회원가입 실패:\n" + JSON.stringify(error.response.data, null, 2)
        );
      } else {
        alert("회원가입 실패:\n" + error.message);
      }
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
        <P.ContinueBtn
          onClick={handleSignup}
          active={phoneNumber.length === 11}
        >
          회원가입 완료
        </P.ContinueBtn>
      </P.Box>
    </P.Container>
  );
};

export default PhoneNumber;
