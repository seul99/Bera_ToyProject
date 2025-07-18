import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../styled/styledSearch";
import NavigationBar from "../component/NavigationBar";

const SearchMain = ({ dataList }) => {
  const [isActive, setIsActive] = useState(false);
  const on_Click = () => {
    setIsActive((prev) => !prev);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(`/main`);
  };

  // 검색창 모달로 띄우기
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortText, setSortText] = useState("기본순");
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
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
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const filteredData = dataList.filter((item) => {
    const matchTitle = item.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory =
      selectedCategory === "전체" || item.category === selectedCategory;
    return matchTitle && matchCategory;
  });

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

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
            className={selectedCategory === "전체" ? "active" : ""}
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
            onClick={() => handleCategoryClick("한식")}
            className={selectedCategory === "한식" ? "active" : ""}
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
            onClick={() => handleCategoryClick("분식")}
            className={selectedCategory === "분식" ? "active" : ""}
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
            onClick={() => handleCategoryClick("일식")}
            className={selectedCategory === "일식" ? "active" : ""}
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
            onClick={() => handleCategoryClick("패스트푸드")}
            className={selectedCategory === "패스트푸드" ? "active" : ""}
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
            onClick={() => handleCategoryClick("샐러드")}
            className={selectedCategory === "샐러드" ? "active" : ""}
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
          <S.ModalBox>
            <S.ModalItem onClick={() => handleSelect("기본 순")}>
              기본 순
            </S.ModalItem>
            <S.ModalItem onClick={() => handleSelect("가까운 순")}>
              가까운 순
            </S.ModalItem>
            <S.ModalItem onClick={() => handleSelect("여유로운 순")}>
              여유로운 순
            </S.ModalItem>
            <S.ModalItem onClick={() => handleSelect("별점 높은 순")}>
              별점 높은 순
            </S.ModalItem>
          </S.ModalBox>
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
            <S.ShopInform
              key={e.shopId}
              onClick={() => navigate(`/ClickedSearch/${e.shopId}`)}
            >
              <S.LeftBox>
                <S.ShopImg style={{ marginRight: "16px" }}>
                  <span>가게</span>
                  <span>이미지</span>
                </S.ShopImg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <S.ShopName>{e.title}</S.ShopName>
                  <S.ReviewText>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Star.svg`}
                      alt="Star"
                      width="18px"
                    />{" "}
                    {e.review}
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
                    e.congestion === "여유"
                      ? "/images/statusStar/greensom.svg"
                      : e.congestion === "보통"
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
