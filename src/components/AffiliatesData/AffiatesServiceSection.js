import React from 'react'
import '../../assets/css/affiliateSectionCSS/affiliateServiceSection.css'
import Serviceimg1 from '../../assets/images/affiliates/Project-Based.svg'
import Serviceimg2 from '../../assets/images/affiliates/dollar-note.svg'
import Serviceimg3 from '../../assets/images/affiliates/star.svg'
import faCheckImg from '../../assets/images/affiliates/faCheck.svg'

const AffiatesServiceSection = () => {
    const serviceData = [
        {
            content: 'i. Receive a portion of Bonsai’s revenue for new paid subscriptions you bring in.',
        },
        {
            content: 'ii. Recommend us with confidence as 500K+ freelancers use and love Bonsai.',
        },
        {
            content: 'iii. Increased payouts and exclusive discounts for top performers.',
        },
    ]
    return (
        <>
            <div className='text-center'>
                <h2>Generous bonuses and commissions for every article and new <br /> subscription on Bonsai.</h2>
            </div>
            <div className='row service-content'>
                <div className='col-md-4'>
                    <img src={Serviceimg1} className='img-fluid my-3' alt='service-img' />
                    <p>Get plenty of time for sales conversions with 45-day cookie window.</p>
                </div>
                <div className='col-md-4'>
                    <img src={Serviceimg2} className='img-fluid my-3' alt='service-img' />
                    <p>Receive a 20% commission on new paid subscriptions with Bonsai.</p>
                </div>
                <div className='col-md-4'>
                    <img src={Serviceimg3} className='img-fluid my-3' alt='service-img' />
                    <p>More bonuses and increased payouts for top performers.</p>
                </div>
            </div>
            <div className='service-section-2'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1>We Grow. You Grow.</h1>
                        {
                            serviceData?.map((data) => (
                                <p className='my-4'>{data?.content}</p>
                            ))
                        }
                    </div>
                    <div className='col-md-6'>
                        <div className='monthly-plan'>
                            <img src={faCheckImg} className='img-fluid' alt='fa-check' />
                            <div className='mx-4'>
                                <p>MONTHLY PLANS</p>
                                <p className='fw-bold'>Earn $7.80/month for $39 plan</p>
                            </div>

                        </div>
                        <div className='annual-plan'>
                            <img src={faCheckImg} className='img-fluid' alt='fa-check' />
                            <div className='mx-4'>
                                <p>ANNUAL PLANS</p>
                                <p className='fw-bold'>‍Earn $76.80 for $39 plan</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AffiatesServiceSection
