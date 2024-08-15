import React from 'react'
import '../../assets/css/bonsaiCashCSS/paymentsection.css'
import paymentImg from '../../assets/images/bonsaicash/payment_img.png'

const PaymentSection = () => {
    const paymentDetails = [
        {
            title: 'Physical Card',
            content: 'Get your new Bonsai card in your pocket in just a few days.',
        },
        {
            title: 'Virtual Card',
            content: 'Generate your virtual card for your online subscriptions and expenses.',
        },
        {
            title: 'Apple Pay',
            content: 'Add your new card to your Apple Wallet for easy in-store and online payments.',
        },
    ]
    return (
        <>
            <div className='payment-section-container'>
                <div className='text-center m-auto payment-heading'>
                    <h1 className='fw-bold'>Pay for your business expenses any way, anywhere</h1>
                </div>
                <div className='row mt-5'>
                    <div className='col-md-6'>
                        {
                            paymentDetails?.map((data, index) => (
                                <div className='payemnt-details'>
                                    <h2 className='my-3 fw-bold'>{data?.title}</h2>
                                    <p className='my-4'>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-6'>
                        <img src={paymentImg} className='fluid-img payment-img' alt='payment-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentSection
