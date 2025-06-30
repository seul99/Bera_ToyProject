import React from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/styledMyPage";
import NavigationBar from "../component/NavigationBar";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <M.Container>
      <M.Box>
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
          <M.SettingText className="sub">계정 탈퇴 </M.SettingText>
        </M.Setting>

        <NavigationBar />
      </M.Box>
    </M.Container>
  );
};
export default MyPage;
