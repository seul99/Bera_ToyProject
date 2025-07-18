# 멋사 토이 프로젝트
베라팀 자리있솜

# 슬기
- 즐겨찾기, 모달창, css 디테일, 네비게이션바, css 통합
### api 연결 현황

**SearchMain**
⦁	음식점  전체조회 <br>
⦁	카페/디저트 전체 조회 <br>
⦁	음식점 카테고리별 조회 (한식, 양식, 중식, 일식) <br>
⦁	즐겨찾기한 가게만 필터링 <br>
⦁	가게 기본순 정렬 <br>
⦁	가게 별점 높은 순 정렬 <br>
⦁	가게 여유로운 순 정렬 <br>

 <br>
main 에서 버튼마다 음식점, 카페 데이터를 전송하게만듬 <br>
SearchMain 에서 userLocation 선언 <br>
 <br>
 
카페조회 api 명세서에 있는 주소 수정함 <br>
SearchMain 에 한식,중식 이런거 싹다 api 명세서에 적혀있는대로 수정완료 <br>
```
<S.IconBox
onClick={() => setSubCategory("korean")}
className={subCategory === "korean" ? "active" : ""}
>
```
이런식으로 수정함 <br>

정렬 코드 값 가져와 백엔드 값으로 변경 후 api 연결 <br>
```
  const getOrderingParam = () => {
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
```
useEffect() 안에 선언 <br>
```
// 정렬
const ordering = getOrdering();
if (ordering) {
url += `&ordering=${ordering}`;
}
```
 <br>

**id-Password-Name-PhoneNumber** 완료버튼 누르면 main 으로 이동 <br>
⦁	회원가입 <br>
⦁	중복확인 <br>
```
navigate(`/Password`, { state: { id } });
```
이런식으로 페이지 이동시 입력값 같이 넘겨주기 <br>
 <br>
pw 페이지부터 <br>
```
  const location = useLocation();
  const id = location.state?.id;
  const goName = () => {
    if (pw.length >= 8 && pw === conPw) {
      navigate(`/Name`, { state: { id, password } });
    }
  };
```
값으로 PhoneNumber 까지 인자 전달 후 main 에서 완료 <br>
 <br>
**Login** <br>
⦁	로그인 <br>
⦁	소셜로그인  <br>
api 연결 완료

---


