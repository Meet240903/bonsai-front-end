import React from 'react'
import HomeTop from './Home/HomeTop'
import HomeSecondTop from './Home/HomeSecondTop'
import HomeMiddleSection from './Home/HomeMiddleSection'
import HomeBottom from './Home/HomeBottom'
import HomeBottomSlider from './Home/HomeBottomSlider'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <HomeTop />
            <HomeSecondTop />
            <HomeMiddleSection />
            <HomeBottom />
            <HomeBottomSlider />
            <Contact content="It’s your business. We’re here to help it grow."/>
        </div>
    )
}

export default Home
