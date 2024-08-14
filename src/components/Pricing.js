import React, { useState } from 'react';
import '../assets/css/pricing.css'; // Import a CSS file for custom styles
import freetextImg from '../assets/images/FREE-text.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import FAQs from './FAQs';

const Pricing = () => {
    // State to manage the active pricing plan
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = () => {
        setIsMonthly((prev) => !prev);
    };

    const planData = [
        {
            title: 'Starter',
            titleContent: 'Ideal for freelancers and contractors just starting out.',
            Monthprice: '24',
            YearPrice: '17',
            content: [
                {
                    innerContent: 'All Templates'
                },
                {
                    innerContent: 'Unlimited Clients & Projects'
                },
                {
                    innerContent: 'Invoicing & Payments'
                },
                {
                    innerContent: 'Proposals & Contracts'
                },
                {
                    innerContent: 'Tasks & Time Tracking'
                },
                {
                    innerContent: 'Client CRM'
                },
                {
                    innerContent: 'Expense Tracking'
                },
                {
                    innerContent: 'Up to 5 Project Collaborators'
                },
            ]
        },
        {
            title: 'Professional',
            titleContent: 'Everything a growing independent business needs to thrive.',
            Monthprice: '39',
            YearPrice: '32',
            content: [
                {
                    innerContent: 'Everything in Starter plus...'
                },
                {
                    innerContent: 'Custom Branding'
                },
                {
                    innerContent: 'Forms & Questionnaires'
                },
                {
                    innerContent: 'Workflow Automations'
                },
                {
                    innerContent: 'Client Portal'
                },
                {
                    innerContent: 'QuickBooks Integration'
                },
                {
                    innerContent: 'Calendly Integration'
                },
                {
                    innerContent: 'Zapier Integration'
                },
                {
                    innerContent: 'Up to 15 Project Collaborators'
                },
            ]
        },
        {
            title: 'Business',
            titleContent: 'The perfect package for small businesses and agencies.',
            Monthprice: '79',
            YearPrice: '52',
            content: [
                {
                    innerContent: 'Everything in Starter and Professional plus...'
                },
                {
                    innerContent: 'Subcontractor Management'
                },
                {
                    innerContent: 'Hiring Agreement Templates (1099 contracts)'
                },
                {
                    innerContent: 'Subcontractor Onboarding'
                },
                {
                    innerContent: 'Talent Pool'
                },
                {
                    innerContent: '3 Team Seats (additional seats $9/month)'
                },
                {
                    innerContent: 'Accountant Access'
                },
                {
                    innerContent: 'Connect Multiple Bank Accounts'
                },
                {
                    innerContent: 'Unlimited Subcontractors'
                },
                {
                    innerContent: 'Unlimited Project Collaborators'
                },
            ]
        }
    ]

    return (
        <>
            <div style={{ backgroundColor: '#f2faff' }}>
                <div className='container' style={{ maxWidth: '1200px', paddingTop: '5rem', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className='text-center'>
                        <h3>Plans & Pricing</h3>
                        <img src={freetextImg} className='img-fluid free-text-img' alt='free-text' />
                        <div className='pricing-toggle'>
                            <span className={`pricing-label ${!isMonthly ? 'active' : ''}`}>MONTHLY</span>
                            <div className='switch' onClick={handleToggle}>
                                <div className={`toggle ${isMonthly ? 'on' : 'off'}`}></div>
                            </div>
                            <span className={`pricing-label ${isMonthly ? 'active' : ''}`}>YEARLY</span>
                        </div>
                    </div>
                    {/* <span className='badge p-3 rotated-badge col-md-3'>MOST POPULAR</span> */}
                    <div className="row" style={{ marginTop: '3rem' }}>
                        {
                            planData?.map((data, index) => (
                                <div className="col-12 col-md-4 mb-3" key={data?.title}>
                                    <div className="price-details">
                                        <div className='col-md-8'>
                                            <h4>{data?.title}</h4>
                                            <small>
                                                {data?.titleContent}
                                            </small>
                                        </div>
                                        <div className="price-box">
                                            <div className="price">
                                                <span className="currency-symbol">$</span>
                                                {
                                                    isMonthly ? (
                                                        <>
                                                            {data?.YearPrice}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {data?.Monthprice}
                                                        </>
                                                    )
                                                }
                                                <span className="heading-medium-26 fw-normal">/MONTH</span>

                                            </div>
                                            {
                                                isMonthly && <div className='text-end'>
                                                    <small>Billed yearly</small>
                                                </div>
                                            }
                                        </div>
                                        <div className="list-item">
                                            <ul>
                                                {
                                                    data?.content?.map((contentData,index) => (
                                                        <li key={index}><FontAwesomeIcon icon={faCheck} style={{ color: '#01b289', marginRight: '10px' }} />{contentData?.innerContent}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='text-center'>
                                            <Link to='/signup' className='col-md-9 price-btn'>START FREE</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='container' style={{ maxWidth: '1200px', paddingTop: '5rem' }}>
                <div className='text-center'>
                    {
                        !isMonthly ? (
                            <>
                                <h3>Super charge your work with add-ons</h3>
                            </>
                        ) : (
                            <>
                                <h3>Customize your workflow with add-ons</h3>
                            </>
                        )
                    }
                </div>
                <div className='row charge-div my-2'>
                    <div className='col-md-8'>
                        <h4>Collaborators</h4>
                        <span>Invite other users to specific projects for limited access and functionality.</span>
                    </div>
                    <div className='col-md-4 charge-inner-div'>
                        <h2 className='fw-bold mt-2'>Free</h2>
                    </div>
                </div>
                <div className='row charge-div my-2'>
                    <div className='col-md-8'>
                        <h4>Partners</h4>
                        <span>Invite other users for full account access and company management.</span>
                    </div>
                    <div className='col-md-4 charge-inner-div'>
                        {
                            !isMonthly ? (
                                <>
                                    <h2 className='fw-bold mt-2'>$9</h2>
                                    <span>/MONTH</span>
                                </>
                            ) : (
                                <>
                                    <h2 className='fw-bold mt-2'>$90</h2>
                                    <span>/YEAR</span>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className='row charge-div my-2'>
                    {
                        !isMonthly ? (
                            <>
                                <div className='col-md-8'>
                                    <h4>Bonsai Tax</h4>
                                    <span>Track expenses, identify write-offs, and estimate quarterly taxes easily.</span><br /><br />
                                    <Link to='/' style={{ color: '#01b289' }}>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                                <div className='col-md-4 charge-inner-div'>
                                    <h2 className='fw-bold mt-2'>$10</h2>
                                    <span>/MONTH</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='col-md-8'>
                                    <h4>Accounting & Tax Assistant</h4>
                                    <span>Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.</span><br /><br />
                                    <Link to='/' style={{ color: '#01b289' }}>LEARN MORE <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </div>
                                <div className='col-md-4 charge-inner-div'>
                                    <h2 className='fw-bold mt-2'>$10</h2>
                                    <span>/YEAR</span>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className='container' style={{ maxWidth: '1200px' }}>
                <Contact content="It’s your business. We’re here to help it grow."/>
            </div>
            <div className='container' style={{ maxWidth: '1225px', marginTop: '3rem' }}>
                <FAQs />
            </div>
        </>
    );
};

export default Pricing;
