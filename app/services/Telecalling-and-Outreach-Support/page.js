import CTA from "@/components/HomeSection/CTA";
import TelecallingBanner from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingBanner";
import TelecallingProcessSection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingProcessSection";
import TelecallingQASection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingQASection";
import TelecallingServicesSection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingServicesSection";
import React from "react";

const page = () => {
  return (
    <div>
      <TelecallingBanner />
      <TelecallingServicesSection />
      <TelecallingQASection />
      <TelecallingProcessSection />
      <CTA
        backgroundImage="/bulk-hiring-cta.jpg"
        titlePart1="Ready to Fill Your"
        highlightedText="Sales Pipeline?"
        titlePart2="Let's Talk."
        subtitle="Stop wasting your closers' time on cold calling. Let our expert SDRs generate qualified leads and book appointments for you."
        primaryBtnText="Get a Custom Calling Plan"
        secondaryBtnText="Know More"
        onPrimaryClick="/contact-us"
        onSecondaryClick="/about-us"
      />
    </div>
  );
};

export default page;
