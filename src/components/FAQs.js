import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../assets/css/faqs.css'; // Import custom CSS

const FAQs = () => {
    const accordianData = [
        {
            title: 'How does the free trial work?',
            content: "When you start your trial with Bonsai you'll receive full, unlimited access to all of Bonsai's Workflow or Workflow Plus Features! You will need to enter your credit card information to begin your trial, but don't worry - we won't charge you anything until the subscription ends! If you wish to cancel at any time during the trial period, you can do so through your Subscriptions Settings Page."
        },
        {
            title: 'Can I change plans anytime?',
            content: 'Yes, you can from within your account. If you have already subscribed to a plan, or want to downgrade or upgrade your current one, you can do this by going to your "Settings" and "Subscription".'
        },
        {
            title: 'How do I pause my Bonsai subscription?',
            content: "We totally understand that with the nature of freelancing, work ebbs and flows so you might not always need your Bonsai subscription to remain active! The good news is that you can cancel or pause your monthly subscription at any time without penalty. Once cancelled, you'll be able to continue logging in to access all your documents and even continue to use our free features, like Time Tracking! In order to cancel your subscription, login to your Bonsai account."
        },
        {
            title: 'What is your refund policy?',
            content: 'If you contact us within 2 weeks of being charged for your subscription, we will be happy to issue a refund for you! Beyond those 2 weeks, you will need to cancel or modify the subscription from the Subscriptions Tab in Settings to avoid future charges, but refunds will not be issued. This applies to both monthly and annual plans.'
        },
    ]

    return (
        <div className='container' style={{marginBottom:'3rem'}}>
            <div className='text-center' style={{ color: '#00b289', marginBottom: '40px' }}>
                <h2 className='fw-bold'>Frequently Asked Questions</h2>
            </div>
            <Accordion className='custom-accordion'>
                {accordianData.map((data, index) => (
                    <Accordion.Item className='custom-accordion-item' eventKey={index.toString()} key={index}>
                        <Accordion.Header className='custom-accordion-header'>
                            {data.title}
                        </Accordion.Header>
                        <Accordion.Body className='custom-accordion-body'>
                            {data.content}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
}

export default FAQs;
