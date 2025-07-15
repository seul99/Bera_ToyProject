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
export const BackBtn = styled.div`
  position: absolute;
  top: 67px;
  left: 16px;
  cursor: pointer;
  :hover {
    opacity: 80%;
  }
`;
export const SearchBox = styled.input`
  position: absolute;
  top: 60px;
  left: 50px;
  width: 310px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1.5px solid #828282;
  background: #fff;
  outline: none;
`;

export const LocationText = styled.div`
  position: absolute;
  top: 115px;
  left: 40px;
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const LocationImg = styled.div`
  position: absolute;
  top: 115px;
  left: 20px;
  width: 18px;
  height: 18px;
`;

export const IconBox = styled.div`
  margin-right:20px;
  border-bottom: 1px solid transparent; 
  transition: border-bottom 0.2s ease;

  &.active{
  border-bottom: 1px solid black;
  }
`;
export const TopIcon = styled.button`
  width: 40px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border:none;
  background:transparent;
  display:flex;
  justify-content: center;
  align-items: center;

`;
export const TopIconText = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TopBox = styled.div`
  position:absolute;
  top:140px;
  left:25px;
  display:flex;
`;

// 정렬 모달창
export const BasicLayer = styled.div`
  position: absolute;
  top: 220px;
  left: 22px;
  width: 85px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #70b9be;
  background: #abd4d7;
  align-items: center;
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ModalBox = styled.div`
  position: absolute;
  width: 140px;
  height: 185px;
  background: white;
  border-radius: 10px;
  border: 1.5px solid #498d91;
  background: #fff;
  z-index: 10;
  top: 265px; /* 버튼 아래쪽에 나오도록 조정 */
  right: 230px; /* 필요에 따라 위치 조정 */
  padding-top: 10px;
  padding-bottom: 0;
`;

export const ModalItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    color: #70b9be;
  }
`;

export const Favorite = styled.div`
  position: absolute;
  top: 220px;
  left: 116px;
  width: 108px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 25px;
  border: 1px solid #70b9be;
  background: ${(props) => (props.isActive ? "#abd4d7" : "#fff")};
  color: #000;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const ShopImage = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f2f2f2;
`;
export const ShopWrapper = styled.div`
  position: absolute;
  top: 269px;
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
  justify-content: space-between;
  border-bottom: 0.7px solid #d9d9d9;
  cursor: pointer;
`;
export const LeftBox = styled.div`
  display: flex;
`;

export const CongestionImg = styled.div`
  display: flex;
`;
export const ShopImg = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #f2f2f2;
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
  display:flex;

`;

export const ReviewText = styled.div`
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display:flex;
`;
export const DistanceText = styled.div`
  display: flex; // 가로 정렬!
  align-items: center; // 세로  정렬
  color: #000;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Minute = styled.div`
  color: #006d77;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 3px;
`;

export const BottomBar = styled.div`
  position: absolute;
  top: 780px;
  width: 393px;
  height: 70px;
  flex-shrink: 0;
  border: 1px solid #f4f5f7;
  background: #fff;
`;
export const BottomImg = styled.div`
  position: absolute;
  top: 14px;
  width: 98px;
  height: 42.06px;

  &.HomeBottom {
    left: 50px;
  }

  &.SearchBottom {
    left: 133px;
  }

  &.FavoriteBottom {
    width: 35.018px;
    height: 41.09px;
    left: 217px;
  }

  &.ProfileBottom {
    width: 35.018px;
    height: 41.09px;
    left: 314px;
  }
`;
