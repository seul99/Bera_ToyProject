import React, { useState } from "react";
import * as I from "../styled/styledInputManager";
import axios from "axios";

function InputManager({ onClose, setInputData, storeId }) {
  const [name, setName] = useState("");
  const [current, setCurrent] = useState("");
  const [total, setTotal] = useState("");

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!current || !total) {
      alert("현재 인원과 최대 인원을 모두 입력해주세요.");
      return;
    }

    try {
      // 1. 가게 이름으로 ID 조회
      const res = await axios.get(`http://localhost:8000/stores/?name=${encodeURIComponent(name)}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      const matchedStore = res.data?.[0];
      if (!matchedStore) {
        alert("일치하는 가게가 없습니다.");
        return;
      }

      const storeId = matchedStore.id;

      // 2. 혼잡도 POST 요청
      await axios.post(
        `http://localhost:8000/stores/${storeId}/update_congestion/`,
        {
          current_customers: parseInt(current),
          max_customers: parseInt(total),
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      alert("혼잡도 등록 완료!");
      setInputData({ name, current, total });
      onClose();
    } catch (error) {
      console.error("혼잡도 등록 실패:", error.response);
      alert(
        error.response?.data?.detail ||
        JSON.stringify(error.response?.data) ||
        "서버 오류가 발생했습니다."
      );
    }
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
