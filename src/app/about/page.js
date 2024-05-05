"use client"

import useDeviceSize from "@/hooks/useDeviceSize";
import AboutMobile from "@/modules/about/mobile/About.mobile";
import AboutWeb from "@/modules/about/web/About.web";
import Image from "next/image";

export default function Home() {
  const isMobile = useDeviceSize() === 'xs';
  return isMobile ? <AboutMobile /> : <AboutWeb />;
}