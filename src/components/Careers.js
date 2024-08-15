import React from 'react'
import '../assets/css/careers.css'
import combinatorImg from '../assets/images/combinator_about.png'
import matrixImg from '../assets/images/matrix_about.png'
import indexVentureImg from '../assets/images/index_ventures_about.png'
import { Link } from 'react-router-dom'

const Careers = () => {
    return (
        <>
            <div style={{ backgroundColor: '#fafafa' }}>
                <div className='career-container'>
                    <div className='career-content'>
                        <h2 className='fw-bold text-black'>We are hiring a
                            <h2 className='inner-h2'>world-class team</h2>
                            to build the future of work.</h2>
                        <p className='my-4'>At Bonsai, we strive to hire ambitious and talented leaders who want to push the boundaries in their respective fields.
                            We are looking for resourceful experts and doers who love tackling big challenges and operating at high velocity.
                            If you feel like this is you, we'd love for you apply to one of our open positions below.</p>
                        <Link to='/job'><button className='view-opening-btn'>VIEW OPENING</button></Link>
                    </div>

                </div>
            </div>
            <div>
                <div className='text-center my-5'>
                    <h2>Backed by a few of the world’s top investors</h2>
                    <div className='my-3'>
                        <img src={combinatorImg} className='img-fluid about-img mx-4' atl='img-logo' />
                        <img src={matrixImg} className='img-fluid about-img mx-4' atl='img-logo' />
                        <img src={indexVentureImg} className='img-fluid about-img mx-4' atl='img-logo' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Careers
