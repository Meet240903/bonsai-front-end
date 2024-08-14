import React from 'react'
import AffiliatesTopSection from './AffiliatesData/AffiliatesTopSection'
import AffiatesServiceSection from './AffiliatesData/AffiatesServiceSection'
import HomeBottomSlider from './Home/HomeBottomSlider'
import AffiliatesBottomSection from './AffiliatesData/AffiliatesBottomSection'
import Contact from './Contact'

const Affiliates = () => {
    return (
        <>
            <div className='container'>
                <AffiliatesTopSection />
                <AffiatesServiceSection />
                <HomeBottomSlider />
                <AffiliatesBottomSection />
                <Contact content='Start making money with Bonsai today.' buttonContent='BECOME AN AFFILIATE' targetLink='https://web.archive.org/web/20221004185446/https://bonsai.crew.work/jobs' />
            </div>
        </>
    )
}

export default Affiliates
