import React from 'react'
import logoImg from '../assets/images/job/bonsai-logo.jpg'


const JobHeader = () => {
    return (
        <>
            <header className='job-header'>
                <div className='logo-div'>
                    <img src={logoImg} className='job-logo' alt='logo-img' />
                </div>
            </header>
        </>
    )
}

export default JobHeader
