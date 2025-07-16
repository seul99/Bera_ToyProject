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
  position: fixed;
  top: 0px;
  left: 0px;
`;
export const Box = styled.div`
  width: 393px;
  height: 852px;
  background: #fff;
  position: relative;
  background: rgba(0, 0, 0, 0.3);
`;
export const InputBox = styled.div`
  width: 100%;
  height: 460px;
  flex-shrink: 0;
  border-radius: 25px 25px 0px 0px;
  background: #fff;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px auto;
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const InputName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin: 20px auto;
  input {
    border: none;
    outline: none;
    width: 220px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #d9d9d9;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
  }
`;
export const Lable = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 78px;
  margin: 10px 0;
`;
export const ChoiceGruop = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;
export const BoxGroup = styled.div``;
export const ChoiceBox = styled.div`
  width: 74px;
  height: 28px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #828282;
  background: #fff;
  margin: 5px auto;
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #006d77;
    color: #006d77;
  }
  &.selected {
    border: 1px solid #006d77;
    color: #006d77;
  }
`;
export const EndBtn = styled.div`
  width: 326px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #e2f4f5;
  color: #000;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 35px;
  cursor: pointer;
`;
