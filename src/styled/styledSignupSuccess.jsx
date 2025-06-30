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
  background: #e8f1f2;
`;
export const Title = styled.div`
  text-align: left;
  color: #006d77;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 110px;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;

  img {
    margin-right: 33px;
    cursor: pointer;
    &:hover {
      opacity: 80%;
    }
  }
`;
export const Logo = styled.div`
  margin-top: 144px;
  p {
    color: #006d77;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
