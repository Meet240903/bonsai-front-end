import React from 'react'
import '../assets/css/about.css'
import combinatorImg from '../assets/images/combinator_about.png'
import matrixImg from '../assets/images/matrix_about.png'
import indexVentureImg from '../assets/images/index_ventures_about.png'

const About = () => {
    const aboutContent = [
        {
            content: 'The way the world works is changing.'
        },
        {
            content: 'Companies want on-demand talent rather than full time employees. Workers want flexible and independent careers. This is one of the largest socio-economic shifts since the Industrial Revolution.'
        },
        {
            content: 'While the nature of work is changing rapidly, the tools and processes supporting it are stuck in the twentieth (or even nineteenth!) century.'
        },
        {
            content: "Bonsai is dedicated to helping companies and independent talent work better together. We're building solutions to support a future where work is flexible and globally distributed."
        },
    ]
    return (
        <>
            <div className='about-section'>
                <div className='container about-container'>
                    <div className='row about-content'>
                        <div className='col-md-6'>
                            <h2>Bonsai is building the global operating system for freelance work.</h2>
                            {
                                aboutContent?.map((data) => (
                                    <p className='my-4'>{data?.content}</p>
                                ))
                            }
                        </div>
                        <div className='col-md-6 text-center'>
                            <h4 className='my-4'>Contact Us</h4>
                            <p className='my-2'>Want to get in touch?</p>
                            <span className='mx-3'>Chat with us</span><small>or</small><span className='mx-3'>email us</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container about-container'>
                <div className='text-center my-5'>
                    <h2>Backed by a few of the world’s top investors</h2>
                    <div className='my-3'>
                        <img src={combinatorImg} className='img-fluid about-img mx-4' atl='img-logo'/>
                        <img src={matrixImg} className='img-fluid about-img mx-4' atl='img-logo'/>
                        <img src={indexVentureImg} className='img-fluid about-img mx-4' atl='img-logo'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
