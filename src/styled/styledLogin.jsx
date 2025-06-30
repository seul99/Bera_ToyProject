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
  background: #fff;
`;
export const Title = styled.div`
  margin-top: 82px;
  p {
    color: #70b9be;
    -webkit-text-stroke-width: 0.7px;
    -webkit-text-stroke-color: #70b9be;
    font-family: "Gowun Dodum";
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const LoginBox = styled.div``;
export const InputGroup = styled.div`
  text-align: left;
  width: 333px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid #70b9be;
  background: #fff;
  margin: 0 30px;
`;
export const Row = styled.div`
  border-bottom: 2px solid #70b9be;
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 2px solid #70b9be;

  &:last-child {
    border-bottom: none;
  }

  label {
    width: 70px;
    color: #828282;
    font-size: 14px;
    font-weight: 500;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;
export const LoginBtn = styled.div`
  width: 333px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #70b9be;
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }
`;
export const CheckGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 333px;
  height: 50px;
  margin: 0 30px;
  color: #006d77;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .loginCheck {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      &:hover {
        opacity: 80%;
      }
    }
    p {
      margin-left: 2px;
    }
  }

  .find:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  display: flex;
  align-items: center;
  color: #006d77;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 155px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 2px solid #70b9be;
  }

  &::before {
    margin-left: 30px;
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
    margin-right: 30px;
  }
`;
export const KakaoBtn = styled.div`
  width: 333px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 23px;
  background: #fde500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 28px; 30px;
  img {
    width: 20px;
    height: 18px;
    flex-shrink: 0;
  }
  p {
    color: #000;
    font-family: "Noto Sans KR";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-left: 10px;
  }
    cursor:pointer;
`;
export const GotoSignup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #4b4b4b;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  .goto {
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
  }
  .goto:hover {
    opacity: 80%;
  }
`;
