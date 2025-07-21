import React, { useState } from "react";
import * as I from "../styled/styledInputCust";
import axios from "axios";

function InputCust({ onClose, setInputData }) {
  const [storeName, setStoreName] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedWait, setSelectedWait] = useState(null);
  const [selectedCongestion, setSelectedCongestion] = useState(null);

  const personOptions = ["1명", "2명", "3명", "4명", "5명", "6명", "직접입력"];
  const waitOptions = [
    "바로 입장",
    "10분 이내",
    "20분 이내",
    "30분 이내",
    "1시간 이내",
    "2시간 이내",
    "2시간 이상",
  ];
  const congestionOptions = ["여유", "보통", "혼잡"];

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (
      !storeName ||
      selectedPerson === null ||
      selectedWait === null ||
      selectedCongestion === null
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    try {
      // 1. 가게 ID 조회
      const res = await axios.get(
        `http://localhost:8000/stores/?name=${encodeURIComponent(storeName)}`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      // 정확히 이름 일치하는 가게 찾기
      const matchedStore = res.data.find(store => store.name === storeName);

      if (!matchedStore) {
        alert("일치하는 가게가 없습니다.");
        return;
      }

      const storeId = matchedStore.id;

      // 2. 방문 기록 등록
      await axios.post(
        `http://localhost:8000/stores/${storeId}/visit/`,
        {
          visit_count: selectedPerson + 1,
          wait_time: waitOptions[selectedWait],
          congestion: congestionOptions[selectedCongestion],
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      alert("방문 기록 등록 완료!");
      setInputData({
        name: storeName,
        person: personOptions[selectedPerson],
        waitTime: waitOptions[selectedWait],
        congestion: congestionOptions[selectedCongestion],
      });
      onClose();
    } catch (err) {
      console.error("방문 기록 등록 실패:", err.response);
      alert(
        err.response?.data?.detail ||
        JSON.stringify(err.response?.data) ||
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
              src={`${process.env.PUBLIC_URL}/images/SendCongetion/customer.svg`}
              alt="customer"
            />
            <span>손님께서 직접 입력해주세요</span>
          </I.Title>
          <I.InputName>
            <I.Lable>가게이름</I.Lable>
            <input
              type="text"
              placeholder="가게를 입력해주세요"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </I.InputName>
          <I.BoxTitle>
            <I.Lable>방문자 수</I.Lable>
            <I.Lable>대기 시간</I.Lable>
            <I.Lable>혼잡도 정보</I.Lable>
          </I.BoxTitle>
          <I.ChoiceGruop>
            <I.BoxGroup>
              {personOptions.map((option, index) => (
                <I.ChoiceBox
                  key={index}
                  className={selectedPerson === index ? "selected" : ""}
                  onClick={() => setSelectedPerson(index)}
                >
                  {option}
                </I.ChoiceBox>
              ))}
            </I.BoxGroup>
            <I.BoxGroup>
              {waitOptions.map((option, index) => (
                <I.ChoiceBox
                  key={index}
                  className={selectedWait === index ? "selected" : ""}
                  onClick={() => setSelectedWait(index)}
                >
                  {option}
                </I.ChoiceBox>
              ))}
            </I.BoxGroup>
            <I.BoxGroup>
              {congestionOptions.map((option, index) => (
                <I.ChoiceBox
                  key={index}
                  className={selectedCongestion === index ? "selected" : ""}
                  onClick={() => setSelectedCongestion(index)}
                >
                  {option}
                </I.ChoiceBox>
              ))}
            </I.BoxGroup>
          </I.ChoiceGruop>
          <I.EndBtn onClick={handleSubmit}>입력 완료</I.EndBtn>
        </I.InputBox>
      </I.Box>
    </I.Container>
  );
}

export default InputCust;
