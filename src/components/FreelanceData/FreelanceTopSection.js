import React from 'react';
import '../../assets/css/freelanceSectionCSS/freelanceTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faFileContract, faFileInvoiceDollar, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faFileLines, faFolder, faNewspaper } from '@fortawesome/free-regular-svg-icons';

const iconMap = {
    faClipboardCheck: faClipboardCheck,
    faFileContract: faFileContract,
    faFileInvoiceDollar: faFileInvoiceDollar,
    faReceipt: faReceipt,
    faClock: faClock,
    faFileLines: faFileLines,
    faFolder: faFolder,
    faNewspaper: faNewspaper,
};

const FreelanceTopSection = ({ sectionData }) => {
    const icon = sectionData?.freelanceIcon;

    // Determine which icon to display
    const displayedIcon = iconMap[icon] || faFileLines; // Default to faFileLines if no match

    return (
        <>
            <div className='row freelance-top-main-div'>
                <div className='col-md-5 freelance-top-first-div'>
                    <span style={{color:'#00b289'}}>
                        <FontAwesomeIcon icon={displayedIcon} style={{fontSize:'22px'}}/> {/* Display the icon */}
                        &nbsp;{sectionData?.freelanceTitle}
                    </span>
                    <h2 className='my-4'>{sectionData?.freelanceInnerTitle}</h2>
                    <p className='mb-4'>{sectionData?.freelanceInnerContent}</p>
                    <div className="email-signup">
                        <input type="email" placeholder="Enter your email" className="email-input" />
                        <button className="start-button">START FREE</button>
                    </div>
                </div>
                <div className='col-md-7'>
                    <img src={sectionData?.freelanceInnerImg} className='img-fluid' alt={`freelance-${sectionData?.freelanceTitle}-img`} />
                </div>
            </div>
        </>
    );
};

export default FreelanceTopSection;
