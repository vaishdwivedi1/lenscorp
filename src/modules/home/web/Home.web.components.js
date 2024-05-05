import { aboutSection, faqs, heroSection, homeBannerImage, homeBannerUnderline, homeVideo, logo, mapImage, ourClients, serviceContents, whyUs } from "@/Constants.js/Images";
import Link from "next/link";
import React, { useState } from "react";
import HomePageStyle from "./Home.web.css";
import { NavLink } from "react-router-dom";
import { useRouter } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";

export const HeaderWeb = React.memo(() => {
  const router = useRouter();
  const { pathname } = router;
  const isActive = (path) => pathname == path;

  return (
    <div className={` header`}>
      <div className={` headerContents`}>
        <img src={logo} />

        <div className="menuList">
          <Link target="_blank " className={isActive("https://makemyweb.ai/en") ? "active" : ""} href="https://makemyweb.ai/en">
            MakeMyWeb.
          </Link>
          <Link target href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
          <Link target href="/about" className={isActive("/about") ? "active" : ""}>
            Company
          </Link>
          <Link target href="/blogs" className={isActive("/blogs") ? "active" : ""}>
            Blogs
          </Link>
        </div>
      </div>
    </div>
  );
});
export const HeroSectionWeb = React.memo(() => {
  return (
    <div className="hero">
      <img src={heroSection} className="heroImage" />
      <div className="heroContent">
        <h1 className="heroHeading">We are at the forefront of AI</h1>
        <p className="heroSubHeading">
          From Conserving Wildlife to Automatically Generating Caricatures– <span className="heroSubHeadingTwo">We Do It All</span>
        </p>
        <Link href="/about">
          <button className="heroBTN">Learn More</button>
        </Link>
      </div>
    </div>
  );
});
export const AboutUsWeb = React.memo(() => {
  return (
    <div className="aboutContainer">
      <div className="aboutContainerHeadingContent">
        <h1 className="aboutContainerText">About US</h1>
        <div className="aboutContainerUnderline"></div>
      </div>
      <div className="aboutContent">
        <div id="heroImg" className="aboutContentImg">
          <img alt="about" fetchPriority="high" width="400" height="400" decoding="async" data-nimg="1" className="aboutimg" src={aboutSection} />
        </div>
        <div className="aboutSectionTwo">
          <h3 className="aboutSectionTwoHeading">Welcome To LENS</h3>
          <p className="aboutSectionTwoSubHeading">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
          <Link href="./about">
            <button className="aboutBtn">
              <div>Learn More</div>
              <GoArrowRight width="1em" height="1em" className="NewAbout_icon__q7p_j iconify iconify--octicon" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});
export const ServicesWeb = React.memo(() => {
  return (
    <div className="serviceHeadingContainer" id="services">
      <div className="serviceHeadingContent">
        <div>
          <h2 className="serviceHeading">Services</h2>
          <div className="serviceUnderline"></div>
        </div>
      </div>
      <p className="serviceSubHeading">We provide Artificial Intelligence Services</p>
      <div className="cardContent">
        {serviceContents.map((singleCard) => (
          <div className="cardBox">
            <div className="firstCard"></div>
            <div className="headerCard">
              <div>
                <div className="headingCont">
                  <div>
                    <span className="cardNumber">{singleCard.firstNumber}</span>
                    <span className="cardNumber">{singleCard.secondNumber}</span>
                  </div>
                  <div className="cardHead">{singleCard.heading}</div>
                </div>
                <h5 className="cardBody">{singleCard.body}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const BannerSectionWeb = React.memo(() => {
  return (
    <div className="TruAi_container__EcAuw">
      <section className="TruAi_box__2njKB">
        <div className="TruAi_one___aV2n">
          <img alt="vector" loading="lazy" width="333" height="329" decoding="async" data-nimg="1" className="TruAi_img__YVzSg" src={homeBannerImage} />
        </div>
        <div className="TruAi_two__qNoyh">
          <div className="TruAi_title__QqHUE">
            Meet
            <div className="TruAi_truBox__NlP0T">
              <div className="TruAi_title2__v1zmy">Tru-AI</div>
              <img alt="underline" loading="lazy" width="200" height="24" decoding="async" data-nimg="1" className="TruAi_underline__TiyMp" src={homeBannerUnderline} />
            </div>
          </div>
          <div className="TruAi_dcd__EYU_D">Design. Create. Deploy.</div>
          <div className="TruAi_box2__4oCap">
            <div className="TruAi_dash___Hf2U"></div>
            <div className="TruAi_gradient__wtKYQ">the Future of AI | Power to EDIT</div>
          </div>
          <div className="TruAi_small__jceTj">Based On your website &amp; traffic trends, Tru-AI optimises your website</div>
          <a target="_blank" href="https://makemyweb.ai/">
            <button className="TruAi_aboutBtn__V5AQI">Learn More</button>
          </a>
        </div>
        <div className="TruAi_three__tGovU">
          <video autoPlay loop muted className="TruAi_vid__q_P8U">
            <source src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
});

export const whyusReasons = [" State-of-the-art solutions", "No extra computation fee", "Fast & Efficient", "No licensing fee", "Lifetime support & upgrades", "Plug-and-Play", "24x7 Progress Monitoring", "Incremental Updates"];
export const WhyUsWeb = React.memo(() => {
  return (
    <div className="NewSolutions_Container__DRve2">
      <div className="NewSolutions_headingCont__5hIel">
        <h2 className="NewSolutions_heading__IkBp9">WHY CHOOSE LENS</h2>
        <div className="NewSolutions_underline__MOW3B"></div>
      </div>
      <p className="NewSolutions_subHead__BowW4">AI-driven solutions backed by science</p>
      <p style={{ width: "100%" }} className="NewSolutions_para__6H5A6">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked via rigorous evaluations. With a global network of experts and academicians, we guarantee the most accurate and robust solutions in the market.
      </p>
      <div style={{ flexDirection: "row" }} className="NewSolutions_tickList__fnJHb">
         <div style={{ display:'flex', flexDirection: "column" }}>
          {whyusReasons.slice(0,4).map((item) => (
            <div className="NewSolutions_ai__9lohG">
              <AiOutlineCheck className="NewSolutions_check__YG5PZ" height="1em" width="1em" />
              {item}
            </div>
          ))}
          </div>
         <div style={{ display:'flex', flexDirection: "column" }}>

          {whyusReasons.slice(4).map((item) => (
            <div className="NewSolutions_ai__9lohG">
              <AiOutlineCheck className="NewSolutions_check__YG5PZ" height="1em" width="1em" />
              {item}
            </div>
          ))}
          </div>
      </div>
      <div className="NewSolutions_cardCont__7h1aC">
        {whyUs.map((item) => (
          <div style={{ position: "relative" }}>
            <div className="NewSolutions_green__g0z_8"></div>
            <div className="NewSolCard_aiCard__mpgzf">
              <div className="NewSolCard_aiHead__VNvMd">{item.title}</div>
              <img alt="sol card img" loading="lazy" width="251" height="91" decoding="async" data-nimg="1" className="NewSolCard_aiImg__Z1_ML NewSolCard_imageAnimation__SDTKn" src={item.img} />
              <div className="NewSolCard_aiBody__NQ8L_">{item.body}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
export const OurVisionWeb = React.memo(() => {
  return (
    <div className="NewVision_Container__lfemW">
      <div className="NewVision_headingCont__TN1qI">
        <h2 className="NewVision_heading__XlTVr">OUR VISION</h2>
        <div className="NewVision_underline__VxrFq"></div>
      </div>
      <p className="NewVision_subHead__3qv_x">AI for Social Good</p>
      <p className="NewVision_para__xm_Pw">Explainable AI (XAI) is an emerging subject of machine learning research that refers to strategies that try to provide transparency to typically opaque AI models and their predictions.</p>
      <div className="NewVision_qualification__sections__qWk8Y">
        <div>
          <div className="NewVision_qualification__data__s3l3X">
            <div>
              <h3 className="NewVision_qualification__title__HUzhX">Diversity & Fairness</h3>
              <span className="NewVision_qualification__subtitle__EQ6HD">When training our AI models, we consider ethical and social implications of algorithm-based decision making. Our solutions use high-quality and fairly-represented data sets to eliminate human cognitive biases.</span>
            </div>
            <div>
              <span className="NewVision_qualification__rounder__zWnvF">
                <svg aria-hidden="true" role="img" className="NewVision_iconCol__90VMl iconify iconify--ic" width="38" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.32 13.01c.96.02 1.85.5 2.45 1.34A3.961 3.961 0 0 0 12 16c1.29 0 2.5-.62 3.23-1.66c.6-.84 1.49-1.32 2.45-1.34c-.72-1.22-3.6-2-5.68-2c-2.07 0-4.96.78-5.68 2.01M4 13c1.66 0 3-1.34 3-3S5.66 7 4 7s-3 1.34-3 3s1.34 3 3 3m16 0c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3m-8-3c1.66 0 3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3s1.34 3 3 3"></path>
                  <path fill="currentColor" d="M21 14h-3.27c-.77 0-1.35.45-1.68.92c-.04.06-1.36 2.08-4.05 2.08c-1.43 0-3.03-.64-4.05-2.08c-.39-.55-1-.92-1.68-.92H3c-1.1 0-2 .9-2 2v4h7v-2.26c1.15.8 2.54 1.26 4 1.26s2.85-.46 4-1.26V20h7v-4c0-1.1-.9-2-2-2"></path>
                </svg>
              </span>
              <span className="NewVision_qualification__line__aQioP"></span>
            </div>
          </div>
          <div className="NewVision_qualification__data__s3l3X">
            <div></div>
            <div>
              <span className="NewVision_qualification__rounder__zWnvF">
                <svg aria-hidden="true" role="img" className="NewVision_iconCol__90VMl iconify iconify--carbon" width="40" height="32" viewBox="0 0 32 32">
                  <path fill="currentColor" d="M20 18v6.5c0 1.9 1.1 3.7 2.9 4.5l2.1 1l2.1-1c1.7-.8 2.9-2.6 2.9-4.5V18zm8 6.5c0 1.2-.7 2.2-1.7 2.7l-1.3.6l-1.3-.6c-1-.5-1.7-1.6-1.7-2.7V20h6zM16 20c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4h-2c0-1.1-.9-2-2-2s-2 .9-2 2s.9 2 2 2z"></path>
                  <path fill="currentColor" d="M16 25c-5 0-9-4-9-9s4-9 9-9s9 4 9 9h-2c0-3.9-3.1-7-7-7s-7 3.1-7 7s3.1 7 7 7z"></path>
                  <path fill="currentColor" d="M16 30C8.3 30 2 23.7 2 16S8.3 2 16 2s14 6.3 14 14h-2c0-6.6-5.4-12-12-12S4 9.4 4 16s5.4 12 12 12z"></path>
                </svg>
              </span>
              <span className="NewVision_qualification__line__aQioP"></span>
            </div>
            <div>
              <h3 className="NewVision_qualification__title__HUzhX">Regulatory Compliance</h3>
              <span className="NewVision_qualification__subtitle__EQ6HD">Working with clients globally, LENS acknowledges applicable data privacy regulations, such as the GDPR, HIPAA and others, in all our solutions handling sensitive data. We also ensure our algorithms allow for the required level of decision-making transparency and explainability.</span>
            </div>
          </div>
          <div className="NewVision_qualification__data__s3l3X">
            <div>
              <h3 className="NewVision_qualification__title__HUzhX">Code of Ethics</h3>
              <span className="NewVision_qualification__subtitle__EQ6HD">LENS believes in a just, non-violent world of equality and fairness. We prize democratic values, civil liberties and open and informed debate. When used to further these values, algorithm-based decision-making models can continue to make the world a safer, better place for everyone.</span>
            </div>
            <div>
              <span className="NewVision_qualification__rounder__zWnvF">
                <svg aria-hidden="true" role="img" className="NewVision_iconCol__90VMl iconify iconify--emojione-monotone" width="40" height="32" viewBox="0 0 64 64">
                  <path
                    fill="currentColor"
                    d="M39.5 34.813c0 6.213 5.037 11.25 11.25 11.25S62 41.025 62 34.813h-1.675L53.02 16.216a3.725 3.725 0 0 0 1.48-2.966c0-2.07-1.68-3.75-3.75-3.75c-.548 0-1.064.124-1.533.334a161.58 161.58 0 0 1-2.289-.911c-2.868-1.176-6.205-2.53-9.68-3.31A5.624 5.624 0 0 0 32 2a5.624 5.624 0 0 0-5.248 3.614c-3.476.779-6.813 2.133-9.681 3.31c-.653.268-1.572.63-2.289.911A3.72 3.72 0 0 0 13.25 9.5a3.75 3.75 0 0 0-3.75 3.75a3.73 3.73 0 0 0 1.479 2.966L3.674 34.813H2c0 6.213 5.037 11.25 11.25 11.25s11.25-5.037 11.25-11.25h-1.675L15.52 16.217A3.732 3.732 0 0 0 17 13.25c0-.087-.021-.169-.026-.255l.935-.379c2.631-1.081 5.678-2.324 8.805-3.083a5.628 5.628 0 0 0 3.412 3.391v5.732h-1.15v18.032h-1.25v8.829C21.523 46.668 17 50.252 17 54.5h-1.875v3.75h-3.75V62h41.25v-3.75h-3.75V54.5H47c0-4.248-4.525-7.832-10.725-8.983v-8.829h-1.25V18.655h-1.15v-5.732a5.629 5.629 0 0 0 3.411-3.391c3.128.759 6.173 2.002 8.806 3.083c.32.132.622.253.934.38c-.006.086-.026.168-.026.255a3.73 3.73 0 0 0 1.479 2.966l-7.305 18.596zM13.25 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m7.639 23.438H5.608l7.022-17.875c.203.034.408.062.62.062s.416-.028.618-.063zM50.75 11.375a1.876 1.876 0 1 1-.001 3.751a1.876 1.876 0 0 1 .001-3.751m-.619 5.563a3.7 3.7 0 0 0 .619.062c.211 0 .416-.028.618-.063l7.021 17.875H43.107z"
                  ></path>
                </svg>
              </span>
              <span className="NewVision_qualification__line__aQioP"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export const OurBlogsWeb = React.memo(() => {
  return (
    <div className="NewBlog_Container__TDE_m" id="blogs">
      <div className="NewBlog_headingCont__SQ_P9">
        <h2 className="NewBlog_heading__ZIOBD">OUR BLOGS</h2>
        <div className="NewBlog_underline__Mywh_"></div>
      </div>
      <p className="NewBlog_subHead__VqRmF">Inhouse Mindscape</p>
      <div className="NewBlog_main_container___nQla">
        <div className="NewBlog_sub_container__1gftM">
          <div className="NewBlog_yellow__rxPGI"></div>
          <div className="NewBlogCard_card__Elobm">
            <div className="NewBlogCard_container__fdu5h">
              <div>
                <span className="NewBlogCard_date__DE1td" style={{ color: "rgb(248, 99, 96)" }}>
                  New!
                </span>
                <h2 className="NewBlogCard_title__16ac3">The Evolution of AI in Games</h2>
              </div>
              <div className="NewBlogCard_box__wxNla" style={{ backgroundColor: "rgb(255, 246, 205)" }}>
                <p className="NewBlogCard_para__OCasQ">The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
              </div>
            </div>
            <div className="NewBlogCard_btn__aHb0S">
              <a href="/blogs/The Evolution of AI in Games">
                <button className="Buttons_readButtonBlog__yJfUQ">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--ci" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 8l4 4l-4 4M7 8l4 4l-4 4"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="NewBlog_sub_container__1gftM">
          <div className="NewBlog_yellow__rxPGI"></div>
          <div className="NewBlogCard_card__Elobm">
            <div className="NewBlogCard_container__fdu5h">
              <div>
                <span className="NewBlogCard_date__DE1td" style={{ color: "rgb(248, 99, 96)" }}>
                  New!
                </span>
                <h2 className="NewBlogCard_title__16ac3">The Evolution of AI in Games</h2>
              </div>
              <div className="NewBlogCard_box__wxNla" style={{ backgroundColor: "rgb(255, 246, 205)" }}>
                <p className="NewBlogCard_para__OCasQ">The integration of artificial intelligence (AI) within the gaming industry has been a remarkable journey, marked by continual innovation. Read our latest blog to dive deep into the fascinating history of AI in games and discover the evolution that continues to shape the future of play!...</p>
              </div>
            </div>
            <div className="NewBlogCard_btn__aHb0S">
              <a href="/blogs/The Evolution of AI in Games">
                <button className="Buttons_readButtonBlog__yJfUQ">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--ci" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 8l4 4l-4 4M7 8l4 4l-4 4"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="./blogs">
        <button className="NewBlog_aboutBtn__JdaGk">
          <div>Explore More</div>
          <svg aria-hidden="true" role="img" className="NewBlog_icon__0f4Gu iconify iconify--octicon" width="1em" height="1em" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"></path>
          </svg>
        </button>
      </a>
    </div>
  );
});
export const OurClients = React.memo(() => {
  return (
    <div className="NewClient_sec6__EgRtw">
      <h1 className="NewClient_section6Heading__TGGXE">We Work With Amazing Clients</h1>
      <div className="NewClient_image_section___eIHp">
        {ourClients.map((item) => (
          <div>
            <img alt="gen" loading="lazy" width="200" height="113" decoding="async" src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
});
export const OurStats = React.memo(() => {
  return (
    <div className="NewFigures_container__CCj4S">
      <div className="NewFigures_secHeading__fe2Ki">By the numbers</div>
      <div className="NewFigures_content__YKfOF">
        <div className="NewFigures_box___24DR">
          <div className="NewFigures_smolBox___7eMU">
            <span className="NewFigures_digit__AwroR">15</span>
            <span className="NewFigures_plus__kCylR">+</span>
          </div>
          <div className="NewFigures_text__kwuAm">Solutions for Global crises</div>
        </div>
        <div className="NewFigures_line__RP_TF"></div>
        <div className="NewFigures_box___24DR">
          <div className="NewFigures_smolBox___7eMU">
            <span className="NewFigures_digit__AwroR">10</span>
            <span className="NewFigures_plus__kCylR">+</span>
          </div>
          <div className="NewFigures_text__kwuAm">University Collaborations</div>
        </div>
        <div className="NewFigures_line__RP_TF"></div>
        <div className="NewFigures_box___24DR">
          <div className="NewFigures_smolBox___7eMU">
            <span className="NewFigures_digit__AwroR">25</span>
            <span className="NewFigures_plus__kCylR">+</span>
          </div>
          <div className="NewFigures_text__kwuAm">Employees Worldwide</div>
        </div>
      </div>
    </div>
  );
});
export const FAQsWeb = React.memo(() => {
  return (
    <div className="NewQuestions_Container__1uN_p">
      <div className="NewQuestions_headingCont__Oo_LA">
        <h2 className="NewQuestions_heading__tYrOE">GET TO KNOW US</h2>
        <div className="NewQuestions_underline__PkZOO"></div>
      </div>
      <p className="NewQuestions_subHead__pf_Xm">Frequently Asked Questions</p>
      <div>
        <div className="Accordian1_acc_sec8___AW1P">
          <div className="leftFAQ">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQ faq={faq} key={index} />
            ))}
          </div>
          <div className="leftFAQ">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
              <FAQ faq={faq} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export const FAQ = React.memo((props) => {
  const { faq, key } = props;
  const [showAns, setShowAns] = useState(false);
  const toggleAns = () => setShowAns(!showAns);
  return (
    <div key={key} onClick={toggleAns} className="singleFAQ">
      <div className="question">
        <p>{faq.ques}</p>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="Accordian1_icon__wzitS iconify iconify--octicon" width="1em" height="1em" viewBox="0 0 12 12">
          <path fill="currentColor" d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"></path>
        </svg>
      </div>
      {showAns ? <div className="ans">{faq.ans}</div> : null}
    </div>
  );
});
export const ContactUsWeb = React.memo(() => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => setEmail(e?.target?.value);
  return (
    <div className="NewContact_container__uG6JO">
      <div className="NewContact_left__0bxLz">
        <h2 className="NewContact_head__VtrxH">Get in touch with us</h2>
        <p className="NewContact_subHead__f5Lgr">Send your enquiry now!</p>
        <form className="NewContact_inputField__6ePN3">
          <input className="NewContact_input__sgdfh" placeholder="Enter email address" onChange={handleChange} value={email} type="email" name="email" />
          <button className="NewContact_button__0335_" type="submit">
            Request Demo
          </button>
        </form>
      </div>
      <div className="NewContact_right__N6g_I">
        <img alt="map" loading="lazy" width="720" height="538" decoding="async" data-nimg="1" className="NewContact_img__GUuU5" src={mapImage} />
      </div>
    </div>
  );
});
export const FooterWeb = React.memo(() => {
  return (
    <div>
      <div className="NewFooter_top__zG1Js">
        <div className="NewFooter_topBox__qITBs">
          <div className="NewFooter_one__FZicU">
            <a href="#">
              <img alt="logo" src={logo} loading="lazy" width="80" height="70" decoding="async" data-nimg="1" className="NewFooter_img__N_Vqq" />
            </a>
            <span className="NewFooter_today__0jVMb">Tomorrow's Vision, Today!</span>
            <div className="NewFooter_iconBox__id2RT">
              <a href="https://www.facebook.com/solutions.lenscorp?mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="NewFooter_icon__2u1AY iconify iconify--ic" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/lens_corporation/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="NewFooter_icon__2u1AY iconify iconify--mdi" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/lens-corporation/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="NewFooter_icon__2u1AY iconify iconify--mdi" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                </svg>
              </a>
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="NewFooter_icon__2u1AY iconify iconify--ic" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path>
                </svg>
              </a>
              <a href="https://twitter.com/LensCorporation" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="NewFooter_icon__2u1AY iconify iconify--ri" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="NewFooter_two__w3Wjr">
            <span className="NewFooter_two_title__3AseW">SITEMAP</span>
            <a target="blank" className="NewFooter_two_tab__s_86D" href="https://makemyweb.ai/">
              MakeMyWeb.
            </a>
            <a href="#services" className="NewFooter_two_tab__s_86D">
              Services
            </a>
            <span className="NewFooter_two_tab__s_86D">Products</span>
            <a href="#blogs" className="NewFooter_two_tab__s_86D">
              Blogs
            </a>
            <a href="/about" className="NewFooter_two_tab__s_86D">
              Life at LENS
            </a>
          </div>
          <div className="NewFooter_three__E4CRC">
            <span className="NewFooter_two_title__3AseW">CONNECT</span>
            <a href="tel:+1-517-9300-792" className="NewFooter_two_tab__s_86D">
              +1-517-9300-792
            </a>
            <a href="tel:+91-9990-736-796" className="NewFooter_two_tab__s_86D">
              +91-9990-736-796
            </a>
            <a href="mailto:solutions@lenscorp.ai" className="NewFooter_two_tab__s_86D">
              solutions@lenscorp.ai
            </a>
          </div>
        </div>
      </div>
      <div className="NewFooter_bot__Cr8m6">
        <div className="NewFooter_bot_box__GS61E">
          <span>
            2023 <span>LENS, Inc. </span>All rights reserved.
          </span>
          <div className="NewFooter_bot_smolBox__vVWBa">
            <a href="Files/LENS_Code_of_Conduct.pdf" target="_blank">
              Code of conduct{" "}
            </a>
            <a href="Files/LENS_Sustainability_Goals.pdf" target="_blank">
              Sustainability Goals
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
