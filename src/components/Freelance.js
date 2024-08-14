import React from 'react';
import { useLocation } from 'react-router-dom';
import FreelanceTopSection from './FreelanceData/FreelanceTopSection';
import FreelanceServiceSection from './FreelanceData/FreelanceServiceSection';
import HomeBottom from './Home/HomeBottom';
import Contact from './Contact';
import BonsaiFeatures from './FreelanceData/BonsaiFeatures';

const Freelance = () => {
    const location = useLocation();
    const data = location.state?.data; // Access the passed data

    return (
        <>
            <div className='container' style={{ maxWidth: '1100px', marginTop: '2rem' }}>
                <FreelanceTopSection sectionData={data?.freelanceTopSectionData} />
                <FreelanceServiceSection sectionData={data?.freelanceServiceSectionData} />
                <HomeBottom />
                <Contact content={data?.freelanceServiceSectionData?.contactContent}/>
                <BonsaiFeatures sectionData={data} />
            </div>
        </>
    );
};

export default Freelance;
