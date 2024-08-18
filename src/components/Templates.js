import React from 'react'
import { useLocation } from 'react-router-dom'
import TemplateTopSection from './TemplatesData/TemplateTopSection';
import '../assets/css/templateCSS/template.css'
import TemplateMiddleSection from './TemplatesData/TemplateMiddleSection';
import TableOfContent from './TemplatesData/TableOfContent';
import AccordianData from './TemplatesData/AccordianData';
import ComparisionTable from './TemplatesData/ComparisionTable';
import Contact from './Contact';

const Templates = () => {
    const location = useLocation()
    const data = location.state?.data;
    return (
        <>
            <div className='templates-container'>
                <TemplateTopSection sectionData={data?.templateTopSection} />
                <TemplateMiddleSection sectionData={data?.templateMiddleSection} allData={data} />
                <TableOfContent sectionData={data?.tableOfContent} />
                {
                    data?.accordianData && <AccordianData sectionData={data?.accordianData} />
                }
                {
                    data?.comparisionTableData && <ComparisionTable sectionData={data?.comparisionTableData} />
                }
                <Contact content="Sign up to Bonsai" />
            </div>
        </>
    )
}

export default Templates
