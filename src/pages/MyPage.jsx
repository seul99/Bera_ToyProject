import React from "react";
import { useNavigate } from 'react-router-dom';
import * as M from "../styles/styledMyPage";

const MyPage = () => {
  const navigate = useNavigate();
 
  return (
    <M.Container>

        <M.TopIcon>
        <img
            src={`${process.env.PUBLIC_URL}/images/ProfileIcon.svg`}
            alt="ProfileIcon"
            width="44px"
        />             
        </M.TopIcon>

        <M.ProfileWrapper>
        <img
            src={`${process.env.PUBLIC_URL}/images/ProfileWrapper.svg`}
            alt="ProfileBackground"
        />  
        <M.ProfileName>빠릿빠릿 솜솜</M.ProfileName>
        <M.ProfileEdit>프로필 수정</M.ProfileEdit>
        <M.ProfileBG>
        <img
            src={`${process.env.PUBLIC_URL}/images/ProfileIcon.svg`}
            alt="ProfileIcon"
            width="44px"
        />  
        </M.ProfileBG>
        </M.ProfileWrapper>
        <M.Setting>
            <M.SettingText className="title">설정</M.SettingText>
            <M.SettingText className="sub">비밀번호 변경</M.SettingText>
            <M.SettingText className="sub">로그아웃 </M.SettingText>
            <M.SettingText className="sub">계정 탈퇴퇴 </M.SettingText>



        </M.Setting>
        
      <M.BottomBar>
            <M.BottomImg className="HomeBottom"> <img
                src={`${process.env.PUBLIC_URL}/images/HomeBottom.svg`}
                alt="HomeBottom"
                width="23px"
                height="height: 42px"/>
            </M.BottomImg>
            <M.BottomImg className="SearchBottom"> <img 
                src={`${process.env.PUBLIC_URL}/images/SearchBottom.svg`}
                alt="SearchBottom"
                width = "24px"
                height= "41px"/>
                </M.BottomImg>
            <M.BottomImg className="FavoriteBottom"> <img 
                src={`${process.env.PUBLIC_URL}/images/FavoriteBottom.svg`}
                alt="FavoriteBottom"
                width = "35px"
                height= "41px"/>
            </M.BottomImg>
            <M.BottomImg className="ProfileBottom"> <img 
                src={`${process.env.PUBLIC_URL}/images/ProfileBottom.svg`}
                alt="ProfileBottom"
                width = "26px"
                height= "41px"/>
            </M.BottomImg>
        </M.BottomBar>
    </M.Container>
  );
};
export default MyPage;
