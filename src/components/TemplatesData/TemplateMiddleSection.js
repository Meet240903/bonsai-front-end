import React from 'react'
import '../../assets/css/templateCSS/templateMiddleSection.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

const TemplateMiddleSection = ({ sectionData,allData }) => {
    const linkData = [
        {
            linkTitle: 'Contract Templates',
            slugs: 'contract-template',
        },
        {
            slugs: 'invoice-template',
            linkTitle: 'Invoice Templates',
        },
        {
            slugs: 'proposals-template',
            linkTitle: 'Proposals Templates',
        },
        {
            slugs: 'agreement-template',
            linkTitle: 'Agreement Templates',
        },
        {
            slugs: 'sow-template',
            linkTitle: 'Scope of Work Templates',
        },
        {
            slugs: 'quote-template',
            linkTitle: 'Quote Templates',
        },
    ]
    return (
        <>
            <div className='row my-5 mx-0'>
                <div className='col-md-3 middle-link-section'>
                    <h5 className='text-black fw-bold my-4'>Document Type</h5>
                    {
                        linkData?.map((data, index) => (
                                <p className={`${data?.slugs === allData?.slugs ? 'text-decoration-underline' : ''}`}>{data?.linkTitle}</p>
                        ))
                    }
                </div>
                <div className='col-md-9'>
                    <div>
                        <h3 className='text-black'>All {allData?.title}</h3>
                    </div>
                    <div className='card-container'>
                        {sectionData?.map((data, index) => (
                            <div className='card-content' key={index}>
                                <Card style={{ width: '18rem', height: '18rem' }}>
                                    <Card.Img variant="top" src={data?.middleImg} />
                                    <Card.Body>
                                        <div className='middle-section-label'>
                                            <span>{data?.label}</span>
                                        </div>
                                        <Card.Title>{data?.title}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer style={{ backgroundColor: '#fff' }}>
                                        <div className='text-end'>
                                            <button className='footer-btn'><FontAwesomeIcon icon={faArrowRight} /></button>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TemplateMiddleSection
