import React from 'react';
import worktypeImg from '../../assets/images/worktype.svg';
import globalImg from '../../assets/images/globalbusiness.svg';

const HomeBottom = () => {
    return (
        <>
            <div className="container" style={{ marginTop: '5rem' }}>
                <div className="mx-auto" style={{ maxWidth: '900px' }}>
                    <div className="text-center">
                        <h3 className="fw-semibold mb-3">Trusted by 500K+ self-employed workers<br />
                            and small businesses</h3>
                        <p style={{ fontSize: '18px' }}>Whether you’re just getting started or your business is<br /> booming, Bonsai has you covered.</p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="row g-4">
                            <div className="col-md-6 d-flex flex-column align-items-center text-center">
                                <img src={worktypeImg} className="img-fluid" alt="Work Types" />
                                <h4 className="fw-bold mt-3">Built for All Work Types</h4>
                                <p>We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.</p>
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center text-center">
                                <img src={globalImg} className="img-fluid" alt="Global Businesses" />
                                <h4 className="fw-bold mt-3">Built for Global Businesses</h4>
                                <p>Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBottom;
