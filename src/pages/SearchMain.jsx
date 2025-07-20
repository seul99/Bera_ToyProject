import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styled/styledSearch";
import NavigationBar from "../component/NavigationBar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchMain = () => {
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState("");
  const [isActive, setIsActive] = useState(false);

  // 검색창 모달로 띄우기
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortText, setSortText] = useState("기본순");

  // 버튼 값 가져오기
  const location = useLocation();
  const [mainCategory] = useState(location.state?.category || "restaurant");
  const [subCategory, setSubCategory] = useState("전체");

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const getOrdering = () => {
    switch (sortText) {
      case "별점 높은 순":
        return "-rating";
      case "여유로운 순":
        return "population_ratio";
      //가까운 순 api 없음
      default:
        return ""; //기본 순
    }
  };

  const on_Click = () => {
    setIsActive((prev) => !prev);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/main`);
  };

  const handleSelect = (text) => {
    setSortText(text);
    setIsModalOpen(false);
  };

  //검색 기능
  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  //카테고리 필터링
  const filteredData = dataList.filter((item) => {
    const matchTitle = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      subCategory === "전체" || item.subcategory === subCategory;
    return matchTitle && matchCategory;
  });

  const handleCategoryClick = (category) => {
    setSubCategory(category);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      //음식점별 조회 api
      let url = `http://localhost:8000/stores/?category=${mainCategory}`;
      // 음식 카테고리별 조회
      if (mainCategory === "restaurant" && subCategory !== "전체") {
        url += `&subcategory=${subCategory}`;
      }
      // 즐겨찾기한 가게만 필터링
      if (isActive) {
        url += `&bookmarked=true`;
      }

      // 정렬
      const ordering = getOrdering();
      if (ordering) {
        url += `&ordering=${ordering}`;
      }

      try {
        const res = await axios.get(url, {
          headers: { Authorization: `Token ${token}` },
        });
        setDataList(res.data);
      } catch (err) {
        console.error("가게 데이터 불러오기 실패:", err);
        setError("데이터를 불러오지 못했습니다.");
      }
    };

    fetchData();
  }, [mainCategory, subCategory, isActive, sortText]);

  return (
    <S.Container>
      <S.Box>
        <S.SearchBox value={search} onChange={onChange} />
        <S.BackBtn onClick={goBack}>
          <img
            src={`${process.env.PUBLIC_URL}/images/SearchBackBtn.svg`}
            alt="BackBtn"
            width="30px"
          />
        </S.BackBtn>
        <S.LocationImg>
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/images/Location.svg`}
            alt="location"
            width="18px"
          />
        </S.LocationImg>
        <S.LocationText>성북구 하월곡동</S.LocationText>
        <S.TopBox>
          <S.IconBox
            onClick={() => handleCategoryClick("전체")}
            className={subCategory === "전체" ? "active" : ""}
          >
            <S.TopIcon className="Home">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/House.svg`}
                alt="Home"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="HomeTxt"> 홈 </S.TopIconText>
          </S.IconBox>

          <S.IconBox
            onClick={() => setSubCategory("korean")}
            className={subCategory === "korean" ? "active" : ""}
          >
            <S.TopIcon className="Kfood">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/KFood.svg`}
                alt="Kfood"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="KFoodTxt"> 한식 </S.TopIconText>
          </S.IconBox>

          <S.IconBox
            onClick={() => setSubCategory("snack")}
            className={subCategory === "snack" ? "active" : ""}
          >
            <S.TopIcon className="SnackFood">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/SnackFood.svg`}
                alt="SnackFood"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="SnackFoodTxt"> 분식 </S.TopIconText>
          </S.IconBox>

          <S.IconBox
            onClick={() => setSubCategory("japanese")}
            className={subCategory === "japanese" ? "active" : ""}
          >
            <S.TopIcon className="JFood">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/JFood.svg`}
                alt="JFood"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="JFoodTxt"> 일식 </S.TopIconText>
          </S.IconBox>

          <S.IconBox
            onClick={() => setSubCategory("fastfood")}
            className={subCategory === "fastfood" ? "active" : ""}
          >
            <S.TopIcon className="FastFood">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/FastFood.svg`}
                alt="FastFood"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="FastFoodTxt"> 패스트푸드 </S.TopIconText>
          </S.IconBox>

          <S.IconBox
            onClick={() => setSubCategory("salad")}
            className={subCategory === "salad" ? "active" : ""}
          >
            <S.TopIcon className="Salad">
              {" "}
              <img
                src={`${process.env.PUBLIC_URL}/images/Salad.svg`}
                alt="Salad"
                width="40px"
              />
            </S.TopIcon>
            <S.TopIconText className="SaladTxt"> 샐러드 </S.TopIconText>
          </S.IconBox>
        </S.TopBox>

        {/* 모달창으로 변경함 */}
        <S.BasicLayer onClick={toggleModal}>
          <img
            src={`${process.env.PUBLIC_URL}/images/Arrow.svg`}
            alt="Arrow"
            width="14px"
            style={{ marginRight: "4px" }}
          />
          {sortText}
        </S.BasicLayer>

        {isModalOpen && (
          <>
            {/* 블러 배경 레이어 */}
            <S.ModalOverlay onClick={toggleModal} />

            <S.ModalBox>
              <S.ModalItem onClick={() => handleSelect("기본 순")}>기본 순</S.ModalItem>
              <S.ModalItem onClick={() => handleSelect("가까운 순")}>가까운 순</S.ModalItem>
              <S.ModalItem onClick={() => handleSelect("여유로운 순")}>여유로운 순</S.ModalItem>
              <S.ModalItem onClick={() => handleSelect("별점 높은 순")}>별점 높은 순</S.ModalItem>
            </S.ModalBox>
          </>
        )}

        {/* 버튼 누르면 색 변경 */}
        <S.Favorite isActive={isActive} onClick={on_Click}>
          <img
            src={`${process.env.PUBLIC_URL}/images/Favorite.svg`}
            alt="Favorite"
            width="14px"
            style={{ marginRight: "4px" }}
          />
          즐겨찾기 가게
        </S.Favorite>
        <S.ShopWrapper>
          {filteredData.map((e) => (
            console.log("shop정보:", e),
            <S.ShopInform
              key={e.id}
              onClick={() => navigate(`/ClickedSearch/${e.id}`, { state: { shop: e } })}
            >
              <S.LeftBox>
                <S.ShopImg src={`http://localhost:8000/store_photo/${e.name}.png`} width="55px" alt={e.name} style={{ marginRight: "16px" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <S.ShopName>{e.name}</S.ShopName>
                  <S.ReviewText>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Star.svg`}
                      alt="Star"
                      width="18px"
                    />{" "}
                    {e.rating}
                  </S.ReviewText>
                  <S.DistanceText>
                    <img
                      style={{ paddingRight: "2px" }}
                      src={`${process.env.PUBLIC_URL}/images/Distance.svg`}
                      alt="Distance"
                      width="18px"
                    />
                    {e.distance} <S.Minute>{e.minute}</S.Minute>
                  </S.DistanceText>
                </div>
              </S.LeftBox>

              <S.CongestionImg>
                <img
                  src={
                    e.congestion === "low"
                      ? "/images/statusStar/greensom.svg"
                      : e.congestion === "medium"
                        ? "/images/statusStar/yellowsom.svg"
                        : "/images/statusStar/redsom.svg"
                  }
                  alt="CongestionImg"
                  width="42px"
                />
              </S.CongestionImg>
            </S.ShopInform>
          ))}
        </S.ShopWrapper>
        <NavigationBar />
      </S.Box>
    </S.Container>
  );
};

export default SearchMain;
