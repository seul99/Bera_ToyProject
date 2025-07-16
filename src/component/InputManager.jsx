import React, { useState } from "react";
import * as I from "../styled/styledInputManager";
import { useNavigate } from "react-router-dom";

function InputManager({ onClose, setInputData }) {
  const [name, setName] = useState("");
  const [current, setCurrent] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = () => {
    setInputData({
      name: name || null,
      current: current || null,
      total: total || null,
    });
    onClose();
  };
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
            <I.InputWrap>
              <input
                type="text"
                placeholder="가게를 입력해주세요."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </I.InputWrap>
          </I.InputName>
          <I.InputNum>
            <I.Lable>현재 손님 수</I.Lable>
            <I.InputWrap>
              <input
                className="numInRight"
                type="number"
                placeholder="0"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
              />
              <span>명 &nbsp;&nbsp; / </span>
              <input
                className="numInLeft"
                type="number"
                placeholder="00"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
              <span>명</span>
            </I.InputWrap>
          </I.InputNum>

          <I.EndBtn onClick={handleSubmit}>입력 완료</I.EndBtn>
        </I.InputBox>
      </I.Box>
    </I.Container>
  );
}

export default InputManager;
