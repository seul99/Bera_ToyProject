import React, { useEffect, useState } from "react";
import * as F from "../styled/styledFavorites";
import NavigationBar from "../component/NavigationBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FavoritesPage(props) {
  const navigate = useNavigate();

  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8000/bookmarks/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setFavoriteList(res.data); // 이건 [{id, store:{...}}, ...] 구조야
      } catch (err) {
        console.error("즐겨찾기 불러오기 실패:", err);
      }
    };

    fetchFavorites();
  }, []);


  return (
    <F.Container>
      <F.Box>
        <F.TopBox>
          <F.BackBtn
            src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
            onClick={() => navigate("/main")}
          />
          <F.Logo
            src={`${process.env.PUBLIC_URL}/images/startLogo.svg`}
            width="44.211px"
            height="48px"
          />
        </F.TopBox>
        <F.Title>내가 즐겨찾기한 가게</F.Title>

        <F.MainContent>
          {favoriteList.map((item, idx) => (
            <F.StoreBox key={idx} onClick={() => navigate(`/ClickedSearch/${item.store.id}`, { state: { shop: item.store } })}>
              <F.LeftBox>
                <F.StarImg src={`${process.env.PUBLIC_URL}/images/Congestion/mainStar.svg`} alt="별" />
                <F.StoreName>{item.store.name}</F.StoreName>
              </F.LeftBox>

              <F.RightBox>
                <F.SubInfo>
                  현재 {item.store.current_customers}/{item.store.max_customers}명
                </F.SubInfo>
                <F.StatusImg
                  src={
                    item.store.congestion === "low"
                      ? `${process.env.PUBLIC_URL}/images/statusStar/greensom.svg`
                      : item.store.congestion === "medium"
                        ? `${process.env.PUBLIC_URL}/images/statusStar/yellowsom.svg`
                        : `${process.env.PUBLIC_URL}/images/statusStar/redsom.svg`
                  }
                  alt="상태"
                />
              </F.RightBox>
            </F.StoreBox>
          ))}
        </F.MainContent>
        <F.PlusBtn src={`${process.env.PUBLIC_URL}/images/plusBtn.png`} />
        <NavigationBar />
      </F.Box>
    </F.Container >
  );
}
export default FavoritesPage;
