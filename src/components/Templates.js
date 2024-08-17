import React from 'react'
import { useLocation } from 'react-router-dom'
import TemplateTopSection from './TemplatesData/TemplateTopSection';
import '../assets/css/templateCSS/template.css'
import TemplateMiddleSection from './TemplatesData/TemplateMiddleSection';

const Templates = () => {
    const location = useLocation()
    const data = location.state?.data;
    return (
        <>
            <div className='templates-container'>
                <TemplateTopSection sectionData={data?.templateTopSection} />
                <TemplateMiddleSection sectionData={data?.templateMiddleSection} allData={data} />
            </div>
        </>
    )
}

export default Templates
