import React from "react";
import DigitalMarketingBanner from "./DigitalMarketingBanner";
import DigitalMarketingTimeLine from "./DigitalMarketingTimeLine";
import { Divider } from "@mui/material";
import DigitalMarketingDetails from "./DigitalMarketingDetails";
import DigitalMarketingCTA from "./DigitalMarketingCTA";

const DigitalMarketingPage = () => {
  return (
    <div className="">
      <DigitalMarketingBanner />
      <Divider />
      {/* <DigitalMarketingTimeLine /> */}
      <DigitalMarketingDetails/>
      <DigitalMarketingCTA/>
    </div>
  );
};

export default DigitalMarketingPage;
