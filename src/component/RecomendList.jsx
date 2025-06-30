import React from "react";
import Main from "../pages/Main";
import styled from "styled-components";

// 메인화면에서 즐겨찾기 가게 혼잡도를 불러옵니다.

const checkList = [
  {
    logo: process.env.PUBLIC_URL + "/images/Recomend/susi.svg",
    name: "스시쇼",
    distance: "도보 5분",
    state: "여유",
  },
];

//스타일 속성

const Box = styled.div`
  width: 345px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #f4f5f7;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px auto;
  gap: 20px;
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
    object-fit: cover;
    display: block;
  }
`;

const Pointimg = styled.img`
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  margin-right: 8px;
`;

const Group = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function RecomendList() {
  return (
    <div>
      {checkList.map((store, idx) => (
        <Box key={idx}>
          <Item>
            <img src={store.logo} alt="store" />
          </Item>
          <Item>{store.name}</Item>
          <Item>
            <Group>
              <Pointimg
                src={`${process.env.PUBLIC_URL}/images/Recomend/point.svg`}
              />
              {store.distance}
            </Group>
          </Item>
          <Item>
            <Group>
              <Pointimg
                src={`${process.env.PUBLIC_URL}/images/Recomend/point.svg`}
              />
              {store.state}
            </Group>
          </Item>
        </Box>
      ))}
    </div>
  );
}

export default RecomendList;
