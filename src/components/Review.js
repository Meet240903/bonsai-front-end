import React from 'react';
import '../assets/css/review.css';
import kevinImg from '../assets/images/kevin.jpg'
import jasonImg from '../assets/images/JasonCuray.jpg'

const Review = () => {
    const reviewData = [
        {
            image: kevinImg,
            content: 'I did a lot of research before switching to Bonsai from another invoicing service. The ability to send and sign contracts was a game changer for me. No one else offers such a seamless process from proposal to contract to invoice. It has saved me a lot of time and lets me focus on creative work.',
            name: 'Kevin Tudball',
            position: 'Illustrator'
        },
        {
            image: jasonImg,
            content: 'My #1 most used and favourite feature is the contracts, it has everything that I need, easy to customise and it automates invoice creation which saves me time.Bonsai is an efficient, effective, affordable, easy to use and empowering tool that allows me to do more important tasks.',
            name: 'Jason Curay',
            position: 'Digital Marketer'
        },
        {
            image: kevinImg,
            content: "I've been a Bonsai user for years. It has allowed me to grow my career as a fulltime freelancer especially with the ease of making contracts and collecting payments. With a variety of clients that are all on different payment schedules, Bonsai provided options for each client without difficulty. Now I am enjoying Bonsai even more that they have added the additional accounting and tax assistance. This quarter I was able to save so much more time filing quarterly tax payments thanks to the tax assistance feature. Thanks, Bonsai for understanding what freelancers need at every stage of their freelance career.",
            name: 'Diane Serra',
            position: 'Illustrator'
        },
        {
            image: jasonImg,
            content: "Bonsai has been absolutely essential in taking my freelance work from an amateur side-gig to a full-time business. It pays for itself 2x over in the time I save having everything so seamlessly integrated. I love how I'm able to send professional-looking invoices, track billable and non-billable hours, create to-do lists, track finances/expenses, and even create contracts and proposals all in one place. The integration with Google Calendar is a huge plus, the customer service is beyond stellar, the platform is really intuitive and easy to use... Really can't say enough good things about it.",
            name: 'Danica Mitchell',
            position: 'Illustrator'
        },
    ]
    return (
        <>
            <div className='text-center' style={{ marginTop: '5rem' }}>
                <h1>Bonsai Reviews</h1>
                <p>200,000+ Freelancers Love Bonsai. Here's why.</p>
                <small>Last Updated August 10, 2024</small>
            </div>
            <div className='container' style={{ marginTop: '3rem' }}>
                <div className='row'>
                    {
                        reviewData?.map((data) => {
                            return (
                                <>
                                    <div className='col-6 mb-4'>
                                        <div className='review'>
                                            <div className='my-4' style={{ textAlign: 'left' }}>
                                                <img src={data?.image} className='img-fluid rounded-circle' alt='user-img' style={{ height: '150px', width: '150px' }} />
                                            </div>
                                            <p>"{data?.content}"</p>
                                            <h4>{data?.name}</h4>
                                            <small>{data?.position}</small>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Review;
