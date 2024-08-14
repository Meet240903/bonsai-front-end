import React from 'react'
import '../assets/css/privacypolicy.css'

const PrivacyPolicy = () => {
    const privacyData = [
        {
            title: 'Data Collected',
            content: [
                {
                    innerContent: 'We collect data from every visitor of the Website to monitor traffic and fix bugs. For example, we collect information like web requests, the data sent in response to such requests, the Internet Protocol address, the browser type, the browser language, and a timestamp for the request.',
                },
                {
                    innerContent: 'We ask you to log in and provide certain personal information (such as your name and email address) in order to be able to save your profile and the contracts associated with it. In order to enable these or any other login based features, we use cookies to store session information for your convenience. You can block or delete cookies and still be able to use Bonsai, although if you do you will then be asked for your username and password every time you log in to the Website. In order to take advantage of certain features of the Website, you may also choose to provide us with other personal information, such as your picture or personal website, but your decision to utilize these features and provide such data will always be voluntary.',
                },
                {
                    innerContent: 'You are able to view, change and remove your data associated with your profile. Should you choose to delete your account, please contact us at team@hellobonsai.com and we will follow up with such request as soon as possible.',
                },
                {
                    innerContent: 'Minors and children should not use Bonsai. By using the Website, you represent that you have the legal capacity to enter into a binding contract.',
                },
                {
                    innerContent: "In addition to the data we collect through your direct use of the software, Bonsai also integrates with third party applications to enhance the features it provides. In particular, Bonsai offers a Google integration that gives Bonsai access to your calendar information. This integration gives the software access to your calendars and their events in order to enhance our invoicing and tasks features with custom events creation acting as reminders directly in your calendar. Bonsai doesn't collect or store any data from existing events nor does it change them.",
                },
            ]
        },
        {
            title: 'Use of the Data',
            content: [
                {
                    innerContent: 'We only use your personal information to provide you the Bonsai services or to communicate with you about the services or the Website.',
                },
                {
                    innerContent: 'With respect to any contracts you create via Bonsai, we take the privacy and confidentiality of such contracts seriously.',
                },
                {
                    innerContent: 'We employ industry standard techniques to protect against unauthorized access of data about you that we store, including personal information.',
                },
                {
                    innerContent: 'We do not share personal information you have provided to us without your consent, unless:',
                    contentList: [
                        {
                            contentListData: 'i. doing so is appropriate to carry out your own request;',
                        },
                        {
                            contentListData: "ii. we believe it's needed to enforce our Terms of Service, or that is legally required;",
                        },
                        {
                            contentListData: "iii. we believe it's needed to detect, prevent or address fraud, security or technical issues;",
                        },
                        {
                            contentListData: 'iv. otherwise protect our property, legal rights, or that of others.',
                        },
                    ]
                },
                {
                    innerContent: "Bonsai is operated from the United States. If you are visiting the Website from outside the U.S., you agree to any processing of any personal information you provide us according to this policy.",
                },
                {
                    innerContent: "Bonsai may contact you, by email or other means. For example, Bonsai may send you promotional emails relating to Bonsai or other third parties Bonsai feels you would be interested in, or communicate with you about your use of the Bonsai website. Bonsai may also use technology to alert us via a confirmation email when you open an email from us. You can modify your email notification preferences by clicking the appropriate link included in the footer of email notifications. If you do not want to receive email from Bonsai, please opt out of receiving emails at the bottom of any Bonsai emails or by editing your profile preferences.",
                },
            ]
        },
        {
            title: 'Sharing of Data',
            content: [
                {
                    innerContent: 'Bonsai uses a variety of third party services to run and improve its services. These third party services rely on the data generated from activity on this website. Below are the third party services that we use:',
                    contentList: [
                        {
                            contentListData: 'i. Google Analytics and Mixpanel for understanding user behavior',
                        },
                        {
                            contentListData: "ii. Mailchimp, SendGrid, and Customer.io for sending emails to our users",
                        },
                        {
                            contentListData: "iii. Intercom.io for providing live chat support to our users",
                        },
                        {
                            contentListData: 'iv. Stripe and Baremetrics for managing subscription payments',
                        },
                        {
                            contentListData: 'v. Stripe for identity document verification. Stripe collects identity document images, facial images, ID numbers and addresses as well as advanced fraud signals and information about the devices that connect to its services. Stripe shares this information with us and also uses this information to operate and improve the services it provides, including for fraud detection. You may also choose to allow Stripe to use your data to improve Stripe’s biometric verification technology. You can learn more about Stripe and read its privacy policy at https://stripe.com/privacy.',
                        },
                    ]
                },
                {
                    innerContent: 'We employ and contract with people and other entities that perform certain tasks on our behalf and who are under our control (our “Agents”). We may need to share personal information with our Agents in order to provide products or services to you. Unless we tell you differently, our Agents do not have any right to use Personal Information or other information we share with them beyond what is necessary to assist us. You hereby consent to our sharing of Personal Information with our Agents.',
                },
                {
                    innerContent: 'We may choose to buy or sell assets. In these types of transactions, user information is typically one of the transferred business assets. Moreover, if we, or substantially all of our assets, were acquired, or if we go out of business or enter bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of us or our assets may continue to use your personal information as set forth in this policy.',
                },
            ]
        },
        {
            title: 'Cookie Policy',
            content: [
                {
                    innerContent: 'You can find our complete cookie policy on this address: https://www.iubenda.com/privacy-policy/35324406/cookie-policy',
                },
            ]
        },
        {
            title: 'User Access Request',
            content: [
                {
                    innerContent: 'Users have the right to understand what data is being used and how it is being used. You can receive this information by submitting a request to team at hellobonsai dot com. The information you will receive will include:',
                    contentList: [
                        {
                            contentListData: '- What personal information pertaining to the user is being processed',
                        },
                        {
                            contentListData: "- Why this information is being processed",
                        },
                        {
                            contentListData: "- Who has access to this personal information about the user",
                        },
                        {
                            contentListData: '- How this personal information is being used in automated decisions',
                        },
                        {
                            contentListData: '- What processes are using this information',
                        },
                    ]
                },
            ]
        },
        {
            title: 'Changes to the Privacy Policy',
            content: [
                {
                    innerContent: 'We may amend this Privacy Policy from time to time. Use of information we collect now is subject to the Privacy Policy in effect at the time such information is used. If we make major changes in the way we collect or use information, we will notify you by posting an announcement on the Website or sending you an email. A user is bound by any changes to the Privacy Policy when he or she uses the Services after such changes have been first posted.',
                },
                {
                    innerContent: 'Should you have any question or concern, please write to team at hellobonsai dot com.',
                },
            ]
        },
    ]
    return (
        <>
            <div className='container privacy-container'>
                <div className='text-center my-4'>
                    <h2>Legal</h2>
                </div>
                <div className='privacy-content'>
                    <span>i. Terms of Service</span>
                    <h2 className='my-3'>Privacy Policy</h2>
                    <p>At Bonsai, we collect and manage user data according to the following Privacy Policy. This document is part of Bonsai's Terms of Service, and by using HelloBonsai.com (the “Website”), you agree to the terms of this Privacy Policy and the Terms of Service. Please read the Terms of Service in their entirety, and refer to those for definitions and contacts.</p>
                    {
                        privacyData?.map((data) => (
                            <>
                                <h3 className='my-4'>{data?.title}</h3>
                                {
                                    data?.content?.map((contentData) => (
                                        <>
                                            <p>{contentData?.innerContent}</p>
                                            {
                                                contentData?.contentList?.map((listData)=>(
                                                    <p className='content-list-data'>{listData?.contentListData}</p>
                                                ))
                                            }
                                        </>
                                    ))
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
