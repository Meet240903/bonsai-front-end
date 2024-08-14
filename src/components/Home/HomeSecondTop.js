import React from 'react';
import withoutBonsaiImg from '../../assets/images/without-bonsai.svg';
import withBonsaiImg from '../../assets/images/with-bonsai.svg';

const HomeSecondTop = () => {
    return (
        <>
            <div className='container text-center mb-4' style={{ marginTop: '5rem' }}>
                <h3>Make more, manage less</h3>
                <p style={{ maxWidth: '500px', margin: '0 auto' }}>
                    Bonsai integrates and automates every step of your business so it runs seamlessly - from proposal to tax season.
                </p>
                <div className='row my-4'>
                    <div className='col-md-6'>
                        <h4>Without Bonsai</h4>
                        <img src={withoutBonsaiImg} className='img-fluid mt-4'/>
                    </div>
                    <div className='col-md-6'>
                        <h4>With Bonsai</h4>
                        <img src={withBonsaiImg} className='img-fluid mt-4'/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeSecondTop;
