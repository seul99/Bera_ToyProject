import React from "react";
import * as F from "../styled/styledFavorites";
import NavigationBar from "../component/NavigationBar";
import { useNavigate } from "react-router-dom";
const favoriteList = [
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg", // 별 이미지 경로
    name: "제나키친",
    people: "현재 8/30명",
    status: process.env.PUBLIC_URL + "/images/statusStar/yellowsom.svg",
  },
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
    name: "행복은간장밥",
    people: "현재 4/20명",
    status: process.env.PUBLIC_URL + "/images/statusStar/greensom.png",
  },
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
    name: "스시쇼",
    people: "현재 16/20명",
    status: process.env.PUBLIC_URL + "/images/statusStar/redsom.png",
  },
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
    name: "누들아한타이",
    people: "현재 24/50명",
    status: process.env.PUBLIC_URL + "/images/statusStar/yellowsom.svg",
  },
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
    name: "카페어바웃",
    people: "현재 4/20명",
    status: process.env.PUBLIC_URL + "/images/statusStar/greensom.png",
  },
  {
    starImg: process.env.PUBLIC_URL + "/images/Congestion/mainStar.svg",
    name: "ANOTHERH",
    people: "현재 4/20명",
    status: process.env.PUBLIC_URL + "/images/statusStar/greensom.png",
  },
];

function FavoritesPage(props) {
  const navigate = useNavigate();
  return (
    <F.Container>
      <F.Box>
        <F.Logo>
          <F.BackBtn
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            onClick={() => navigate("/main")}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
            width="44.211px"
            height="48px"
          />
        </F.Logo>
        <F.Title>내가 즐겨찾기한 가게</F.Title>

        <F.MainContent>
          {favoriteList.map((store, idx) => (
            <F.StoreBox key={idx}>
              <F.LeftBox>
                <F.StarImg src={store.starImg} alt="별" />
                <F.StoreName>{store.name}</F.StoreName>
              </F.LeftBox>

              <F.RightBox>
                <F.SubInfo>{store.people}</F.SubInfo>
                <F.StatusImg src={store.status} alt="상태" />
              </F.RightBox>
            </F.StoreBox>
          ))}
        </F.MainContent>
        <F.PlusBtn src={`${process.env.PUBLIC_URL}/images/plusBtn.png`} />
        <NavigationBar />
      </F.Box>
    </F.Container>
  );
}
export default FavoritesPage;
