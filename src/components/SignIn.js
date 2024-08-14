import React from 'react';
import '../assets/css/signin.css';

const SignIn = () => {
    return (
        <>
            <div className='signin-container'>
                <div className='sign-in'>
                    <div style={{marginBottom:'4rem'}}>
                        <h4>Sign In</h4>
                    </div>

                    <form className='my-4'>
                        <div className='form-group my-4'>
                            <input type='email' id='email' className='form-control' style={{padding:'12px'}} placeholder='email' required />
                        </div>
                        <div className='form-group my-4'>
                            <input type='password' id='password' className='form-control' style={{padding:'12px'}}  placeholder='password' required />
                        </div>
                        <div className='form-group remember-me'>
                            <input type='checkbox' id='remember-me' />
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        <button type='submit' className='login-button'>Login</button>
                    </form>
                    <div className='additional-links'>
                        <a href='#' className='reset-password'>Reset password</a><br />
                        <a href='#' className='resend-verification'>Resend verification email</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
