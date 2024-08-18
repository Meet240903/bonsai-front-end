import React, { useState } from 'react'
import '../../assets/css/templateCSS/tableofContent.css'

const TableOfContent = ({ sectionData }) => {
    const [activeMistakeIndex, setActiveMistakeIndex] = useState(null);

    const toggleMistakeContent = (index) => {
        // Toggle the state: if the same index is clicked, close it (set to null)
        setActiveMistakeIndex(activeMistakeIndex === index ? null : index);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className='row m-0'>
                <div className='col-md-3 table-content-link'>
                    <h5 className='text-black fw-bold my-4'>Table of Contents</h5>
                    {
                        sectionData?.map((data, index) => (
                            <p
                                key={index}
                                onClick={() => scrollToSection(`section-${index}`)}
                                className="toc-link"
                            >
                                {data?.mainTitle}
                            </p>
                        ))
                    }
                </div>
                <div className='col-md-9'>
                    {
                        sectionData?.map((data, index) => (
                            <div
                                className={`${data?.mistakeList ? 'row p-0 m-0' : ''}`}
                                key={index}
                                id={`section-${index}`} // Assign a unique id to each section
                            >
                                <div className={`${data?.mistakeList ? 'col-md-5 my-4 mistake-left-class' : 'my-4'}`}>
                                    <h2 className='content-main-title text-black fw-bold'>{data?.mainTitle}</h2>
                                    {
                                        data?.contentList?.map((contentData, index) => (
                                            <div key={index}>
                                                <p>{contentData?.content}</p>
                                                {
                                                    contentData?.innerContentList?.map((innerContentData, index) => (
                                                        <div key={index}>
                                                            <h6 className='text-black fw-bold'>{innerContentData?.innerTitle}</h6>
                                                            {
                                                                innerContentData?.childContent?.map((childContentData, index) => (
                                                                    <div key={index}>
                                                                        <p className='fw-bold'>{childContentData?.title}</p>
                                                                        <p>{childContentData?.content}</p>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    contentData?.contentUlList?.map((ulData, index) => (
                                                        <div key={index} className='template-content-li'>
                                                            <li>{ulData?.content}</li>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                                {
                                    data?.mistakeList && <div className='col-md-7 mt-4'>
                                        {
                                            data?.mistakeList?.map((mistakeData, mistakeIndex) => (
                                                <div
                                                    className='mistake-inner-divs'
                                                    key={mistakeIndex}
                                                    onClick={() => toggleMistakeContent(mistakeIndex)}
                                                >
                                                    <span className='mistak-span'>MISTAKE {mistakeIndex + 1}</span>
                                                    <p className='text-black'>{mistakeData?.mistakeTitle}</p>
                                                    {
                                                        activeMistakeIndex === mistakeIndex && mistakeData?.contentList?.map((contentData, index) => (
                                                            <p key={index}> {contentData?.content}</p>
                                                        ))
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div >
                        ))
                    }
                </div>
            </div >
        </>
    )
}

export default TableOfContent;
