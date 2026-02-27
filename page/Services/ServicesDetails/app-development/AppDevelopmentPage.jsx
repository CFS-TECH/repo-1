import React from "react";
import { FaApple, FaAndroid, FaDesktop, FaCloud } from "react-icons/fa6";
import SoftwareHero from "./SoftwareHero";
import SoftwarePlatformsTimeline from "./SoftwarePlatformsTimeline";
import SoftwareTechGrid from "./SoftwareTechGrid";

const AppDevelopmentPage = () => {
  const platforms = [
    {
      title: "iOS Development",
      icon: <FaApple size={32} />,
      description:
        "Custom, high-performance applications tailored for the Apple ecosystem, ensuring a flawless user experience on iPhones and iPads.",
      highlight: "Swift & React Native",
    },
    {
      title: "Android Development",
      icon: <FaAndroid size={32} />,
      description:
        "Scalable and secure Android applications designed to reach a massive global audience across all Android devices.",
      highlight: "Kotlin & React Native",
    },
    {
      title: "Desktop Software",
      icon: <FaDesktop size={32} />,
      description:
        "Robust desktop applications for Windows, macOS, and Linux that streamline complex enterprise workflows and operations.",
      highlight: "Electron & C++",
    },
    {
      title: "Cloud & Web Apps",
      icon: <FaCloud size={32} />,
      description:
        "Powerful, browser-based SaaS platforms and enterprise portals backed by secure, scalable cloud infrastructure.",
      highlight: "MERN Stack & AWS",
    },
  ];

  return (
    <>
      <SoftwareHero />
      <SoftwarePlatformsTimeline/>
      <SoftwareTechGrid/>
    </>
  );
};

export default AppDevelopmentPage;
