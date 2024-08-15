import React from 'react'
import logoImg from '../assets/images/job/bonsai-logo.jpg'
import '../assets/css/job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faLocation, faLocationDot, faLocationPin, faLocationPinLock, faUser } from '@fortawesome/free-solid-svg-icons'

const Job = () => {
    const bonsaiData = [
        {
            content: 'At Bonsai, we strive to hire ambitious and talented leaders who want to push the boundaries in their respective fields.',
        },
        {
            content: 'We are looking for resourceful experts and doers who love tackling big challenges and operating at high velocity.',
        },
        {
            content: "If you feel like this is you, we'd love for you apply to one of our open positions below.",
        },
        {
            title: 'About Bonsai',
            content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses. The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
        },
        {
            content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
        },
        {
            content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
        },
        {
            content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
        },
    ]

    const jobDetails = [
        {
            jobTitle: 'General Opportunities',
            jobType: 'Permenent',
            jobLocation: 'New York, Paris, or Remote',
            jobPosition: 'Others',
            spanClass: 'others'
        },
        {
            jobTitle: 'Head of Operations and Finance',
            jobType: 'Permenent',
            jobLocation: 'New York, Paris, or Remote',
            jobPosition: 'Operations',
            spanClass: 'operations'
        },
        {
            jobTitle: 'Product Manager',
            jobType: 'Permenent',
            jobLocation: 'Remote',
            jobPosition: 'Product',
            spanClass: 'product'
        },
        {
            jobTitle: 'Head of Customer Success',
            jobType: 'Permenent',
            jobLocation: 'North America',
            jobPosition: 'Customer Success',
            spanClass: 'customer-success'
        },
        {
            jobTitle: 'Risk and Payment Operations Analyst',
            jobType: 'Permenent',
            jobLocation: 'Remote',
            jobPosition: 'Operations',
            spanClass: 'operations'
        },
    ]
    return (
        <>
            <header className='job-header'>
                <div className='logo-div'>
                    <img src={logoImg} className='job-logo' alt='logo-img' />
                </div>
            </header>
            <div className='job-container'>
                <div className='row m-0'>
                    <div className='col-md-6'>
                        <h5>Open Positions</h5>
                        <h2 className='fw-bold my-4'>Bonsai</h2>
                        <span className='job-span'><FontAwesomeIcon icon={faFileAlt} />&nbsp;&nbsp;Information Technology</span>
                        <span className='job-span'><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;20 - 50 people</span>
                        {
                            bonsaiData?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <h6 className='fw-bold'>{data?.title}</h6>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label>Search</label>
                                <input type='text' className='form-control my-2' placeholder='Search job' />
                            </div>
                            <div className='col-md-6'>
                                <label>Department</label>
                                <input type='text' className='form-control my-2' placeholder='Search job' />
                            </div>
                            {
                                jobDetails?.map((data, index) => (
                                    <div className='col-md-10 my-3 job-section' key={index}>
                                        <div className='px-3'>
                                            <h4 className='mb-4'>{data?.jobTitle}</h4>
                                            <span className='job-section-span'><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;{data?.jobType}</span>
                                            <span className='job-section-span'><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;{data?.jobLocation}</span>
                                            <span className={`job-span-${data?.spanClass}`}>{data?.jobPosition}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Job
