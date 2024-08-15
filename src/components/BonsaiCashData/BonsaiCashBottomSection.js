import React from 'react'
import '../../assets/css/bonsaiCashCSS/bonsaiCashBottomSection.css'
import { Link } from 'react-router-dom'
import bottomImg from '../../assets/images/bonsaicash/bottom-img.png'
import bottomAutoSaveImg from '../../assets/images/bonsaicash/bottom-img-auto-saving.png'

const BonsaiCashBottomSection = () => {
    return (
        <>
            <div className='text-center bottom-section'>
                <h1 className='fw-bold text-black'>Save ahead of tax season</h1>
                <div className='bottom-section-p'>
                    <p>Automatically set aside a portion of your earnings in custom envelopes for taxes, holidays or savings.</p>
                </div>
                <Link to='/signup'><button className='bonsai-cash-btn'>Try Bonsai Cash</button></Link><br />
                <img src={bottomImg} className='bottom-img-relative' alt='bottom-img' />
                <img src={bottomAutoSaveImg} className='bottom-img-absolute' alt='bottom-img' />
            </div>
        </>
    )
}

export default BonsaiCashBottomSection
