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
export const ShopImg = styled.div`
    position: absolute;
    top: 101px;
    width: 397px;
    height: 245px;
    background: #111;
`;
export const ShopName = styled.div`
    position: absolute;
    left:30px;
    top: 366px;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px; /* 100% */
`;

export const InformWrapper = styled.div`
    position: absolute;
    width:70px;
    height:25px;
    display: flex;
    justify-content: center;   // 가로 중앙
    align-items: center;       // 세로 중앙

    &.review{
    left:20px;
    top: 400px;
    }

    &.distance{
        left:118px;
        top:400px;
    }

    &.minute{
        left:192px;
        top:400px;
    }
`;
export const InformImg = styled.div`
    height:25px;
    width: 25px;
    padding-right: 4px;
`;
export const InformText = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &.minute{
    color: #006D77;
    font-weight: 600;
    }

`;


export const TitleText = styled.div`
    position:absolute;
    color: #000;
    height:22px;
    text-align: center;
    font-family: Roboto;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    left: 30px;

    &.congestion{
    top: 445px;
    }

    &.shopInform{
        top:545px;
    }

    &.menu{
        top:610px;
    }
        
     &.visit{
        top:675px;
    }
`;
export const TextWrapper = styled.div`
    
    position: absolute;
    width:200px;
    height:22px;
    display: flex;
    align-items: center;       // 세로 중앙
    left: 30px;

    &.shopInform{
        top:565px;
    }

    &.menu{
        top:625px;
    }
`;
export const SubText = styled.div`
    position: relative;
    top:7px;
    left: 1px;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    align-items: center;       // 세로 중앙

    &.link{
    color: #70B9BE;
    font-weight: 700;
    line-height: 22px;
    padding-left: 5px;
    border-bottom: 1px solid #70B9BE;
    }
`;

export const CongestionBar = styled.div`
    position: absolute;
    top: 470px;
    left:30px;
    width: 343px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #E8FCD9;
     display: flex;
    align-items: center;       // 세로 중앙

`;

export const CongestionImg = styled.div`
    position: relative;
    left:20px;  
`;

export const CongestionInform = styled.div`
    position: relative;
    left:35px;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    line-height: 22px;
`;

export const Congestion = styled.div`
 position: relative;
    left:40px;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
     color: #4DC794;
    font-weight: 600;
`;
export const Population = styled.div`
    position:relative;
    left:135px;
    color: #000;
    text-align: center;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 122.222% */
`;

export const VisitWrapper = styled.div`
    position: absolute;
    top: 710px;
    width: 343px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid #A5A5A5;
    background: #FFF;
    display: flex;
    align-items: center;       // 세로 중앙
`;

export const VisitText = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

`;


export const VisitTime = styled.div`
    position: relative;
    left:50px;
    color: #F24253;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: normal;
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

export const BackBtn = styled.div`
    position: absolute;
    top:67px;
    left:16px
`;