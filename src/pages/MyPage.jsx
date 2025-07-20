import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styled/styledMyPage";
import NavigationBar from "../component/NavigationBar";
import axios from "axios";

const MyPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("닉네임");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:8000/rest-auth/user/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setNickname(res.data.first_name);  // '하연' 사용
      })
      .catch((err) => {
        console.error("유저 정보 요청 실패", err);
      });
  }, []);

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
          <M.ProfileName>{nickname}</M.ProfileName>
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
          <M.SettingText className="sub" onClick={() => navigate(`/`)}>
            로그아웃
          </M.SettingText>
          <M.SettingText className="sub">계정 탈퇴 </M.SettingText>
        </M.Setting>

        <NavigationBar />
      </M.Box>
    </M.Container>
  );
};
export default MyPage;
