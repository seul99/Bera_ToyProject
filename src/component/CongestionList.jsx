import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 메인화면에서 즐겨찾기 가게 혼잡도를 불러옵니다.

//스타일 속성

const Box = styled.div`
  width: 345px;
  height: 45px;
  border-radius: 12px;
  background: #f4f5f7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 13px auto;
`;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-left: 15px;
`;

const Item = styled.span`
  display: inline-block;
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */

  img {
    width: 27px;
    height: 27px;
    object-fit: cover;
    display: block;
  }
`;

const RightBox = styled.div`
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function CongestionList() {
  const [favoriteList, setFavoriteList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavorites = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8000/bookmarks/", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setFavoriteList(res.data);
      } catch (err) {
        console.error("즐겨찾기 혼잡도 리스트 불러오기 실패:", err);
      }
    };

    fetchFavorites();
  }, []);
  return (
    <div>
      {favoriteList.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px", color: "#888" }}>
          즐겨찾는 가게가 없습니다.
        </p>
      ) : (
        favoriteList.map((item, idx) => (
          <Box
            key={idx}
            onClick={() =>
              navigate(`/ClickedSearch/${item.store.id}`, {
                state: { shop: item.store },
              })
            }
          >
            <LeftBox>
              <Item>
                <img
                  src={
                    item.store.congestion === "low"
                      ? process.env.PUBLIC_URL + "/images/Congestion/greensom.svg"
                      : item.store.congestion === "medium"
                        ? process.env.PUBLIC_URL + "/images/Congestion/yellowsom.svg"
                        : process.env.PUBLIC_URL + "/images/Congestion/redsom.svg"
                  }
                  alt="혼잡도"
                />
              </Item>
              <Item>{item.store.name}</Item>
            </LeftBox>
            <RightBox>
              <Item>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/Congestion/mainstar.svg"
                  }
                  alt="즐겨찾기"
                />
              </Item>
            </RightBox>
          </Box>
        ))
      )}
    </div>
  );
}


export default CongestionList;
