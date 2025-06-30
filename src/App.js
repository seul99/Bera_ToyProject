import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Name from "./pages/Name";
import Password from "./pages/Password";
import Id from "./pages/Id";
import PhoneNumber from "./pages/PhoneNumber";
import SearchMain from "./pages/SearchMain";
import ClickedSearch from "./pages/ClickedSearch";
import MyPage from "./pages/MyPage";
// 슬 추가
import LandingPage from "./pages/LandingPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import SignupSuccess from "./pages/SignupSuccess.jsx";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Profile from "./pages/profile.jsx";
import InputCust from "./component/InputCust.jsx";
import InputManager from "./component/InputManager.jsx";

import data from "./data.json";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/Id" />} /> */}
        <Route path="/Id" element={<Id />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Name" element={<Name />} />
        <Route path="/PhoneNumber" element={<PhoneNumber />} />
        <Route path="/SearchMain" element={<SearchMain dataList={data} />} />
        <Route
          path="/ClickedSearch/:shopId"
          element={<ClickedSearch dataList={data} />}
        />
        <Route path="/MyPage" element={<MyPage />} />
        {/* 슬 추가 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupSuccess" element={<SignupSuccess />} />
        <Route path="/main" element={<Main />} />
        <Route path="/favorit" element={<FavoritesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inputcust" element={<InputCust />} />
        <Route path="/inputmanager" element={<InputManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
