import styled from "styled-components";
//스타일 속성
export const Container = styled.div``;
export const Box = styled.div`
  width: 345px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 1px solid #a5a5a5;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 13px auto;
`;
export const MainImg = styled.img``;
export const PonintImg = styled.img`
  margin-right: 10px;
`;
export const Text = styled.div`
  color: #000;
  text-align: right;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const SendBtn = styled.div`
  width: 40px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #d5d5d5;
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
