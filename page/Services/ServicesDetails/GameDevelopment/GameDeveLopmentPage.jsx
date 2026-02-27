"Use client";
import React from "react";
import GameBanner from "./GameBanner";
import ProcessBar from "./ProcessBar";
import WhyChooseOurGameDevelopment from "./WhyChooseOurGameDevelopment";
import WhatWeDo from "./WhatWeDo";
import CTA from "@/components/HomeSection/CTA";

const GameDeveLopmentPage = () => {
  return (
    <div>
      <GameBanner />
      <ProcessBar/>
      <WhyChooseOurGameDevelopment/>
      <WhatWeDo/>
      <CTA/>
    </div>
  );
};

export default GameDeveLopmentPage;
