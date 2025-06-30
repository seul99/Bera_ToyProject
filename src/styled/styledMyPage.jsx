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
export const TopIcon = styled.div`
  position: absolute;
  top: 30px;
  left: 175px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 100px;
  width: 393px;
  height: 169px;
`;

export const ProfileBG = styled.div`
  position: absolute;
  left: 40px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileName = styled.div`
  position: absolute;
  left: 160px;
  top: 50px;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px; /* 122.222% */
`;

export const ProfileEdit = styled.div`
  position: absolute;
  top: 96px;
  left: 160px;
  width: 165px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 183.333% */
  display: flex;
  justify-content: center; // 가로 중앙
  align-items: center; // 세로 중앙
`;

export const Setting = styled.div`
  position: absolute;
  top: 301px;
  left: 40px;
  height: 115px;
  color: #000;
`;

export const SettingText = styled.div`
  color: #000;
  font-family: Roboto;
  font-style: normal;
  line-height: 22px; /* 110% */
  text-align: left;

  &.title {
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 15px;
  }

  &.sub {
    font-size: 15px;
    font-weight: 500;
    padding-bottom: 5px;
  }
`;
