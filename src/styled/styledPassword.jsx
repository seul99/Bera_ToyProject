import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #f0f0f0f0;
  position: relative;
`;

export const Box = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const JoinText = styled.div`
  position: relative;
  top: 86px;
  margin: 0 auto;
  width: 59px;
  height: 22px;
  background: #fff;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #006d77;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */
`;
export const InputPwText = styled.div`
  position: absolute;
  top: 168px;
  left: 30px;
  width: 250px;
  height: 28px;
  color: #70b9be;
  font-family: Roboto;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const PwText = styled.div`
  position: absolute;
  top: 241px;
  left: 30px;
  color: #70b9be;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &.reText {
    position: absoulte;
    top: 337px;
    left: 30px;
  }
`;
export const InputPw = styled.input`
  position: absolute;
  top: 270px;
  left: 30px;
  outline: none;
  border: none;
  border-bottom: 2px solid #70b9be;
  padding-top: 5px;
  width: 331px;
  height: 35px;
  flex-shrink: 0;
  font-size: 20px;
  font-weight: bold;

  &.reInput {
    position: absoulte;
    top: 360px;
    left: 30px;
  }
`;
export const Caution = styled.div`
  position: absolute;
  top: 315px;
  left: 30px;
  width: 120px;
  height: 14px;
  color: #a5a5a5;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 13.5px */

  &.reCaution {
    position: absolute;
    top: 410px;
    left: 30px;
  }
`;
export const ContinueBtn = styled.button`
  position: absolute;
  align-items: center;
  top: 450px;
  left: 30px;
  display: flex;
  width: 331px;
  height: 54px;
  padding: 16px 146px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #70b9be;
  border: none;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */
  white-space: nowrap;
  &:hover {
    opacity: 80%;
  }
`;

export const BackBtn = styled.div`
  position: absolute;
  top: 65px;
  left: 30px;
  width: 31px;
  height: 75px;
  flex-shrink: 0;
  margin-top: 28px;
  margin-left: 26px;
`;
