import React, { useState } from 'react'
import '../assets/css/job.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faFileAlt, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Job = () => {
    const bonsaiData = [
        {
            content: 'At Bonsai, we strive to hire ambitious and talented leaders who want to push the boundaries in their respective fields.',
        },
        {
            content: 'We are looking for resourceful experts and doers who love tackling big challenges and operating at high velocity.',
        },
        {
            content: "If you feel like this is you, we'd love for you apply to one of our open positions below.",
        },
        {
            title: 'About Bonsai',
            content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses. The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
        },
        {
            content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
        },
        {
            content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
        },
        {
            content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
        },
    ]

    const jobDetails = [
        {
            jobTitle: 'General Opportunities',
            jobType: 'Permenent',
            jobLocation: 'New York, Paris, or Remote',
            jobPosition: 'Others',
            spanClass: 'others',
            slugs: 'general-opportunities',
            defaultContent: [
                {
                    title: "Don't see an open role that's a fit right now?",
                    content: "We still want to hear from you! This is our General Opportunities posting. If you are interested in working with our team at Bonsai, but don't see an opportunity that suits your background or interests, feel free to apply to this posting and let us know why you're a good fit!",
                },
                {
                    content: "We'll keep your application on file for a minimum of 6 months and will reach out to you about any suitable open positions in the future!",
                },
            ],
            aboutBonsai: [
                {
                    content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses.The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
                },
                {
                    content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
                },
                {
                    content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
                },
                {
                    content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
                },
            ],
            benefits: [
                {
                    content: "Industry leading compensation package — we know you will have a large impact on the company and we strive to compensate accordingly",
                },
                {
                    content: "Unlimited holidays — we actually want you to take time off",
                },
                {
                    content: "Remote-work option — work from anywhere, always!",
                },
                {
                    content: "Visa sponsorship in Paris - if you would like to relocate and work in our Paris office",
                },
                {
                    content: "All-expenses paid team retreats — our last retreat was in Mexico!",
                },
                {
                    content: "Unlimited professional development stipend — books, classes, coaching, whatever you need",
                },
                {
                    content: "Strong culture of work / life balance — it's a marathon, not a sprint",
                },
                {
                    content: "Complete internal transparency — everyone sees everything within the company",
                },
            ]
        },
        {
            jobTitle: 'Head of Operations and Finance',
            jobType: 'Permenent',
            jobLocation: 'New York, Paris, or Remote',
            jobPosition: 'Operations',
            spanClass: 'operations',
            slugs: 'head-operations-and-finance',
            aboutBonsai: [
                {
                    content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses.The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
                },
                {
                    content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
                },
                {
                    content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
                },
                {
                    content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
                },
            ],
            aboutRole: [
                {
                    content: "We are looking for an experienced Head of Operations and Finance to oversee our organisation’s ongoing operations and finances procedures.",
                },
                {
                    content: "Working alongside the CEO, you will solve problems, lead initiatives and partner with internal teams to continuously improve operational and financial efficiencies.",
                },
                {
                    content: "For this role, you will develop a deep understanding of Bonsai's business model, and operational challenges across all products, as you will be responsible for a variety of operational procedures with direct business impact including:",
                    roleInnerDetails: [
                        {
                            innerTitle: 'Finance Operations:',
                            innerRoleContent: [
                                {
                                    content: "As a SaaS and Fintech company, Bonsai is built on a unique business model combining subscription and financial revenue, similar to how companies like Shopify, Square or Toast price their services. This makes leading our finance topics a key and high leverage responsibility.",
                                },
                                {
                                    content: "Your responsibility will include:",
                                    contentList: [
                                        {
                                            listLine: "Setting up our financial reporting capabilities",
                                        },
                                        {
                                            listLine: "Developing and maintaining forecasting models in coordination with our marketing and product team",
                                        },
                                        {
                                            listLine: "Running budgeting and month-end financial review sessions with our leadership team",
                                        },
                                        {
                                            listLine: "Partnering with our accounting firm to ensure key on-time and compliant financial reporting",
                                        },
                                        {
                                            listLine: "Collaborating with marketing to inform acquisition performances across channels and user segments",
                                        },
                                        {
                                            listLine: "Supporting deep dives on maximising key business metrics like payback or retention",
                                        },
                                        {
                                            listLine: "Working with our CEO to prepare for equity or debt fundraising",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Business Operations:',
                            innerRoleContent: [
                                {
                                    content: "You will partner with multiple cross-functional teams (Marketing, Product, Support, Data...) to design and implement optimisation opportunities",
                                },
                                {
                                    content: "Your responsibility will include:",
                                    contentList: [
                                        {
                                            listLine: "Researching, sizing and prioritising key strategic initiatives, like expanding to new countries or switching to new financial partners",
                                        },
                                        {
                                            listLine: "Suggesting and implementing operational improvements to increase our team's performance. This can include reviewing support team processes and queue management or marketing performance reporting",
                                        },
                                        {
                                            listLine: "Leading data-focused initiatives that enable team to make more informed decisions",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Payment Operations:',
                            innerRoleContent: [
                                {
                                    content: "As a fintech company, we do processes payments on behalf of our customers. Enabling them to collect payments requires us to maintain and optimise key procedures.",
                                },
                                {
                                    content: "Your responsibility will include:",
                                    contentList: [
                                        {
                                            listLine: "Actively monitoring, analysing, and reporting on the effectiveness of payment risk-related procedures",
                                        },
                                        {
                                            listLine: "Identifying risks and operational needs in new policies or product features, and working to ensure risks are contained, effectively mitigated, or removed on our payment product.",
                                        },
                                        {
                                            listLine: "Managing our risk team",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Qualifications',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "6+ years of relevant experience in investment banking, management consulting or at a finance/operations positions at a high growth startup",
                                        },
                                        {
                                            listLine: "Strong analytical and data processing skills",
                                        },
                                        {
                                            listLine: "Experience with SaaS and payment",
                                        },
                                        {
                                            listLine: "Business minded - You tie every decision and initiatives to a business or revenue goal",
                                        },
                                        {
                                            listLine: "Action oriented - You strive to deliver every day and keep high velocity. You don't hesitate to get your hands dirty to get things moving when you are stuck needing outside help of resources.",
                                        },
                                        {
                                            listLine: "Organized - You strive with or without complexity and resources. You know how to prioritize and lead initiatives with several stakeholders",
                                        },
                                        {
                                            listLine: "Bi-lingual in English",
                                        },
                                    ]
                                },
                            ]

                        }
                    ]
                },
            ],
            benefits: [
                {
                    content: "Industry leading compensation package — we know you will have a large impact on the company and we strive to compensate accordingly",
                },
                {
                    content: "Unlimited holidays — we actually want you to take time off",
                },
                {
                    content: "Remote-work option — work from anywhere, always!",
                },
                {
                    content: "Visa sponsorship in Paris - if you would like to relocate and work in our Paris office",
                },
                {
                    content: "All-expenses paid team retreats — our last retreat was in Mexico!",
                },
                {
                    content: "Unlimited professional development stipend — books, classes, coaching, whatever you need",
                },
                {
                    content: "Strong culture of work / life balance — it's a marathon, not a sprint",
                },
                {
                    content: "Complete internal transparency — everyone sees everything within the company",
                },
            ]
        },
        {
            jobTitle: 'Product Manager',
            jobType: 'Permenent',
            jobLocation: 'Remote',
            jobPosition: 'Product',
            spanClass: 'product',
            slugs: 'product-manager',
            aboutBonsai: [
                {
                    content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses.The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
                },
                {
                    content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
                },
                {
                    content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
                },
                {
                    content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
                },
            ],
            aboutRole: [
                {
                    content: "We are looking for a Product Manager on our Core Product Team who will be responsible for the development and execution of the product roadmap. This includes identifying and prioritizing new features and improvements, working closely with engineering and design to build and launch new features, and collaborating with other teams to drive growth.",
                },
                {
                    roleInnerDetails: [
                        {
                            innerTitle: 'Responsibilities',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "You will be the Product Manager for Bonsai’s Core Product (known as Workflow) which helps our customers with everything from winning new business and delivering projects, through to getting paid.",
                                        },
                                        {
                                            listLine: "You will work closely with the product development team and others to develop an impactful product roadmap that prioritizes new features, experiments and improvements based on customer feedback, market opportunities and business goals.",
                                        },
                                        {
                                            listLine: "You will conduct in-depth customer research and analysis to understand what problems our customers face and identify key areas for improvement.",
                                        },
                                        {
                                            listLine: "You will work closely with engineering and design to bring new solutions into our customers’ hands. This will include writing specifications and playing a project coordinator role to ensure a smooth release.",
                                        },
                                        {
                                            listLine: "You will work closely with Product Marketing to help shape public releases and drive the adoption of new features.",
                                        },
                                        {
                                            listLine: "You will define key success metrics for you and your team and analyze the performance of new releases.",
                                        },
                                        {
                                            listLine: "You will conduct A/B tests to optimize funnel metrics.",
                                        },
                                        {
                                            listLine: "You will play an active part in contributing to the overall product vision and strategy of Bonsai and helping discover new avenues for growth.",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Minimum Requirements',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "At least 3 years of relevant experience working on a consumer, SaaS or marketplace product as a Product Manager, ideally in a remote-first company.",
                                        },
                                        {
                                            listLine: "You have top tier communication skills including excellent written and spoken English.",
                                        },
                                        {
                                            listLine: "You have a strong track record of working with software engineers and designers to ship new products and features. Bonus points if you have a computer science or design background or equivalent technical experience.",
                                        },
                                        {
                                            listLine: "You posses good design and UX skills and are passionate about making software intuitive and user friendly.",
                                        },
                                        {
                                            listLine: "You have an excellent eye for detail and hold yourself and others to a high standard.",
                                        },
                                        {
                                            listLine: "You’re comfortable with using data to guide your decision making. Bonus points if you have experience using tools such as Amplitude, Mixpanel, Google Analytics, etc.",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'You’ll be a great fit if the following qualities apply to you:',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "Action oriented: you strive to have an impact every day and can work at a high velocity. You are proactive and know how to get things moving when your team are stuck.",
                                        },
                                        {
                                            listLine: "Team player: you are collaborative and know how to motivate others while working together to achieve an outcome.",
                                        },
                                        {
                                            listLine: "Desire for ownership and impact: you want to make a real impact on the business and always take responsibility for your decisions.",
                                        },
                                        {
                                            listLine: "Organized self-starter: you know how to prioritize your time effectively and get things done.",
                                        },
                                        {
                                            listLine: "Enthusiasm for your craft: you bring passion and energy to your role and are committed to continuous learning and professional development.",
                                        },
                                    ]
                                },
                            ]

                        },
                    ]
                },
            ],
            benefits: [
                {
                    content: "Industry leading compensation package — we know you will have a large impact on the company and we strive to compensate accordingly",
                }, ,
                {
                    content: "Remote-work option — work from anywhere, always!",
                },
                {
                    content: "All-expenses paid team retreats — our last retreat was in Mexico!",
                },
                {
                    content: "Professional development stipend — books, classes, coaching",
                },
                {
                    content: "Unlimited holidays",
                },
                {
                    content: "Strong culture of work / life balance",
                },

            ]
        },
        {
            jobTitle: 'Head of Customer Success',
            jobType: 'Permenent',
            jobLocation: 'North America',
            jobPosition: 'Customer Success',
            spanClass: 'customer-success',
            slugs: 'head-customer-success',
            aboutBonsai: [
                {
                    content: "Bonsai helps 500,000+ freelancers in 100+ countries start, run, and grow their businesses.The way the world works is changing: Freelancers make up 40% of the workforce today and will be 50%+ by 2030. People want flexible and independent careers. Companies want great on-demand talent. This is one of the largest shifts since the Industrial Revolution, but the tools to support it are stuck in the 20th or even 19th centuries!",
                },
                {
                    content: "That's where Bonsai comes in. We take care of a freelancer's admin work - contracts, proposals, invoices, payments, accounting & taxes and even banking - so they can focus on the work they love and just make money. Ask any freelancers you know... they'll tell you this is a huge and painful time suck.",
                },
                {
                    content: "We're profitable, growing very quickly, and are backed by some of the world's best investors (YC, Matrix Partners, Index Ventures).",
                },
                {
                    content: "We've also been 90% remote since 2016 and our team is spread across 9 different countries.",
                },
            ],
            aboutRole: [
                {
                    content: "We are looking for a Head of Customer Success who will be responsible for leading our customer success team. In this role, you will be responsible for ensuring that our customers achieve their desired outcomes and maximize the value they receive from our products and services. You will work closely with customers to understand their unique needs and help them succeed, while also identifying and communicating opportunities for product fixes/expansion with the team.",
                },
                {
                    roleInnerDetails: [
                        {
                            innerTitle: 'Responsibilities',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "Develop and execute a success plan for each quarter, including clear goals, milestones, and KPIs",
                                        },
                                        {
                                            listLine: "Collaborate with cross-functional teams, including product, engineering and marketing to ensure customer needs are being met",
                                        },
                                        {
                                            listLine: "Act as the primary point of contact for customers via live chat, building and maintaining strong relationships",
                                        },
                                        {
                                            listLine: "Proactively identify and resolve customer issues and roadblocks,",
                                        },
                                        {
                                            listLine: "Collect customer feedback and communicate it to internal teams to drive product improvements and enhance the overall customer experience",
                                        },
                                        {
                                            listLine: "Provide ongoing training and education to customers on our products and services",
                                        },
                                        {
                                            listLine: "Track and report on customer success metrics and communicate progress to internal and external stakeholders",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Minimum Requirements',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "6+ years of experience in a customer-facing role, with a proven track record of success in customer success, account management, or similar",
                                        },
                                        {
                                            listLine: "Excellent writing skills",
                                        },
                                        {
                                            listLine: "Ability to pick up multiple technological tools, quickly. We use Intercom, Slack, Notion, Excel/Google Sheets, Stripe.",
                                        },
                                        {
                                            listLine: "Possess a high level of understanding, patience, and empathy. Able to navigate more difficult conversations/interactions with professionalism.",
                                        },
                                        {
                                            listLine: "Commitment to continuous growth and learning. You understand that every challenge is an opportunity and you get excited about learning new things.",
                                        },
                                        {
                                            listLine: "This is a fully remote position",
                                        },
                                        {
                                            listLine: "Previous experience in SaaS and Customer Support (Email and Live Chat) is a must-have!",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'You’ll be a great fit if the following qualities apply to you:',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "Action oriented: you strive to have an impact every day and can work at a high velocity. You are proactive and know how to get things moving when your team is stuck.",
                                        },
                                        {
                                            listLine: "Team player: you are collaborative and know how to motivate others while working together to achieve an outcome.",
                                        },
                                        {
                                            listLine: "Desire for ownership and impact: you want to make a real impact on the business and always take responsibility for your decisions.",
                                        },
                                        {
                                            listLine: "Organized self-starter: you know how to prioritize your time effectively and get things done.",
                                        },
                                        {
                                            listLine: "Enthusiasm for your craft: you bring passion and energy to your role and are committed to continuous learning and professional development.",
                                        },
                                    ]
                                },
                            ]

                        },
                    ]
                },
            ],
            benefits: [
                {
                    content: "Attractive compensation — we know you will have a large impact on the company and we strive to compensate accordingly",
                }, ,
                {
                    content: "Remote-work option",
                },
                {
                    content: "All-expenses paid team retreats — our last retreat was in Mexico!",
                },
                {
                    content: "Strong culture of work / life balance",
                },

            ]
        },
        {
            jobTitle: 'Risk and Payment Operations Analyst',
            jobType: 'Permenent',
            jobLocation: 'Remote',
            jobPosition: 'Operations',
            spanClass: 'operations',
            slugs: 'risk-payment-operation-analyst',
            aboutRole: [
                {
                    content: "We are looking for a Risk and Payment Operations Analyst who will be responsible for reviewing activity across Bonsai’s FinTech offerings, Bonsai Payments and Bonsai Cash.",
                },
                {
                    content: "In this role, you will be primarily responsible for reviewing Bonsai Payments invoice transactions, inbound and outbound transfer activity for Bonsai Cash, managing investigations and escalations in partnership with our support team, and contributing to Bonsai’s overall Payment Operations and Risk Mitigation strategy.",
                },
                {
                    content: "You will work closely with our Customer Support, Financial Product, and Dev teams to ensure that our responses to threats and investigations move quickly and conclusive.",
                },
                {
                    roleInnerDetails: [
                        {
                            innerTitle: 'Responsibilities',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "Review Bonsai Payments Credit Card and ACH transactions daily to assess risk level and escalate as needed",
                                        },
                                        {
                                            listLine: "Review Bonsai Cash transactions and transfers daily to protect our users",
                                        },
                                        {
                                            listLine: "Review escalated new user sign ups and KYC verification sessions as needed",
                                        },
                                        {
                                            listLine: "Work with our support and product teams to craft and operate escalation processes for suspicious activity / users",
                                        },
                                        {
                                            listLine: "Investigate payment anomalies in real-time, coordinating with other teams to respond as necessary",
                                        },
                                        {
                                            listLine: "Work with the financial products team to consult on new and future FinTech features to craft comprehensive risk mitigation strategies",
                                        },
                                        {
                                            listLine: "Manage Bonsai’s transactional and subscription chargeback response, coordinating with customer support and product teams as necessary",
                                        },
                                        {
                                            listLine: "Keep the company updated on the current risk landscape and report on key metrics such as fraud loss, chargebacks, and unrecoverable funds",
                                        },
                                        {
                                            listLine: "Evolve and manage our risk mitigation goals for each quarter, including milestones, KPIs, and new initiatives",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'Minimum Requirements',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "4+ years of experience in a payment operations / risk analyst role, preferably with a banking product, with a proven track record of successful risk mitigation",
                                        },
                                        {
                                            listLine: "Experience with risk monitoring tools and APIs such as SEON or Sardine",
                                        },
                                        {
                                            listLine: "A deep understanding of the fraud and risk landscape across card/ACH payments and banking",
                                        },
                                        {
                                            listLine: "Experience working remotely and independently",
                                        },
                                        {
                                            listLine: "Commitment to continuous growth and learning. You understand that every challenge is an opportunity and you get excited about learning new things!",
                                        },
                                        {
                                            listLine: "This is a fully remote position",
                                        },
                                    ]
                                },
                            ]

                        },
                        {
                            innerTitle: 'You’ll be a great fit if the following qualities apply to you:',
                            innerRoleContent: [
                                {
                                    contentList: [
                                        {
                                            listLine: "Action oriented: you strive to have an impact every day and can work at a high velocity. You are proactive and know how to get things moving when your team is stuck.",
                                        },
                                        {
                                            listLine: "Team player: you are collaborative and know how to motivate others while working together to achieve an outcome.",
                                        },
                                        {
                                            listLine: "Desire for ownership and impact: you want to make a real impact on the business and always take responsibility for your decisions.",
                                        },
                                        {
                                            listLine: "Organized self-starter: you know how to prioritize your time effectively and get things done.",
                                        },
                                        {
                                            listLine: "Enthusiasm for your craft: you bring passion and energy to your role and are committed to continuous learning and professional development.",
                                        },
                                    ]
                                },
                            ]

                        },
                    ]
                },
            ],
            benefits: [
                {
                    content: "Attractive compensation — we know you will have a large impact on the company and we strive to compensate accordingly",
                }, ,
                {
                    content: "Remote-work option",
                },
                {
                    content: "All-expenses paid team retreats — our last retreat was in Mexico!",
                },
                {
                    content: "Strong culture of work / life balance",
                },

            ]
        },
    ]


    const [dropdownValue, setDropdownValue] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    // Filter the job postings based on the search query and department selection
    const filteredJobs = jobDetails.filter((job) => {
        const matchesDepartment = dropdownValue ? job.spanClass === dropdownValue : true;
        const matchesSearch = searchQuery ? job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) : true;
        return matchesDepartment && matchesSearch;
    })

    return (
        <>

            <div className='job-container'>
                <div className='row m-0'>
                    <div className='col-md-6'>
                        <h5>Open Positions</h5>
                        <h2 className='fw-bold my-4'>Bonsai</h2>
                        <div className='job-span-main'>
                            <div className='job-span text-center'><FontAwesomeIcon icon={faFileAlt} />&nbsp;&nbsp;Information Technology</div>
                            <div className='job-span text-center'><FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;20 - 50 people</div>
                        </div>

                        {
                            bonsaiData?.map((data, index) => (
                                <div key={index} className='my-4 job-bonsai-content'>
                                    <h6 className='fw-bold'>{data?.title}</h6>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6 form-group'>
                                <label>Search</label>
                                <input
                                    type='text'
                                    className='form-control my-2'
                                    placeholder='Search job'
                                    onInput={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <div className='col-md-6 form-group'>
                                <label>Department</label>
                                <select className='form-control my-2' value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                                    <option value=''>All Department</option>
                                    {
                                        jobDetails?.map((data, index) => (
                                            <option value={data?.spanClass} key={index}>{data?.jobPosition}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {
                                filteredJobs?.map((data, index) => (
                                    <Link
                                        to={`/job-details/${data?.slugs}`}
                                        state={{data}}
                                        key={index}
                                    >
                                        <div className='col-md-10 my-3 job-section'>
                                            <div className='px-3'>
                                                <h4 className='mb-4'>{data?.jobTitle}</h4>
                                                <div className='job-section-span-main'>
                                                    <div className='job-section-span'><FontAwesomeIcon icon={faBriefcase} />&nbsp;&nbsp;{data?.jobType}</div>
                                                    <div className='job-section-span'><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;{data?.jobLocation}</div>
                                                    <div className={`job-span-${data?.spanClass}`}>{data?.jobPosition}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Job

