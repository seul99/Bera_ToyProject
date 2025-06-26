import React from "react";
import Main from "../pages/Main";
import styled from "styled-components";

// 메인화면에서 즐겨찾기 가게 혼잡도를 불러옵니다.

const checkList = [
  {
    state: process.env.PUBLIC_URL + "/images/Congestion/yellowsom.svg",
    name: "제나키친",
    star: process.env.PUBLIC_URL + "/images/Congestion/mainstar.svg",
  },
  {
    state: process.env.PUBLIC_URL + "/images/Congestion/greensom.svg",
    name: "ANOTERH",
    star: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
  },
];

//스타일 속성

const Box = styled.div`
  width: 345px;
  height: 45px;
  border-radius: 12px;
  background: #f4f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px auto;
`;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 15px;
`;

const Item = styled.span`
  display: inline-block;
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */

  img {
    width: 27px;
    height: 27px;
    object-fit: cover;
    display: block;
  }
`;

const RightBox = styled.div`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CongestionList() {
  return (
    <div>
      {checkList.map((store, idx) => (
        <Box key={idx}>
          <LeftBox>
            <Item>
              <img src={store.state} alt="som" />
            </Item>
            <Item>{store.name}</Item>
          </LeftBox>
          <RightBox>
            <Item>
              <img src={store.star} alt="star" />
            </Item>
          </RightBox>
        </Box>
      ))}
    </div>
  );
}

export default CongestionList;
