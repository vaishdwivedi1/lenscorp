import { serviceContents, teamMembers, teamPhoto } from "@/Constants.js/Images";
import React from "react";
import AboutPageStyle from "./About.mobile.css";
import Image from "next/image";

const HeroSectionMobile = React.memo(() => {
  return (
    <div className="NewAboutSec_aboutContainer__sjzMc">
      <div className="NewAboutSec_headingCont__0tf25">
        <h1 className="NewAboutSec_heading__AB0cW">About Us</h1>
        <div className="NewAboutSec_underline__Vg5ry"></div>
      </div>
      <div className="NewAboutSec_aboutContent__GaAFw">
        <div id="heroImg" className="NewAboutSec_imgCont__nhgRf">
          <Image alt="about" fetchPriority="high" width="400" height="400" decoding="async" data-nimg="1" className="NewAboutSec_black_white__6x8Af" src={teamPhoto} />
        </div>
        <div className="NewAboutSec_section2Content__o3D1E">
          <h3 className="NewAboutSec_section2Txt__2hN9d">Welcome To LENS</h3>
          <p className="NewAboutSec_section2par__kLK05">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
        </div>
      </div>
    </div>
  );
});
export const MetricsSectionMobile = React.memo(() => {
  return (
    <div className="cardContentMobile">
        {serviceContents.map((singleCard,index) => (
          <div className="cardBox" key={index}>
            <div className="firstCard"></div>
            <div className="headerCardMobile">
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
  );
});
export const TeamMembersMobile = React.memo(() => {
  return (
    <div className="Research_main_containermobile__YD6XU">
      <div className="Research_headingCont__uTuth">
        <h2 className="Research_heading__dpski">TEAM</h2>
        <div className="Research_underline__Tm2On"></div>

      <p style={{fontSize:"36px"}} className="Research_subHead__jOEBX">Meet Our Researchers</p>

      </div>
      <div className="Research_sub_containermobile_mini4__887Hc">
        {teamMembers.map((team,index) => (
          <div key={index}>
            <div className="ResearcherCard_reCard__l_YbD">
              <div className="ResearcherCard_pic__FExyx">
                <Image alt="researcher" loading="lazy" width="280" height="350" decoding="async" data-nimg="1" src={team.image} />
              </div>
              <div className="ResearcherCard_content__PC1Dd">
                <div className="ResearcherCard_head__WJgXu">{team.name}</div>
                <div className="ResearcherCard_body__UoSLF">{team.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
});

export default HeroSectionMobile;
