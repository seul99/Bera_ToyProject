import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../styled/styledId";
import { useEffect } from "react";
import axios from "axios";

const Id = () => {
  const navigate = useNavigate();
  const [isTaken, setIsTaken] = useState(null);

  const [id, setId] = useState("");
  const goPW = () => {
    if (id.length >= 8) {
      navigate(`/Password`, { state: { id } });
    }
  };

  const goBack = () => {
    navigate(`/Start`);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (id.length >= 3) {
        axios
          .get(`http://localhost:8000/user/check-username/?username=${id}`)
          .then((res) => {
            setIsTaken(res.data.is_taken);
          })
          .catch((err) => {
            console.error("중복 확인 실패", err);
          });
      } else {
        setIsTaken(null);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [id]);

  return (
    <I.Container>
      <I.Box>
        <I.TopBox>
          <I.BackBtn onClick={goBack}>
            <img
              src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
              alt="back"
              width="12px"
            />{" "}
          </I.BackBtn>
          <I.JoinText>회원가입</I.JoinText>
        </I.TopBox>
        <I.InputIdText>아이디를 입력해 주세요</I.InputIdText>
        <I.IdText> 아이디 </I.IdText>
        <I.InputId
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <I.CautionWrap>
          <I.Caution>* 숫자, 영문 조합 8자 이상</I.Caution>
          <I.RCaution isTaken={isTaken}>
            {id.length < 3
              ? ""
              : isTaken
                ? "이 아이디는 이미 사용 중입니다."
                : "사용 가능한 아이디입니다."}
          </I.RCaution>
        </I.CautionWrap>

        <I.ContinueBtn
          onClick={() => {
            if (id.length >= 8 && isTaken === false) {
              goPW();
            }
          }}
          active={id.length >= 8 && isTaken === false}
        >
          계속하기
        </I.ContinueBtn>
      </I.Box>
    </I.Container>
  );
};

export default Id;
