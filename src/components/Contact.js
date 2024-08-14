import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/contact.css'

const Contact = ({content,buttonContent,targetLink}) => {
    return (
        <>
            <div className='container' style={{ marginTop: '5rem',marginBottom:'3rem' }}>
                <div className='row contact-class'>
                    <div className='col-md-7'>
                        <h1>{content}</h1>
                    </div>
                    <div className='col-md-5 text-center'>
                        <Link to={`${targetLink ? targetLink : '/signup'}`} target={`${targetLink ? '_blank' : '_self'}`} className='contact-btn'>{buttonContent ? buttonContent : 'START FREE'}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
