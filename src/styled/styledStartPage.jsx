import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #f0f0f0f0;
`;
export const Box = styled.div`
  width: 393px;
  height: 852px;
  background: #ffff;
`;
export const Title = styled.div`
  color: #70b9be;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 115px;
  text-align: left;
  margin-left: 30px;
`;
export const Logo = styled.div`
  margin-top: 120px;

  p {
    color: #006d77;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 150% */
  }
`;
export const BtnGroup = styled.div`
  margin-top: 130px;
`;
export const StartBtn = styled.div`
  display: flex;
  width: 327px;
  margin: 0 23px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #70b9be;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
export const kakaoBtn = styled.div`
  width: 327px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #fde500;
  margin: 0 23px;
  padding: 16px 10px;
  color: #000;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 20px;
  cursor: pointer;
`;
