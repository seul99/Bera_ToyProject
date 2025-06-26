import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import SignupSuccess from "./pages/SignupSuccess.jsx";
import Login from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import Serch from "./pages/Serch.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Profile from "./pages/profile.jsx";
import InputCust from "./component/InputCust.jsx";
import InputManager from "./component/InputManager.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupSuccess" element={<SignupSuccess />} />
        <Route path="/main" element={<Main />} />
        <Route path="/serch" element={<Serch />} />
        <Route path="/favorit" element={<FavoritesPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/inputcust" element={<InputCust />} />
        <Route path="/inputmanager" element={<InputManager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
