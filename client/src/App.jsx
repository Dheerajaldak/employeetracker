import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import MapPage from "./MapPage/MapPage";
import RegisterPage from "./LoginPage/RegisterPage";
import Hrms from "./components/Hrms";
import VideoRoomButtons from "./VideoRooms/VideoRoomButtons";
import LandingPage from "./components/LandingPage";
import HeroSection from "./components/HeroSection";
import HomePage from "./components/HomePage";
import UnoloComponent from "./components/UnoloComponent";
import ShuffleHero from "./components/ShuffleHero";
import { TextParallaxContentExample } from "./components/TextParallaxContentExample";
import ChatBot from "react-chatbotify";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LandingPage />} />
       
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/test" element={<VideoRoomButtons />} />
        <Route path="/dash" element={<Hrms />} />
        {/* landing cont  */}
         <Route path="/home-option-1" element={<HeroSection />} />
        <Route path="/home-option-2" element={<HomePage />} />
        <Route path="/about" element={<ShuffleHero />} />
        <Route path="/features" element={<UnoloComponent />} />
        <Route path="/content" element={<TextParallaxContentExample />} />
         <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
};

export default App;
