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
  width: 393px;
  height: 852px;
  background: #fff;
  position: relative;
  overflow: hidden;
`;
export const MainContent = styled.div`
  height: calc(852px - 70px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;
export const SearchBar = styled.div`
  width: 347px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f4f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 24px;
  margin-top: 11px;
  margin-bottom: 20px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: none;
    margin-left: 15px;
    color: #a5a5a5;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  img {
    margin-right: 20px;
  }
`;
export const Label = styled.div`
  color: #006d77;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin-bottom: 8px;
`;
export const ContentBox = styled.div`
  margin: 17px 24px;
`;

export const GoBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  button {
    width: 160px;
    height: 110px;
    flex-shrink: 0;
    border-radius: 25px;
    background: linear-gradient(180deg, #70b9be 0%, #70b9be 100%);
    border: none;
    color: #fff;
    text-align: center;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 110% */
    cursor: pointer;
  }
  button:hover {
    opacity: 80%;
  }
`;

export const MoreBtn = styled.div`
  color: #006d77;
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 183.333% */
  cursor: pointer;
  text-align: right;
  margin-right: 8px;

  &:hover {
    opacity: 80%;
  }
`;
export const SendCongestion = styled.div`
  width: 393px;
  min-height: 169px;
  flex-shrink: 0;
  background: linear-gradient(180deg, #e1f3f4 19.81%, #fff9c9 109.76%);
  padding-bottom: 13px;
  ${Label} {
    padding-top: 15px;
  }
`;
