import React from 'react'
import blogImg from '../../assets/images/blog.png'
import '../../assets/css/hometop.css'; // Assuming you're creating a CSS file for custom styles

const HomeTop = () => {
    return (
        <>
            <div style={{ backgroundColor: '#f2faff' }}>
                <div className='container'>
                    <div className='row' style={{ padding: '2rem' }}>
                        <div className='col-md-6 d-flex align-items-center' style={{ padding: '2rem' }}>
                            <div>
                                <h2>Everything you need to run your business.</h2>
                                <p>Bonsai’s all-in-one product suite with smart automation lets you focus on your passion, not your paperwork.</p>
                                <div className="email-signup">
                                    <input type="email" placeholder="Enter your email" className="email-input" />
                                    <button className="start-button">START FREE</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={blogImg} className='img-fluid' alt="Blog" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomeTop
