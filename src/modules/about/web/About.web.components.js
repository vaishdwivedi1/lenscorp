import { teamMembers, teamPhoto } from "@/Constants.js/Images";
import React from "react";
import AboutPageStyle from "./About.web.css";

const HeroSection = React.memo(() => {
  return (
    <div className="NewAboutSec_aboutContainer__sjzMc">
      <div className="NewAboutSec_headingCont__0tf25">
        <h1 className="NewAboutSec_heading__AB0cW">About Us</h1>
        <div className="NewAboutSec_underline__Vg5ry"></div>
      </div>
      <div className="NewAboutSec_aboutContent__GaAFw">
        <div id="heroImg" className="NewAboutSec_imgCont__nhgRf">
          <img alt="about" fetchPriority="high" width="400" height="400" decoding="async" data-nimg="1" className="NewAboutSec_black_white__6x8Af" src={teamPhoto} />
        </div>
        <div className="NewAboutSec_section2Content__o3D1E">
          <h3 className="NewAboutSec_section2Txt__2hN9d">Welcome To LENS</h3>
          <p className="NewAboutSec_section2par__kLK05">We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.</p>
        </div>
      </div>
    </div>
  );
});
export const MetricsSection = React.memo(() => {
  return (
    <div className="ServiceC_sec3_container__kuFR3">
      <div className="ServiceC_cardCont__IuHlg">
        <div className="ServiceC_cardBox__uUyZv">
          <div></div>
          <div className="NewServiceCard_headerCard__438DV">
            <div>
              <div className="NewServiceCard_headingCont__QkfmB">
                <div>
                  <span className="NewServiceCard_number__FPZAO">0</span>
                  <span className="NewServiceCard_number__FPZAO">1</span>
                </div>
                <div className="NewServiceCard_cardHead__JPzMC">Biometrics</div>
              </div>
              <h5 className="NewServiceCard_cardBody__d0fwE">Academia-backed &amp; In-house researched State-of-the-Art Face, Fingerprint, and Iris Recognition SDKs. Enable real-time automated Biometric applications on edge devices even without an active internet connection.</h5>
            </div>
          </div>
        </div>
        <div className="ServiceC_cardBox__uUyZv">
          <div></div>
          <div className="NewServiceCard_headerCard__438DV">
            <div>
              <div className="NewServiceCard_headingCont__QkfmB">
                <div>
                  <span className="NewServiceCard_number__FPZAO">0</span>
                  <span className="NewServiceCard_number__FPZAO">2</span>
                </div>
                <div className="NewServiceCard_cardHead__JPzMC">Image Analysis</div>
              </div>
              <h5 className="NewServiceCard_cardBody__d0fwE">Outsource the overly complex image analysis work to our intelligent machines that adaptively learn, so you can focus on making the best decisions for your business.</h5>
            </div>
          </div>
        </div>
        <div className="ServiceC_cardBox__uUyZv">
          <div></div>
          <div className="NewServiceCard_headerCard__438DV">
            <div>
              <div className="NewServiceCard_headingCont__QkfmB">
                <div>
                  <span className="NewServiceCard_number__FPZAO">0</span>
                  <span className="NewServiceCard_number__FPZAO">3</span>
                </div>
                <div className="NewServiceCard_cardHead__JPzMC" style={{ border: "none", color: "rgb(255, 96, 95)" }}>
                  Cross-Media Translation
                </div>
              </div>
              <h5 className="NewServiceCard_cardBody__d0fwE" style={{ border: "none" }}>
                Will something like Siri or Alexa enhance your business? We can deliver text-to-speech, text-to-image, speech-to-text, speech-to-image, speech-to-image, image-to-text and image-to-speech solutions for maximum convenience.
              </h5>
            </div>
          </div>
        </div>
        <div className="ServiceC_cardBox__uUyZv" style={{ position: "relative" }}>
          <div></div>
          <div className="NewServiceCard_headerCard__438DV">
            <div>
              <div className="NewServiceCard_headingCont__QkfmB">
                <div>
                  <span className="NewServiceCard_number__FPZAO">0</span>
                  <span className="NewServiceCard_number__FPZAO">4</span>
                </div>
                <div className="NewServiceCard_cardHead__JPzMC">3D Modelling and Design.</div>
              </div>
              <h5 className="NewServiceCard_cardBody__d0fwE">We offer services for automated generation of 3D assets with realistic shapes and textures. We animate the 3D models with voice and videos with an aim to retarget voice and/or expressions with pose from a single Image/video.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export const TeamMembers = React.memo(() => {
  return (
    <div className="Research_main_container4__YD6XU">
      <div className="Research_headingCont__uTuth">
        <h2 className="Research_heading__dpski">TEAM</h2>
        <div className="Research_underline__Tm2On"></div>
      </div>
      <div className="Research_sub_container_mini4__887Hc">
        {teamMembers.map((team,index) => (
          <div key={index}>
            <div className="ResearcherCard_reCard__l_YbD">
              <div className="ResearcherCard_pic__FExyx">
                <img alt="researcher" loading="lazy" width="280" height="350" decoding="async" data-nimg="1" src={team.image} />
              </div>
              <div className="ResearcherCard_content__PC1Dd">
                <div className="ResearcherCard_head__WJgXu">{team.name}</div>
                <div className="ResearcherCard_body__UoSLF">{team.position}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="Research_subHead__jOEBX">Meet Our Researchers</p>

    </div>
  );
});

export default HeroSection;
