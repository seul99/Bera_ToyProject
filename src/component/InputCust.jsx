import React, { useState } from "react";
import * as I from "../styled/styledInputCust";
import { useNavigate } from "react-router-dom";

function InputCust({ onClose, setInputData }) {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [selectedWait, setSelectedWait] = useState(null);
  const [selectedCongestion, setSelectedCongestion] = useState(null);

  const handleSubmit = () => {
    setInputData({
      person: selectedPerson,
      waitTime: selectedWait,
      congestion: selectedCongestion,
    });
    onClose();
  };

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

  return (
    <I.Container>
      <I.Box>
        <I.InputBox>
          <I.Title>
            <img
              src={`${process.env.PUBLIC_URL}/images/SendCongetion/customer.svg`}
            />
            <span>손님께서 직접 입력해주세요</span>
          </I.Title>
          <I.InputName>
            <I.Lable>가게이름</I.Lable>
            <input type="text" placeholder="가게를 입력해주세요" />
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
