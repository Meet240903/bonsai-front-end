import React from 'react'
import '../../assets/css/affiliateSectionCSS/affiliatesbottomsection.css'
import BottomImg1 from '../../assets/images/affiliates/bottom_img_1.svg'
import BottomImg2 from '../../assets/images/affiliates/bottom_img-2.svg'
import BottomImg3 from '../../assets/images/affiliates/bottom_img-3.svg'
import BottomImg4 from '../../assets/images/affiliates/bottom_img-4.svg'
import BottomImg5 from '../../assets/images/affiliates/bottom_img-5.svg'
import BottomImg6 from '../../assets/images/affiliates/bottom_img-6.svg'
import BottomImg7 from '../../assets/images/affiliates/bottom_img-7.svg'
import BottomImg8 from '../../assets/images/affiliates/bottom_img-8.svg'
import BottomImg9 from '../../assets/images/affiliates/bottom_img-9.svg'

const AffiliatesBottomSection = () => {
    const sectionData = [
        {
            image: BottomImg1,
            content: 'Share your affiliate link with your social media following, mailing list or YouTube channel.',
        },
        {
            image: BottomImg2,
            content: 'Share your affiliate link with your social media following, mailing list or YouTube channel.',
        },
        {
            image: BottomImg3,
            content: 'Share how you use Bonsai to make your freelancing easier and your clients happier.',
        },
        {
            image: BottomImg4,
            content: 'Partner with Bonsai for a webinar that you promote to your list and Bonsai will share our best practices on freelancing for free.',
        },
        {
            image: BottomImg5,
            content: 'Add Bonsai to your Resources page on your blog as your recommended freelancing tool.',
        },
        {
            image: BottomImg6,
            content: 'Write an in-depth review about Bonsai or do a video review or talk about it on your podcast and mention your affiliate link. Publish and share it with your email list.',
        },
        {
            image: BottomImg7,
            content: 'Add a Bonsai banner to your blog or website that uses your affiliate link to Bonsai.',
        },
        {
            image: BottomImg8,
            content: 'Add details about Bonsai, along with your affiliate link, to any pages or posts you have on how to start freelancing or manage and grow your freelance business.',
        },
        {
            image: BottomImg9,
            content: 'Write an e-book and link to Bonsai with your affiliate link.',
        },
    ]
    return (
        <>
            <div className='bottom-section'>
                <div className='text-center'>
                    <h3>The Possibilities Are Endless...</h3>
                    <p className='bottom-p'>Don’t know where to start? Here’s a few ideas to help you think of possible ways to share in Bonsai’s revenue.</p>
                </div>
                <div className='row'>
                    {
                        sectionData?.map((data) => (
                            <div className='col-md-6 bottom-content'>
                                <div className='d-flex gap-4 align-items-center'>
                                    <img src={data?.image} className='img-fluid' alt='bottom-img' />
                                    <p>{data?.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center'>
                    <h4>...or if you have a unique idea and need our support, drop us an email.</h4>
                </div>
            </div>
        </>
    )
}

export default AffiliatesBottomSection
