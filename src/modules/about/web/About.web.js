import React from 'react'
import HomePageStyle from '@/modules/home/web/Home.web.css'
import {  FooterWeb, HeaderWeb} from '@/modules/home/web/Home.web.components'
import HeroSection, { MetricsSection, TeamMembers } from './About.web.components'
import AboutPageStyle from "./About.web.css";

function HomeWeb() {
  return (
    <div className={`${HomePageStyle.container}`}>
        <HeaderWeb/>
        <HeroSection/>
        <MetricsSection/>
        <TeamMembers/>
        <FooterWeb/>
      
    </div>
  )
}

export default HomeWeb
