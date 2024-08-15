import React from 'react'
import '../../assets/css/bonsaiCashCSS/ctosection.css'
import ctoImg from '../../assets/images/bonsaicash/cta-photo.png'

const CTOSection = () => {
    return (
        <>
            <div className='cto-section'>
                <div className='row'>
                    <div className='col-md-6 text-center'>
                        <img src={ctoImg} className='fluid-img cta-img' alt='payment-img' />
                    </div>
                    <div className='col-md-6'>
                        <div className='cto-content'>
                            <span>Raewyn Sangari, Virtual Assistant in Los Angeles, California</span>
                            <h3 className='fw-bold my-5'>“With Bonsai Cash, I put my business finances on one card, and in one location. My expenses are now much easier to track.”</h3>
                            <button className='watch-button'>Watch now</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CTOSection
