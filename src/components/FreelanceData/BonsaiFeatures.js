import React from 'react'
import '../../assets/css/freelanceSectionCSS/bonsaiFeature.css'

const BonsaiFeatures = ({ sectionData }) => {
    return (
        <>
            <div className='text-center my-6'>
                <h2>Keep Exploring Bonsai’s Features</h2>
            </div>
            <div className='feature-main'>

                {
                    sectionData?.relatedFeaturesData.map((data) => (

                        <div className='col-md-5 feature-inner'>
                            <div>
                                <img src={data?.featureImg} className='img-fluid' alt={`${data?.featureTitle}-img`} />
                            </div>
                            <div>
                                <h3>{data?.featureTitle}</h3>
                                <span>{data?.featureContent}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BonsaiFeatures
