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
export const BackBtn = styled.div`
    position: absolute;
    top:67px;
    left:16px
`;
export const SearchBox = styled.input`
    position: absolute;
    top:63px;
    left:50px;
    width: 310px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 1px solid #828282;
    background: #FFF;
`;

export const LocationText = styled.div`
    position: absolute;
    top:115px;
    left:40px;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

export const LocationImg = styled.div`
    position: absolute;
    top:115px;
    left:20px;
    width: 18px;
    height: 18px;
`;
export const TopIcon = styled.div`
  position: absolute;
  top: 141px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  aspect-ratio: 1/1;

     &.Home{
        left:20px;
    }

    &.Kfood{
        left:85px;
    }

    &.SnackFood{
        left:150px;
    }

    &.JFood{
        left: 215px;
    }
    
    &.FastFood{
        left: 280px;
    }
        
    &.Salad{
        left: 345px;
    }
`;
export const TopIconText = styled.div`
    position:absolute;
    top:185px;
    color: #000;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &.HomeTxt{
        left:35px;
    }

    &.KFoodTxt{
        left:95px;
    }

    &.SnackFoodTxt{
        left:160px;
    }
    &.JFoodTxt{
        left:225px;
    }
        
    &.FastFoodTxt{
        left: 277px;
    }

    &.SaladTxt{
        left: 351px;
    }
`;
export const SelectedBar = styled.div`
    position: absolute;
    top:200px;
    left:20px;
    width: 40px;
    height: 1px;
    background: #000;
`;
export const BasicLayer = styled.div`
    position: absolute;
    top:220px;
    left: 22px;
    width: 80px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 1px solid #70B9BE;
    background: #ABD4D7;
     align-items: center;
     color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
    display: flex;
    justify-content: center;   // 가로 중앙
    align-items: center;       // 세로 중앙
`;
export const Favorite = styled.div`
    position: absolute;
    top:220px;
    left: 116px;
    width: 108px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 25px;
    border: 1px solid #70B9BE;
    background: #FFF;
    color: #000;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;   // 가로 중앙
    align-items: center;       // 세로 중앙
`;
export const ShopImage = styled.div`
    width: 55px;
    height: 55px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #F2F2F2;
`;
export const ShopWrapper = styled.div`
    position:absolute;    
    top:269px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 512px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ShopInform = styled.div`
  width: 326px;
  height: 65px;
  flex-shrink: 0;
  border: none;
  background: #fff;
  color: #000;
  display: flex;        
  padding: 10px;
`;
export const ShopImg = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #F2F2F2;
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px; /* ← 여백 줘서 위로 쏠림 방지 */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 세로 정렬이므로 column으로! */
`;

export const ShopName = styled.div`
   
    color: #000;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
export const ReviewText = styled.div`
    color: #000;
    font-family: Roboto;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const DistanceText = styled.div`
  display: flex;             // 가로 정렬!
  align-items: center;       // 세로  정렬
color: #000;
font-family: Roboto;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

export const Minute = styled.div`
color: #006D77;
font-family: Roboto;
font-size: 12px;
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