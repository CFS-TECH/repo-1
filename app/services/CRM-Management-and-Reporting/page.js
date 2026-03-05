import CTA from "@/components/HomeSection/CTA";
import CRMBanner from "@/page/Services/ServicesDetails/CRM/CRMBanner";
import CRMIntegrations from "@/page/Services/ServicesDetails/CRM/CRMIntegrations";
import CRMReportingFlow from "@/page/Services/ServicesDetails/CRM/CRMReportingFlow";
import CRMServicesSection from "@/page/Services/ServicesDetails/CRM/CRMServicesSection";
import React from "react";

const page = () => {
  return (
    <div>
      <CRMBanner />
      <CRMServicesSection />
      <CRMIntegrations />
      <CRMReportingFlow />
      <CTA
        backgroundImage="/crm-cta.jpg"
        titlePart1="Stop Fighting Your"
        highlightedText="CRM Data"
        titlePart2="Start Closing More Deals"
        subtitle="Ganda aur bikhra hua CRM data aapki sales team ki speed slow kar deta hai. Humaari expert team aapke HubSpot, Salesforce ya Zoho ko clean, automate aur optimize karti hai taki aap har lead ka max ROI nikal sakein."
        primaryBtnText="Get a Free CRM Audit"
        secondaryBtnText="Sample Reports"
        onPrimaryClick="/contact"
        onSecondaryClick="/portfolio"
      />
    </div>
  );
};

export default page;
