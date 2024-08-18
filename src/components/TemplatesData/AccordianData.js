import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../assets/css/templateCSS/accordian.css'

const AccordianData = ({ sectionData }) => {
    return (
        <>
            <div className='my-5'>
                {
                    sectionData?.map((data, index) => (
                        <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><span className='accordian-span'>{index+1}</span> <h5>{data?.title}</h5></Accordion.Header>
                                <Accordion.Body>
                                    <div className='row m-0 accordian-body-data'>
                                        <div className='col-md-6'>
                                            {
                                                data?.contentList?.map((data,index)=>(
                                                    <p>{data?.content}</p>
                                                ))
                                            }
                                        </div>
                                        <div className='col-md-6 text-center'>
                                            <img src={data?.accordianImg} className='accordian-img' alt='accordian-img' />
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))
                }
            </div>
        </>
    )
}

export default AccordianData
