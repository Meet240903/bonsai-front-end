import React from 'react'
import '../assets/css/signupfooter.css'
import { Link } from 'react-router-dom'

const SignUpFooter = () => {
    return (
        <>
            <div className='container'>
                <div className='signup-footer'>
                    <ul>
                        <li>Contact Us</li>
                        <li>Help Center</li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/pricing'>Plans & Pricing</Link></li>
                        <li><Link to='/privacy'>Privacy Policy</Link></li>
                    </ul>
                    <div>
                        <small>©2022 Bonsai Technologies Inc — Payments, banking, and issuing services are provided by Stripe Payments Company, Evolve Bank & Trust (Member FDIC), and Celtic Bank (Member FDIC), respectively. Bonsai is not a law firm, and does not provide legal services, advice, or representation.   Terms    Credits</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpFooter
