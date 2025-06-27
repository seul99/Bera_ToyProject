import React from "react";
import { useNavigate } from 'react-router-dom';
import * as S from "../styles/styledSearch";

const Search = ({ dataList }) => {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(`/ClickedSearch`);
    }  
  return (
    <S.Container>
        <S.SearchBox/>
        <S.BackBtn onClick={goBack}>
            <img
            src={`${process.env.PUBLIC_URL}/images/SearchBackBtn.svg`}
            alt="BackBtn"
            width="30px"
            /> 
        </S.BackBtn>
        <S.LocationImg>  <img
          src={`${process.env.PUBLIC_URL}/images/Location.svg`}
          alt="location"
          width="18px"
          /> 
        </S.LocationImg>
        <S.LocationText>성북구 하월곡동</S.LocationText>
       
        <S.TopIcon className="Home">  <img
          src={`${process.env.PUBLIC_URL}/images/House.svg`}
          alt="Home"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="HomeTxt"> 홈 </S.TopIconText>

        <S.TopIcon className="Kfood">  <img
          src={`${process.env.PUBLIC_URL}/images/KFood.svg`}
          alt="Kfood"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="KFoodTxt"> 한식 </S.TopIconText>

        <S.TopIcon className="SnackFood">  <img
          src={`${process.env.PUBLIC_URL}/images/SnackFood.svg`}
          alt="SnackFood"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="SnackFoodTxt"> 분식 </S.TopIconText>

        <S.TopIcon className="JFood">  <img
          src={`${process.env.PUBLIC_URL}/images/JFood.svg`}
          alt="JFood"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="JFoodTxt"> 일식 </S.TopIconText>

        <S.TopIcon className="FastFood">  <img
          src={`${process.env.PUBLIC_URL}/images/FastFood.svg`}
          alt="FastFood"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="FastFoodTxt"> 패스트푸드 </S.TopIconText>

        <S.TopIcon className="Salad">  <img
          src={`${process.env.PUBLIC_URL}/images/Salad.svg`}
          alt="Salad"
          width="40px"
          /> 
        </S.TopIcon>
        <S.TopIconText className="SaladTxt"> 샐러드 </S.TopIconText>

        <S.SelectedBar></S.SelectedBar>
        <S.BasicLayer> 
            <img
                src={`${process.env.PUBLIC_URL}/images/Arrow.svg`}
                alt="Arrow"
                width="14px"
                style={{ marginRight: "4px" }} 

          /> 
        기본순</S.BasicLayer>
        <S.Favorite>
        <img
                src={`${process.env.PUBLIC_URL}/images/Favorite.svg`}
                alt="Favorite"
                width="14px"   
                style={{ marginRight: "4px" }} 

        /> 
         즐겨찾기 가게</S.Favorite>
      <S.ShopWrapper>
        {dataList.map((e) => (
                    <S.ShopInform
                      key={e.ShopId}
                      onClick={() => navigate(`/ClickedSearch/${e.shopId}`)}
                    >
                        <S.ShopImg  style={{ marginRight: "16px"}}>
                            <span>가게</span>
                            <span>이미지</span>
                        </S.ShopImg>
                         <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <S.ShopName>{e.title}</S.ShopName>
                        <S.ReviewText>
                        <img
                            src={`${process.env.PUBLIC_URL}/images/Star.svg`}
                            alt="Star"
                            width="18px"
                        /> {e.review}
                        </S.ReviewText>
                        <S.DistanceText><img style={{paddingRight: "2px"}}
                            src={`${process.env.PUBLIC_URL}/images/Distance.svg`}
                            alt="Distance"
                            width="18px"
                        />{e.distance} <S.Minute>{e.minute}</S.Minute></S.DistanceText>                       
                    </div>
                    </S.ShopInform>
                  ))}
      </S.ShopWrapper>
      <S.BottomBar>
                        <S.BottomImg className="HomeBottom"> <img
                            src={`${process.env.PUBLIC_URL}/images/HomeBottom.svg`}
                            alt="HomeBottom"
                            width="23px"
                            height="height: 42px"/>
                        </S.BottomImg>
                        <S.BottomImg className="SearchBottom"> <img 
                                            src={`${process.env.PUBLIC_URL}/images/SearchBottom.svg`}
                                            alt="SearchBottom"
                                            width = "24px"
                                            height= "41px"/>
                        </S.BottomImg>
                        <S.BottomImg className="FavoriteBottom"> <img 
                                            src={`${process.env.PUBLIC_URL}/images/FavoriteBottom.svg`}
                                            alt="FavoriteBottom"
                                            width = "35px"
                                            height= "41px"/>
                        </S.BottomImg>
                        <S.BottomImg className="ProfileBottom"> <img 
                                            src={`${process.env.PUBLIC_URL}/images/ProfileBottom.svg`}
                                            alt="ProfileBottom"
                                            width = "26px"
                                            height= "41px"/>
                        </S.BottomImg>

                    </S.BottomBar>
    </S.Container>
  );
};

export default Search;
