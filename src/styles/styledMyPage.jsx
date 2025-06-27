import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 852px;
  background: #FFF;
  align-items: center;
  display: flex;
  flex-direction: column;
  border: 2px solid #000;  
`;
export const BottomBar = styled.div`
    position:absolute;
    top:780px;
    width: 393px;
    height: 70px;
    flex-shrink: 0;
    border: 1px solid #F4F5F7;
    background: #FFF;
`;
export const BottomImg = styled.div`
    position: absolute;
    top:14px;
    width: 98px;
    height: 42.06px;

    &.HomeBottom{
    left:50px;
    }

    &.SearchBottom{
    left:133px;
    }

    &.FavoriteBottom{
    width: 35.018px;
    height: 41.09px;
    left:217px;
    }

    &.ProfileBottom{
    width: 35.018px;
    height: 41.09px;
    left:314px;
    }
`;

export const TopIcon = styled.div`
    position: absolute;
    top:30px;
    left:175px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;    
    position: absolute;
    top:100px;
    width: 393px;
    height: 169px;
`;

export const ProfileBG = styled.div`
    position: absolute;
    left: 40px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    backGround: #FFF;
    display: flex;
    justify-content: center;   
    align-items: center;       
`;

export const ProfileName = styled.div`
    position: absolute;
    left:160px;
    top:50px;
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
    background: #FFF;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 183.333% */
      display: flex;
    justify-content: center;   // 가로 중앙
    align-items: center;       // 세로 중앙
`;

export const Setting = styled.div`
    position:absolute;
    top:301px;
    left:40px;
    height:115px;
    color: #000;
`;

export const SettingText = styled.div`
    color: #000;
    font-family: Roboto;
    font-style: normal;
    line-height: 22px; /* 110% */

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
`
