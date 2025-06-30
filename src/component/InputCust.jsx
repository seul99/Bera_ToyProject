import React from "react";
import * as I from "../styled/styledInputCust";
import { useNavigate } from "react-router-dom";

function InputCust() {
  const navigate = useNavigate();
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
              <I.ChoiceBox>1명</I.ChoiceBox>
              <I.ChoiceBox>2명</I.ChoiceBox>
              <I.ChoiceBox>3명</I.ChoiceBox>
              <I.ChoiceBox>4명</I.ChoiceBox>
              <I.ChoiceBox>5명</I.ChoiceBox>
              <I.ChoiceBox>6명</I.ChoiceBox>
              <I.ChoiceBox>직접입력</I.ChoiceBox>
            </I.BoxGroup>
            <I.BoxGroup>
              <I.ChoiceBox>바로 입장</I.ChoiceBox>
              <I.ChoiceBox>10분 이내</I.ChoiceBox>
              <I.ChoiceBox>20분 이내</I.ChoiceBox>
              <I.ChoiceBox>30분 이내</I.ChoiceBox>
              <I.ChoiceBox>1시간 이내</I.ChoiceBox>
              <I.ChoiceBox>2시간 이내</I.ChoiceBox>
              <I.ChoiceBox>2시간 이상</I.ChoiceBox>
            </I.BoxGroup>
            <I.BoxGroup>
              <I.ChoiceBox>여유</I.ChoiceBox>
              <I.ChoiceBox>보통</I.ChoiceBox>
              <I.ChoiceBox>혼잡</I.ChoiceBox>
            </I.BoxGroup>
          </I.ChoiceGruop>
          <I.EndBtn onClick={() => navigate("/main")}>입력 완료</I.EndBtn>
        </I.InputBox>
      </I.Box>
    </I.Container>
  );
}

export default InputCust;
