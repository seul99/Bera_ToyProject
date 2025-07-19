import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CS from "../styled/styledClickedSearch";
import { useLocation } from "react-router-dom";
import NavigationBar from "../component/NavigationBar";
import axios from "axios";

function BarColor(congestion) {
  if (congestion === "low")
    return "green"
  else if (congestion === "medium")
    return "yellow"
  else if (congestion === "high")
    return "red"
}


const ClickedSearch = () => {

  const location = useLocation();
  const Shop = location.state?.shop;

  // 즐겨찾기 버튼
  const [isLiked, setIsLiked] = useState(false);

  const clickLike = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        `http://localhost:8000/stores/${Shop.id}/bookmark/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      if (res.status === 200 || res.status === 201) {
        setIsLiked((prev) => !prev);
      }
    } catch (err) {
      console.error("즐겨찾기 토글 실패:", err);
      alert("즐겨찾기 작업 중 에러 발생.");
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/SearchMain`);
  };

  useEffect(() => {
    if (Shop) {
      setIsLiked(Shop.is_bookmarked);
    }
  }, [Shop]);

  return (
    <CS.Container>
      <CS.Box>
        <CS.TopBox>
          <CS.BackBtn onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/SearchBackBtn.svg`}
              alt="BackBtn"
              width="30px"
            />
          </CS.BackBtn>
          <CS.LikeBtn onClick={clickLike}>
            <img
              src={
                isLiked
                  ? `${process.env.PUBLIC_URL}/images/LikeBtn/Star_on.svg`
                  : `${process.env.PUBLIC_URL}/images/LikeBtn/Star_off.svg`
              }
              alt="LikeBtn"
              width="30px"
            />
          </CS.LikeBtn>
        </CS.TopBox>

        <CS.ShopImg src={`http://localhost:8000/store_photo/${Shop.name}.png`} />
        <CS.ShopName>{Shop.name}</CS.ShopName>

        <CS.InformWrapper className="review">
          <CS.InformImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/Star.svg`}
              alt="Star"
              width="25px"
            />
          </CS.InformImg>
          <CS.InformText> {Shop.rating}</CS.InformText>
        </CS.InformWrapper>

        <CS.InformWrapper className="distance">
          <CS.InformImg>
            <img
              src={`${process.env.PUBLIC_URL}/images/Distance.svg`}
              alt="distance"
              width="25px"
            />
          </CS.InformImg>
          <CS.InformText> {Shop.distance}</CS.InformText>
        </CS.InformWrapper>

        <CS.InformWrapper className="minute">
          <CS.InformText className="minute"> {Shop.minute}</CS.InformText>
        </CS.InformWrapper>

        <CS.TitleText className="congestion">현재 혼잡도</CS.TitleText>
        <CS.CongestionBar className={BarColor(Shop.congestion)}>

          <CS.CongestionImg>
            {Shop.congestion === "low" ? (
              <img
                src={`${process.env.PUBLIC_URL}/images/Green.svg`}
                alt="CongestionImg"
                width="42px"
              />
            ) : Shop.congestion === "medium" ? (
              <img
                src={`${process.env.PUBLIC_URL}/images/Yellow.svg`}
                alt="CongestionImg"
                width="42px"
              />
            ) : (
              <img
                src={`${process.env.PUBLIC_URL}/images/Red.svg`}
                alt="CongestionImg"
                width="42px"
              />
            )}
          </CS.CongestionImg>
          <CS.Congestion className={BarColor(Shop.congestion)}>
            {Shop.congestion === "low" ? (
              <div>여유</div>
            ) : Shop.congestion === "medium" ? (
              <div>보통</div>
            ) : (
              <div>혼잡</div>
            )}
          </CS.Congestion>
          <CS.Population>{Shop.population}</CS.Population>
        </CS.CongestionBar>

        <CS.TitleText className="shopInform">가게 정보</CS.TitleText>
        <CS.TextWrapper className="shopInform">
          <CS.SubText>
            <img
              src={`${process.env.PUBLIC_URL}/images/Clock.svg`}
              alt="Clock"
              width="26px"
              style={{ padding: "3px" }}
            />
            <div>{Shop.open_time}</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/Dot.svg`}
              alt="Dot"
              width="5px"
              style={{ padding: "3px" }}
            />
            <div>{Shop.close_time}</div>
            <img
              src={`${process.env.PUBLIC_URL}/images/DownArrow.svg`}
              alt="DownArrow"
              width="22px"
              style={{ padding: "3px" }}
            />
          </CS.SubText>
        </CS.TextWrapper>

        <CS.TitleText className="menu">메뉴</CS.TitleText>
        <CS.TextWrapper className="menu">
          <CS.SubText>네이버 지도</CS.SubText>
          <CS.SubText className="link" onClick={() => window.open(Shop.naver_url, "_blank")}>바로가기</CS.SubText>
        </CS.TextWrapper>

        <CS.TitleText className="visit">방문 기록</CS.TitleText>
        <CS.VisitWrapper>
          <img
            src={`${process.env.PUBLIC_URL}/images/Visitor.svg`}
            alt="Visitor"
            width="22px"
            style={{ padding: "11px" }}
          />
          <CS.VisitText>4명 방문</CS.VisitText>
          <img
            src={`${process.env.PUBLIC_URL}/images/Dot.svg`}
            alt="Dot"
            width="5px"
            style={{ padding: "10px" }}
          />
          <CS.VisitText>바로입장</CS.VisitText>
          <img
            src={`${process.env.PUBLIC_URL}/images/Dot.svg`}
            alt="Dot"
            width="5px"
            style={{ padding: "10px" }}
          />
          <CS.VisitText>혼잡도 보통</CS.VisitText>
          <CS.VisitTime>10분전</CS.VisitTime>
        </CS.VisitWrapper>

        <NavigationBar />
      </CS.Box>
    </CS.Container>
  );
};
export default ClickedSearch;
