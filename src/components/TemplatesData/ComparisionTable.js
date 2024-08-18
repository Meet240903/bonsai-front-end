import React from 'react';
import '../../assets/css/templateCSS/comparisonTable.css';
import bonsaiLogo from '../../assets/images/bonsai-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faClose } from '@fortawesome/free-solid-svg-icons';

const ComparisionTable = ({ sectionData }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              <th><img src={bonsaiLogo} alt="Logo" className="table-logo" /></th>
              <th>Templates</th>
            </tr>
          </thead>
          <tbody>
            {
              sectionData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <p className='fw-bold text-black'>{data?.title}</p>
                    <p>{data?.content}</p>
                  </td>
                  <td><FontAwesomeIcon icon={faCheckCircle} className='table-check-class' /></td>
                  <td><FontAwesomeIcon icon={faClose} className='table-close-class' /></td>
                </tr>
              ))
            }
            <tr>
                <td></td>
                <td>$19/mo</td>
                <td>$0/mo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ComparisionTable;
