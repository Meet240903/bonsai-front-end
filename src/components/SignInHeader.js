import React from 'react'
import bonsaiLogo from '../assets/images/bonsai-signin-logo.png'
import { Link } from 'react-router-dom'
import '../assets/css/signinheader.css'

const SignInHeader = () => {
    return (
        <>
            <div style={{ borderBottom: '1px solid rgb(228 220 220)' }}>
                <div className='signin-header'>
                    <Link to='/'>
                        <img src={bonsaiLogo} className='img-fluid' alt='bonsai-logo' />
                    </Link>
                    <div className='signin-header-links'>
                        <Link to='/signin' className='mx-4'>Login</Link>
                        <Link to='/signup'>Sign up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInHeader
