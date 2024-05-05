"use client"

import useDeviceSize from "@/hooks/useDeviceSize";
import BlogsWeb from "@/modules/blogs/web/Blogs.web";
import BlogsMobile from "@/modules/blogs/mobile/Blogs.mobile";
import Image from "next/image";

export default function Blogs() {
  const isMobile = useDeviceSize() === 'xs';
  return isMobile ? <BlogsMobile /> : <BlogsWeb />;
}