import React from "react";
import * as I from "../styled/styledInputManager";
import { useNavigate } from "react-router-dom";

function InputManager() {
  const navigate = useNavigate();
  return (
    <I.Container>
      <I.Box>
        <I.InputBox>
          <I.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/SendCongetion/manager.svg`}
            />
            <span>사장님께서 직접 입력해주세요</span>
          </I.Title>
          <I.InputName>
            <I.Lable>가게이름</I.Lable>
            <input type="text" placeholder="가게를 입력해주세요" />
          </I.InputName>
          <I.InputName>
            <I.Lable>현재 손님 수</I.Lable>
            <input type="text" placeholder="0명 / 00명" />
          </I.InputName>

          <I.EndBtn onClick={() => navigate("/main")}>입력 완료</I.EndBtn>
        </I.InputBox>
      </I.Box>
    </I.Container>
  );
}

export default InputManager;
