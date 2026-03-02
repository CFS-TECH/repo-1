import React from "react";
import BulkHiringBanner from "./BulkHiringBanner";
import BulkHiringServices from "./BulkHiringServices";
import WhyChooseBulkHiring from "./WhyChooseBulkHiring";

const BulkHiringServicesPage = () => {
  return (
    <div>
      <BulkHiringBanner />
      <BulkHiringServices/>
      <WhyChooseBulkHiring/>
    </div>
  );
};

export default BulkHiringServicesPage;
