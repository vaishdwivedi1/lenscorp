"use client"

import useDeviceSize from "@/hooks/useDeviceSize";
import HomeMobile from "@/modules/home/mobile/Home.mobile";
import HomeWeb from "@/modules/home/web/Home.web";
import Image from "next/image";

export default function Home() {
  const isMobile = useDeviceSize() === 'xs';
  return isMobile ? <HomeMobile /> : <HomeWeb />;
}
