import React from 'react'
import HomePageStyle from './Home.mobile.css'
import { AboutUsMobile, BannerSectionMobile, ContactUsMobile, FAQsMobile, FooterMobile, HeaderMobile, HeroSectionMobile, OurBlogsMobile, OurClients, OurStatsMobile, OurVisionMobile, ServicesMobile, WhyUsMobile } from './Home.mobile.components'

function HomeMobile() {
  return (
    <div style={{gap:'2rem'}} className={`${HomePageStyle.container}`}>
        <HeaderMobile/>
        <HeroSectionMobile/>
        <AboutUsMobile/>
        <ServicesMobile/>
        <BannerSectionMobile/>
        <WhyUsMobile/>
        <OurVisionMobile/>
        <OurBlogsMobile/>
        <OurClients/>
        <OurStatsMobile/>
        <FAQsMobile/>
        <ContactUsMobile/>
        <FooterMobile/>
      
    </div>
  )
}

export default HomeMobile
