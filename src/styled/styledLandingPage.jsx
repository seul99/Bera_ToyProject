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
`;

export const Box = styled.div`
  width: 393px;
  height: 852px;
  background: #70b9be;
  text-align: center;
  flex-shrink: 0;
  align-itmes: center;
  flex-direction: column;
  margin-top: 25px;
  text-align: center;
  box-sizing: border-box;
`;
export const Logo = styled.div`
  width: 177.763px;
  height: 193px;
  flex-shrink: 0;
  aspect-ratio: 177.76/193;
  margin: 0 auto;
  margin-top: 200px;
`;
export const Title = styled.div`
  color: #fff;
  -webkit-text-stroke-width: 0.7px;
  -webkit-text-stroke-color: #fff;
  font-family: "Gowun Dodum";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 15px;
`;
export const StartBtn = styled.div`
  display: flex;
  width: 327px;
  padding: 16px 10px;
  margin: 0 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: #006d77;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */
  margin-top: 130px;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
export const GotoLogin = styled.div`
  display: flex;
  width: 327px;
  padding: 16px 10px;
  margin: 0 23px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 135%; /* 18.9px */
  }
`;
export const LoginBtn = styled.div`
  color: #006d77;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
