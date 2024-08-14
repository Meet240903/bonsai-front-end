import React from 'react'
import '../../assets/css/freelanceSectionCSS/freelanceServiceSection.css'

const FreelanceServiceSection = ({ sectionData }) => {
    return (
        <>
            <div className='text-center' style={{ marginBottom: '4rem', marginTop: '4rem' }}>
                <h2>{sectionData?.mainTitle}</h2>
            </div>
            <div className='row'>
                {
                    sectionData?.innerServiceData?.map((data) => (
                        <div className='col-md-4' style={{ marginBottom: '4rem', marginTop: '1rem' }}>
                            <div className='text-center'>
                                <img src={data?.serviceImg} className='img-fluid my-4' alt={`${data?.serviceTitle}-img`} />
                                <h4 className='mb-4'>{data?.serviceTitle}</h4>
                                <p>{data?.serviceContent}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='row' style={{marginTop:'4rem'}}>
                <div className='col-md-5 outer-service-div'>
                    <h2>{sectionData?.outerServiceTitle1}</h2>
                    <p>{sectionData?.outerServiceContent1}</p>
                </div>
                <div className='col-md-7 text-center'>
                    <img src={sectionData?.outerServiceImg1} className='img-fluid' alt={`${sectionData?.outerServiceTitle1}-img`} style={{height:'400px'}} />
                </div>
            </div>
            <div className='row' style={{marginTop:'4rem'}}>
                <div className='col-md-7 text-center'>
                    <img src={sectionData?.outerServiceImg2} className='img-fluid' alt={`${sectionData?.outerServiceTitle2}-img`} style={{height:'400px'}} />
                </div>
                <div className='col-md-5 outer-service-div'>
                    <h2>{sectionData?.outerServiceTitle2}</h2>
                    <p>{sectionData?.outerServiceContent2}</p>
                </div>
            </div>
            <div className='row' style={{marginTop:'4rem'}}>
                <div className='col-md-5 outer-service-div'>
                    <h2>{sectionData?.outerServiceTitle3}</h2>
                    <p>{sectionData?.outerServiceContent3}</p>
                </div>
                <div className='col-md-7 text-center'>
                    <img src={sectionData?.outerServiceImg3} className='img-fluid' alt={`${sectionData?.outerServiceTitle3}-img`} style={{height:'400px'}} />
                </div>
            </div>
        </>
    )
}

export default FreelanceServiceSection
