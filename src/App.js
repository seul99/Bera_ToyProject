import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Name from './pages/Name';
import Password from './pages/Password';
import Id from './pages/Id';
import PhoneNumber from './pages/PhoneNumber';
import SearchMain from './pages/SearchMain';
import ClickedSearch from './pages/ClickedSearch';
import MyPage from './pages/MyPage';

import data from "./data.json"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Id" />} />
        <Route path="/Id" element={<Id />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/Name" element={<Name />} />
        <Route path="/PhoneNumber" element={<PhoneNumber />} />
        <Route path="/SearchMain" element={<SearchMain dataList={data} />} />
        <Route path="/ClickedSearch/:shopId" element={<ClickedSearch dataList={data} />} />
        <Route path="/MyPage" element={<MyPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
