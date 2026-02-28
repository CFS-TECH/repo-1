import React from "react";
import BannerSectionWebsiteDevelopment from "./BannerSectionWebsiteDevelopment";
import ProcessBar from "./ProcessBar";
import WhyChooseOurWebsiteDevelopment from "./WhyChooseOurWebsiteDevelopment ";
import FeaturedOfWebsite from "./FeaturedOfWebsite";
import TypeOfWebsite from "./TypeOfWebsite";
import CTA from "@/components/HomeSection/CTA";

const WebsiteDevelopment = () => {
  return <div>
    <BannerSectionWebsiteDevelopment/>
    <ProcessBar/>
    <WhyChooseOurWebsiteDevelopment/>
    <FeaturedOfWebsite/>
    <TypeOfWebsite/>
    <CTA/>
  </div>;
};

export default WebsiteDevelopment;
