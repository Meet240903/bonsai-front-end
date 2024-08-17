import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../assets/css/templateCSS/templateTopSection.css'

const TemplateTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='row m-0'>
                <div className='col-md-3'>
                    <img src={sectionData?.leftImage} className='template-top-images' alt='contract-img' />
                </div>
                <div className='col-md-6 template-top-content'>
                    <h1 className='text-black my-3'>{sectionData?.sectionTitle}</h1>
                    <p className='text-black mt-4'>{sectionData?.sectionContent}</p>
                    {
                        sectionData?.buttonContent && <button className='template-top-btn my-2'>{sectionData?.buttonContent}</button>
                    }
                    <br />
                    <button className='arrow-btn my-2'><FontAwesomeIcon icon={faGreaterThan} style={{ transform:'rotate(90deg)'}} /></button>
                </div>
                <div className='col-md-3'>
                    <img src={sectionData?.rightImage} className='template-top-images' alt='invoice-img' />
                </div>
            </div>
        </>
    )
}

export default TemplateTopSection
