import React from "react";
import MainLogo from "../component/MainLogo";
import * as M from "../styled/styledMain";
import NavigationBar from "../component/NavigationBar";
import CongestionList from "../component/CongestionList";
import RecomendList from "../component/RecomendList";
import SendCongestionList from "../component/SendCongestionList";
import { useNavigate } from "react-router-dom";
function Main(props) {
  const navigate = useNavigate();
  return (
    <M.Container>
      <M.Box>
        <M.MainContent>
          <MainLogo />
          <M.SearchBar>
            <input
              type="text"
              placeholder="먹고싶은 메뉴나 가게를 찾아보세요"
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/searchIcon.svg`}
              alt="검색"
            />
          </M.SearchBar>
          <M.ContentBox>
            <M.Label>가게 리스트</M.Label>
            <M.GoBtnGroup>
              <button type="button" onClick={() => navigate("/SearchMain")}>
                음식점
              </button>
              <button type="button" onClick={() => navigate("/SearchMain")}>
                카페/디저트
              </button>
            </M.GoBtnGroup>
          </M.ContentBox>
          <M.ContentBox>
            <M.Label>즐겨찾기 가게 혼잡도</M.Label>
            {/* ConGestionList 에서 하나씩 불러오기 */}
            <CongestionList />

            <M.MoreBtn onClick={() => navigate("/favorit")}>더보기</M.MoreBtn>
          </M.ContentBox>
          <M.ContentBox>
            <M.Label>오늘의 추천가게</M.Label>
            <RecomendList />
          </M.ContentBox>
          <M.SendCongestion>
            <M.ContentBox>
              <M.Label>방문한 가게의 혼잡도를 알려주세요!</M.Label>
              <SendCongestionList />
            </M.ContentBox>
          </M.SendCongestion>
        </M.MainContent>
        <NavigationBar />
      </M.Box>
    </M.Container>
  );
}

export default Main;
