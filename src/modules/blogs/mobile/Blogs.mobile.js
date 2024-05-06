import React from "react";
import BlogPageStyle from "./Blogs.mobile.css";
import { FooterMobile, HeaderMobile } from "@/modules/home/mobile/Home.mobile.components";
import { BlogMobileSecondSection, BlogMobileTitle } from "./Blogs.mobile.components";

const  BlogsMobile = () => {
  return (
    <div className={`container`} style={{ gap: "2rem",padding:"0rem" }}>
      <HeaderMobile />
      <BlogMobileTitle />
      <BlogMobileSecondSection />
      <FooterMobile />
    </div>
  );
}
BlogsMobile.displayName= "BlogsMobile"

export default BlogsMobile;
