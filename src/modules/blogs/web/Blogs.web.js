import React from "react";
import BlogPageStyle from "@/modules/blogs/web/Blogs.web.css";
import { FooterWeb, HeaderWeb } from "@/modules/home/web/Home.web.components";
import { blogBackground } from "@/Constants.js/Images";
import { BlogSecondSection, BlogTitle } from "./Blogs.web.components";

function BlogsWeb() {
  return (
    <div>
      <HeaderWeb />
      <div className={`container`} >
        <BlogTitle />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
        <BlogSecondSection />
      </div>

      <FooterWeb />
    </div>
  );
}

export default BlogsWeb;
