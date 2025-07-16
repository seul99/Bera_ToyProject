import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #f0f0f0f0;
`;

export const Box = styled.div`
  box-sizing: border-box;
  width: 393px;
  height: 852px;
  background: #fff;
  padding-top: 75px;
  padding-left: 31px;
`;
export const TopBox = styled.div`
  display: flex;
`;
export const JoinText = styled.div`
  color: #006d77;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
export const BackBtn = styled.div`
  width: 31px;
  height: 75px;
  flex-shrink: 0;
  margin-right: 93px;
  margin-bottom: 50px;
  cursor: pointer;
`;

export const InputIdText = styled.div`
  color: #70b9be;
  font-family: Roboto;
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const IdText = styled.div`
  color: #70b9be;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 43px;
`;
export const InputId = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid #70b9be;
  padding-top: 5px;
  width: 331px;
  height: 35px;
  flex-shrink: 0;
  font-size: 18px;
  font-weight: bold;
`;
export const Caution = styled.div`
  color: #a5a5a5;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 30px;
`;
export const ContinueBtn = styled.button`
  align-items: center;
  display: flex;
  width: 331px;
  height: 54px;
  padding: 16px 146px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: ${(props) => (props.active ? "#70b9be" : "#D9D9D9")};
  border: none;
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 21.6px */
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    opacity: 80%;
  }
`;
