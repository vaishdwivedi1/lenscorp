import React from 'react'
import HomePageStyle from './Home.web.css'
import { AboutUsWeb, BannerSectionWeb, ContactUsWeb, FAQsWeb, FooterWeb, HeaderWeb, HeroSectionWeb, OurBlogsWeb, OurClients, OurStats, OurVisionWeb, ServicesWeb, WhyUsWeb } from './Home.web.components'

function HomeWeb() {
  return (
    <div className={`${HomePageStyle.container}`}>
        <HeaderWeb/>
        <HeroSectionWeb/>
        <AboutUsWeb/>
        <ServicesWeb/>
        <BannerSectionWeb/>
        <WhyUsWeb/>
        <OurVisionWeb/>
        <OurBlogsWeb/>
        <OurClients/>
        <OurStats/>
        <FAQsWeb/>
        <ContactUsWeb/>
        <FooterWeb/>
      
    </div>
  )
}

export default HomeWeb
