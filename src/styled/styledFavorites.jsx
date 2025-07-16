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
export const TopBox = styled.div`
  margin: 30px 30px;
  display: flex;
  justify-content: left;
  align-items: center;
`;
export const BackBtn = styled.img`
  cursor: pointer;
  margin-right: 109px;
`;

export const Logo = styled.img`
  margin-left: 25px;
`;
export const Title = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin-left: 35px;
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
export const StoreBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 30px;
  border-bottom: 0.7px solid #d9d9d9;
`;
export const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const StarImg = styled.img``;
export const StoreName = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px; /* 93.75% */
`;
export const RightBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const SubInfo = styled.div`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px; /* 93.75% */
`;
export const StatusImg = styled.img``;
export const PlusBtn = styled.img`
  position: absolute;
  bottom: 100px;
  right: 24px;
  cursor: pointer;
`;
