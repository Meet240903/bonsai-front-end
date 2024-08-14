import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/homeMiddleSectionData.css';

const HomeMiddleSectionData = ({ data }) => {
    return (
        <>
            <div style={{ padding: 'inherit' }}>
                <div className='col-md-6' style={{ marginLeft: '5rem' }}>
                    <h3 style={{ fontSize: '30px' }}>{data.innerTitle}</h3>
                    <div className='heading-small-22 text-weight-light mb-3'>{data.content}</div>
                    <Link
                        to={{
                            pathname: `/freelance/${data.slugs}`,
                        }}
                        state={{ data }}  // Pass the data object as state
                        style={{ textDecoration: 'none', color: '#00b289', fontSize: '16px' }}
                    >
                        EXPLORE {data.title.toUpperCase()} <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
                <div className='text-center'>
                    <img src={data.image} className='img-fluid' style={{ height: '400px', width: '550px' }} alt={data.title} />
                </div>
            </div>
        </>
    );
};

export default HomeMiddleSectionData;
