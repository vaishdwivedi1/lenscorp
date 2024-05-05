import React from 'react'
import AboutPageStyle from './About.mobile.css'
import {  AboutUsMobile, FooterMobile, HeaderMobile  } from '@/modules/home/mobile/Home.mobile.components'
import HeroSectionMobile, {  MetricsSectionMobile, TeamMembersMobile } from './About.mobile.components'

function AboutMobile() {
  return (
    <div style={{gap:'2rem', backgroundColor:'#fff'}} >
        <HeaderMobile/>
        <AboutUsMobile/>
        <MetricsSectionMobile/>
        <TeamMembersMobile/>
        <FooterMobile/>
      
    </div>
  )
}

export default AboutMobile
