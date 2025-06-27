import React from "react";
import { useNavigate } from 'react-router-dom';
import * as I from "../styles/styledId";

const Id = () => {
  const navigate = useNavigate();
  const goPW = () => {
    navigate(`/Password`);
  };
  return (
    <I.Container>
      <I.JoinText>
         회원가입
      </I.JoinText> 
      <I.BackBtn>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="12px"
          /> </I.BackBtn>
      <I.InputIdText>
        아이디를 입력해 주세요
        </I.InputIdText>   
      <I.IdText> 아이디디 </I.IdText>
      <I.InputId type = "text"/>    
      <I.Caution>*숫자, 영문 조합 8자 이상</I.Caution>
      <I.ContinueBtn onClick={goPW}> 계속하기 </I.ContinueBtn>
    </I.Container>
  );
};

export default Id;
