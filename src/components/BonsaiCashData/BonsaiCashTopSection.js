import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/bonsaiCashCSS/bonsaiCashTopSection.css'

const BonsaiCashTopSection = () => {
    return (
        <>
            <div className='top-section-main'>
                <div className='top-section-container'>
                    <div className='top-section-content'>
                        <div className='top-section-block'>
                            <h1 className='fw-bold my-2'>One account for everything business</h1>
                            <p className='my-4'>Manage your finances, save on taxes, and get paid faster. All with no hidden fees and no minimums.</p>
                            <div className='my-4 signup-div'>
                                <Link to='/signup' className='signup-btn'>Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BonsaiCashTopSection
