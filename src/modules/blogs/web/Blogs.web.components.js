import { blogFirstSectionImage, forward, pen, time } from "@/Constants.js/Images";
import React from "react";

export const BlogTitle = React.memo(() => {
  return (
    <div className="BlogSec_aboutContainer__haMPF">
      <div className="BlogSec_headingCont__i8adB">
        <h1 className="BlogSec_heading__JHCZt">Blogs</h1>
        <div className="BlogSec_underline__HUhgz"></div>
      </div>
      <div className="BlogSec_aboutContent__I_YH9">
        <div id="heroImg" className="BlogSec_imgCont__S_EUb">
          <img alt="about" fetchPriority="high" width="400" height="400" decoding="async" data-nimg="1" className="BlogSec_black_white__CzCsH" src={blogFirstSectionImage} />
        </div>
        <div className="BlogSec_section2Content__SSvaZ">
          <h3 className="BlogSec_section2Txt__6u51y">Drafted In-House</h3>
          <p className="BlogSec_section2par__nCnTL">While working on the most challenging problems, our team also finds out time to work on the blog pieces so that the ground-breaking work that we do is made public knowledge.</p>
        </div>
      </div>
    </div>
  );
});

export const BlogSecondSection = React.memo(() => {
  return (
    <div className="BlogSec_cardSty__e08E9">
      <div class="BlogPageStructure_main_container_b__w6Oyn">
        <div class="BlogPageStructure_sub_container_b__hsfyh">
          <img
            alt="gen"
            loading="lazy"
            width="430"
            height="430"
            decoding="async"
            data-nimg="1"
            class="BlogPageStructure_blogImg__7_JQ6"
          src={'https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730896%2Flenscorp-website%2Ftrustworthy_mllw6b.jpg&w=640&q=75'}
          />
        </div>
        <div class="BlogPageStructure_sub_container_r__W892j">
          <div class="BlogPageStructure_cat__yQu36">Artificial Intelligence </div>
          <div class="BlogPageStructure_title_b__U_Rzz">Trustworthy AI</div>
          <div class="BlogPageStructure_card_b__ykldn">
            <img alt="gen" loading="lazy" width="512" height="512" decoding="async" data-nimg="1" class="BlogPageStructure_per__XCjO1" src={pen} />
            <h6>Kriti Singh</h6>
            <img alt="gen" loading="lazy" width="512" height="512" decoding="async" data-nimg="1" class="BlogPageStructure_per__XCjO1" src={time} />
            <h6>May 21, 2021</h6>
          </div>
          <p>One of the challenges with the pursuit of AI is the incongruity between the fantasy concep t of artificial intelligence and the real-wor ld, practical applications of AI. In movies and s cience fiction novels, AI systems are sketched...</p>
          <br />
          <div>
            <a href="/blogs/Trustworthy AI">
              <button class="Buttons_readButtonBlog__yJfUQ">
                Read More
                <img
                  alt="gen"
                  loading="lazy"
                  width="512"
                  height="512"
                  decoding="async"
                  data-nimg="1"
                  class="BlogPageStructure_per__XCjO1"
                 src={forward}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
