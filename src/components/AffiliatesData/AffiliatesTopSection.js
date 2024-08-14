import React from 'react'
import '../../assets/css/affiliateSectionCSS/affiliatetopsection.css'
import partnerImg1 from '../../assets/images/affiliates/affiliate-partners.svg'
import affiliatesGraphic from '../../assets/images/affiliates/affiliates_graphic.jpeg'

const AffiliatesTopSection = () => {
    return (
        <>
            <div className='row affiliate-top-content'>
                <div className='col-md-6'>
                    <h2 className='my-4'>Earn money sharing Bonsai with others ❤️</h2>
                    <p className='my-4'>Earn commission sharing the all-in-one solution loved by thousands of freelancers around the world.</p>
                    <a href='https://web.archive.org/web/20221004185446/https://bonsai.crew.work/jobs' target='_blank'><button className='affiliate-btn my-3'>BECOME AN AFFILIATE</button></a><br />
                    <span>Join amazing partners like...</span><br />
                    <img src={partnerImg1} className='img-fluid my-4' alt='partners-img' />
                </div>
                <div className='col-md-6'>
                    <img src={affiliatesGraphic} className='img-fluid' alt='affiliatesGraphic-img' />
                </div>
            </div>
        </>
    )
}

export default AffiliatesTopSection
