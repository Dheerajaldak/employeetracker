import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import UnoloComponent from "./UnoloComponent";
import ShuffleHero from "./ShuffleHero";
import { TextParallaxContentExample } from "./TextParallaxContentExample";
import { BouncyCardsFeatures } from "./BouncyCardsFeatures";
import HomePage from "./HomePage";
import Footer from "./Footer";
import ChatBot from "react-chatbotify";
import config from "../chatbot/config";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import Pricing from "./Pricing";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ShuffleHero />
      <UnoloComponent />
      <HeroSection />
      <BouncyCardsFeatures />
      <Pricing/>
      <TextParallaxContentExample />
      <HomePage />
      <Footer />
      <ChatBot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </>
  );
};

export default LandingPage;
