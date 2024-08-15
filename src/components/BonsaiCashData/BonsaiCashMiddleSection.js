import React from 'react'
import '../../assets/css/bonsaiCashCSS/bonsaiCashMiddleSection.css'
import mobileImg1 from '../../assets/images/bonsaicash/Group_218.png'
import mobileImg2 from '../../assets/images/bonsaicash/Group_219.png'
import { Link } from 'react-router-dom'

const BonsaiCashMiddleSection = () => {
    return (
        <>
            <div className='middle-section'>
                <div className='row m-0'>
                    <div className='col-md-6 text-center'>
                        <img src={mobileImg1} className='mobile-photo' alt='mobile-photo' />
                    </div>
                    <div className='col-md-6 middle-content'>
                        <h2 className='fw-bold text-black my-4'>Do less accounting work thanks to easy expense management</h2>
                        <p className='my-4'>Expenses from your Bonsai card are automatically tracked. All you need to do is upload receipts from the app. Plus, tax write-offs are already calculated.</p>
                        <Link to='/signup'><button className='signup-btn my-4'>Sign up</button></Link>
                    </div>
                </div>
            </div>
            <div className='middle-section-2'>
                <div className='content-width'>
                    <div className='row'>
                        <div className='col-md-6 middle-content'>
                            <h2 className='fw-bold text-black my-4'>Receive your money faster</h2>
                            <p className='my-4'>Collect your invoice payouts in your Bonsai Cash account in just seconds.</p>
                            <Link to='/signup'><button className='signup-btn my-4'>Sign up</button></Link>
                        </div>
                        <div className='col-md-6 text-center'>
                            <img src={mobileImg2} className='mobile-photo' alt='mobile-photo' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BonsaiCashMiddleSection
