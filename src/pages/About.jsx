import React from 'react'
import BreadCrumb from '../components/about/BreadCrumb'
import HeroAbout from '../components/about/HeroAbout'
import History from '../components/about/History'
import Performance from '../components/about/Performance'
import Provide from '../components/about/Provide'
import Team from '../components/about/Team'

const About = () => {
    return (
        <>
            <BreadCrumb />
            <HeroAbout />
            <Provide />
            <Performance />
            <History />
            <Team />
        </>
    )
}

export default About