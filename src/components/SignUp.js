import React from 'react';
import bonsaiLogo from '../assets/images/bonsai-logo.svg';
import '../assets/css/signup.css'; // Import the custom CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeftAlt } from '@fortawesome/free-solid-svg-icons/faQuoteLeftAlt';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div className='signup-container'>
                <div className='row sign-up'>
                    <div className='col-md-5 signup-logo'>
                        <img src={bonsaiLogo} className='img-fluid' alt='bonsai-logo' />
                        <p>Join 500,000+ freelancers and agencies using Bonsai.</p>
                        <div className='col-md-10 bottom-section-signup'>
                            <FontAwesomeIcon icon={faQuoteLeftAlt} style={{color:'#00b289',fontSize:'24px'}}/>
                            <p style={{ fontSize: 'small' }}>Anyone doing #freelance work should use @bonsaiinc for contracts/payment. It's amazing and saves boatloads of time.</p>
                            <small>Nathanael Smith, Product Designer</small>
                        </div>
                    </div>
                    <div className='col-md-6 signup-form'>
                        <h3>Try Bonsai free with your Workflow today</h3><br />
                        <hr className='first-hr' /><br />
                        <small className='first-text'>or</small>
                        <hr className='second-hr' /><br />
                        <small className='second-text'>Already have an account?</small>
                        <Link to='/signin'><button className='signup-button'>Login</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
