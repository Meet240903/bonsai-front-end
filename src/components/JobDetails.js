import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faDollyBox, faFileAlt, faLessThan, faLocationDot, faSackDollar, faTree, faUser } from '@fortawesome/free-solid-svg-icons'

const JobDetails = () => {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <>
            <div className='job-container'>
                <div className='row m-0'>
                    <div className='col-md-6'>
                        <Link to='/job'><h5 className='job-navigation-back'><FontAwesomeIcon icon={faLessThan} className='fs-small' />&nbsp;&nbsp;Back to Open Positions</h5></Link>
                        <h2 className='fw-bold my-4'>{data?.title}</h2>
                        <div className='job-span-main'>
                            <div className='job-span text-center'><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;{data?.jobType}</div>
                            <div className='job-span text-center'><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;{data?.jobLocation}</div>
                            <div className={`job-span-${data?.spanClass}`}>{data?.jobPosition}</div>
                        </div>

                        {
                            data?.defaultContent?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <p className='fw-bold'>{data?.title}</p>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                        {
                            data?.aboutBonsai && <p className='fw-bold my-4'><FontAwesomeIcon icon={faTree} style={{ color: '00b289' }} />&nbsp;&nbsp; About Bonsai</p>
                        }
                        {
                            data?.aboutBonsai?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                        {
                            data?.aboutRole && <p className='fw-bold'>About the Role</p>
                        }
                        {
                            data?.aboutRole?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <p>{data?.content}</p>
                                    {
                                        data?.roleInnerDetails?.map((innerData, index) => (
                                            <>
                                                <p className='fw-bold'>{innerData?.innerTitle}</p>
                                                {
                                                    innerData?.innerRoleContent?.map((contentData, index) => (
                                                        <>
                                                            <p>{contentData?.content}</p>
                                                            {
                                                                contentData?.contentList?.map((contentListData, index) => (
                                                                    <li>{contentListData?.listLine}</li>
                                                                ))
                                                            }
                                                        </>
                                                    ))
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        {
                            data?.benefits && <p className='fw-bold'><FontAwesomeIcon icon={faSackDollar} style={{ color: '#e0a33b' }} />&nbsp;&nbsp; Benefits</p>
                        }
                        {
                            data?.benefits?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <li>{data?.content}</li>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-6'>
                        <div className='application-form-container'>
                            <h4 className='text-center'>Application</h4>
                            <div className='form-group'>
                                <label>First Name<span className='text-danger'>*</span></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Last Name<span className='text-danger'>*</span></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Email<span className='text-danger'>*</span></label>
                                <input type='email' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>LinkedIn<span className='text-danger'>*</span></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Resume<span className='text-danger'>*</span></label>
                                <input type='file' className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Tell us more about you<span className='text-danger'>*</span></label>
                                <textarea className='form-control' rows='5'></textarea>
                            </div>
                            <div className='form-group'>
                                <label>Location<span className='text-danger'>*</span></label>
                                <input type='text' className='form-control' />
                            </div>
                            <button className='btn btn-primary'>
                                Submit Application
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobDetails
