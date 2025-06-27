import React from "react";
import { useNavigate } from 'react-router-dom';
import * as P from "../styles/styledPassword";

const Password = () => {
 const navigate = useNavigate();
  const goName = () => {
    navigate(`/Name`);
  };
  const goBack = () => {
    navigate(`/Id`);
  };
 return (
     <P.Container>
       <P.JoinText>
          회원가입
       </P.JoinText> 
        <P.BackBtn onClick={goBack}>
                 <img
                   src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
                   alt="back"
                   width="12px"
                 /> </P.BackBtn>
       <P.InputPwText>
         비밀번호를 입력해 주세요
         </P.InputPwText>   
       <P.PwText> 비밀번호 입력 </P.PwText>
       <P.InputPw type = "text"/>    
       <P.Caution>*8자리 이상 입력해 주세요.</P.Caution>
       <P.PwText className= "reText"> 비밀번호 확인 </P.PwText>
       <P.InputPw type = "text" className = "reInput"/>    
       <P.Caution className = "reCaution">*다시 한번 입력해 주세요요.</P.Caution>
       
       <P.ContinueBtn onClick={goName}> 계속하기 </P.ContinueBtn>
     </P.Container>
   );
 };
export default Password;

