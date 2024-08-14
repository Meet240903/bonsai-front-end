import React, { useState } from 'react';
import '../assets/css/footer.css'; // Make sure to create and include this CSS file
import { Link } from 'react-router-dom';
import { faClipboardCheck, faFileContract, faFileInvoiceDollar, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faFileLines, faFolder, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import proposalImg from '../assets/images/proposals.png';
import contractsImg from '../assets/images/contract.png';
import clientCrmImg from '../assets/images/clientcrm.png';
import timeTrackingImg from '../assets/images/timetracking.png';
import invoicesImg from '../assets/images/invoice.png';
import taskTrackingImg from '../assets/images/tasktracking.png';
import accountingTaxesImg from '../assets/images/accounting-taxes.png';
import formsImg from '../assets/images/forms.png';
import freelanceProposalImg from '../assets/images/freelanceProposals/proposals-graphic.png'
import freelanceContractImg from '../assets/images/freelanceContract/graphic_contracts.png'
import freelanceClientCRMImg from '../assets/images/freelanceClientcrm/bonsai-crm.png'
import freelanceTimeTrackingImg from '../assets/images/freelanceTimeTracking/time-tracking-img.png'
import freelanceInvoicesImg from '../assets/images/freelanceInvoices/invoicing_graphic.png'
import freelanceTaskManagementImg from '../assets/images/freelanceTaskTracking/tm-graphic.png'
import freelanceAccTaxesImg from '../assets/images/freelanceAccountingTaxes/graphic_accounting_taxes.png'
import freelanceFormsImg from '../assets/images/freelanceForms/forms_graphic.png'
import freelanceTemplateBrandingImg from '../assets/images/freelanceProposals/Templates_&_Branding.svg'
import freelanceServicePackageImg from '../assets/images/freelanceProposals/Service_Packages.svg'
import freelanceInstantApprovalImg from '../assets/images/freelanceProposals/Instant_Approval.svg'
import freelanceLookProffImg from '../assets/images/freelanceProposals/proposals_professional.png'
import freelanceFreeStructImg from '../assets/images/freelanceProposals/graphic_fee structure.png'
import freelanceNotificationImg from '../assets/images/freelanceProposals/notifications.jpeg'
import freelanceVettedTempImg from '../assets/images/freelanceContract/Vetted_Templates.svg'
import freelanceElectSignImg from '../assets/images/freelanceContract/Electronic_Signature.svg'
import freelanceAutoRemindersImg from '../assets/images/freelanceContract/Auto-Reminders.svg'
import freelanceProtectBussImg from '../assets/images/freelanceContract/graphic_Protect_Your_Business.png'
import freelanceStreamLineImg from '../assets/images/freelanceContract/sign contract.png'
import freelanceAutoRemNotificationImg from '../assets/images/freelanceContract/notifications.png'
import freelanceClientManageImg from '../assets/images/freelanceClientcrm/Client_Management.svg'
import freelanceProjectOrgImg from '../assets/images/freelanceClientcrm/Project_Organization.svg'
import freelanceFreeCollabImg from '../assets/images/freelanceClientcrm/Free_Collaboration.svg'
import freelanceNewClientListImg from '../assets/images/freelanceClientcrm/graphic_add_new_client.png'
import freelanceProjectDetailsImg from '../assets/images/freelanceClientcrm/graphic_project_details.png'
import freelanceAddColloboratorsImg from '../assets/images/freelanceClientcrm/work_with_others.png'
import freelanceEasilyBillableImg from '../assets/images/freelanceTimeTracking/Easily_Billable.svg'
import freelanceProjectBasedImg from '../assets/images/freelanceTimeTracking/Project-Based.svg'
import freelancecrossplateformImg from '../assets/images/freelanceTimeTracking/Cross-Platform.svg'
import freelanceCreateInvoiceImg from '../assets/images/freelanceTimeTracking/create_invoice.png'
import freelanceInvoiceTimesheetImg from '../assets/images/freelanceTimeTracking/invoice_timesheet.png'
import freelanceTimerImg from '../assets/images/freelanceTimeTracking/timer_graphic.png'
import freelanceEasyAutomationImg from '../assets/images/freelanceInvoices/Easy_Automation.svg'
import freelanceGlobalPaymentImg from '../assets/images/freelanceInvoices/Global_Payments.svg'
import freelanceProFeaturesImg from '../assets/images/freelanceInvoices/Pro_Features.svg'
import freelanceCreateInvImg from '../assets/images/freelanceInvoices/create_invoice.png'
import freelancePaymentMethodImg from '../assets/images/freelanceInvoices/payment-methods.png'
import freelanceNewCardImg from '../assets/images/freelanceInvoices/new_card_payment_graphic.png'
import freelanceSimpleEasyImg from '../assets/images/freelanceTaskTracking/Simple_Easy.svg'
import freelanceIntegratedTimerImg from '../assets/images/freelanceTaskTracking/Integrated_Timers.svg'
import freelanceCollaborationImg from '../assets/images/freelanceTaskTracking/Collaboration.svg'
import freelanceActiveTasksImg from '../assets/images/freelanceTaskTracking/active_tasks.png'
import freelanceInvoiceTimeSheetImg from '../assets/images/freelanceTaskTracking/invoice_timesheet.png'
import freelanceAddCollaboratorsImg from '../assets/images/freelanceTaskTracking/add_collaborators.png'
import freelanceExpenseTrackingImg from '../assets/images/freelanceAccountingTaxes/expense_tracking.svg'
import freelanceProfitLossImg from '../assets/images/freelanceAccountingTaxes/profit_loss.svg'
import freelanceTaxEstimatesImg from '../assets/images/freelanceAccountingTaxes/tax_estimates.svg'
import freelanceContractAccImg from '../assets/images/freelanceAccountingTaxes/contract.png'
import freelanceIncomeExpImg from '../assets/images/freelanceAccountingTaxes/graphic_income_expenses.png'
import freelanceTaxeStressFreeImg from '../assets/images/freelanceAccountingTaxes/make-taxes-stress-free.jpeg'
import freelanceClientsProjectsImg from '../assets/images/freelanceForms/Clients_Projects.svg'
import freelanceFlexibleFieldsImg from '../assets/images/freelanceForms/Flexible_Fields.svg'
import freelanceReusableFormsImg from '../assets/images/freelanceForms/Reusable_Forms.svg'
import freelanceIntegrateFormGraphicsImg from '../assets/images/freelanceForms/integrate_your_forms_graphic.png'
import freelanceCustomizeFieldsGraphicsImg from '../assets/images/freelanceForms/customize_fields_graphic.png'
import freelanceEffectiveGraphicsImg from '../assets/images/freelanceForms/be_more_effective_graphic.png'
import featureContractImg from '../assets/images/freelanceContract/explore_contracts.svg'
import featureClientCrmImg from '../assets/images/freelanceClientcrm/Projects_Client_CRM.svg'
import featureInvoicesImg from '../assets/images/freelanceInvoices/Explore_invoices.svg'
import featureProposalsImg from '../assets/images/freelanceInvoices/Explore_Proposals.svg'
import featuretimetrackingImg from '../assets/images/freelanceTimeTracking/time_tracking.svg'
import featuretaskmanagementImg from '../assets/images/freelanceTaskTracking/task_management.svg'

const Footer = () => {
    const MiddleSectionTitleList = [
        {
            title: 'Proposals',
            innerTitle: 'Win More Work',
            icon: faFileLines,
            slugs: 'proposals',
            content: 'With just a few clicks, you can craft structured proposals with clear estimates to close your deals faster.',
            image: proposalImg,
            freelanceTopSectionData: {
                freelanceIcon: faFileLines,
                freelanceTitle: 'Proposals',
                freelanceInnerTitle: 'Make proposals that help you win more work.',
                freelanceInnerContent: 'Create, send, and track proposals online with custom packages and electronic approvals.',
                freelanceInnerImg: freelanceProposalImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Proposals that create a seamless client experience and improve your acceptance rate.',
                innerServiceData: [
                    {
                        serviceTitle: 'Templates & Branding',
                        serviceImg: freelanceTemplateBrandingImg,
                        serviceContent: 'Use flexible proposal templates, scope of works templates or even quotes templates and add your own branding and offerings.',
                    },
                    {
                        serviceTitle: 'Service Packages',
                        serviceImg: freelanceServicePackageImg,
                        serviceContent: 'Add single or multiple package options to your proposals that your clients can choose from.',
                    },
                    {
                        serviceTitle: 'Instant Approval',
                        serviceImg: freelanceInstantApprovalImg,
                        serviceContent: 'Get notified when your proposal is viewed and let clients accept it on any device, anywhere.',
                    }
                ],
                outerServiceTitle1: 'Look Professional',
                outerServiceImg1: freelanceLookProffImg,
                outerServiceContent1: 'Create high-quality proposals in seconds with your project details and payment options. Send it off for electronic-approval or copy the secure link to send it yourself.',
                outerServiceTitle2: 'Upsell Service Packages',
                outerServiceImg2: freelanceFreeStructImg,
                outerServiceContent2: 'Along with flexible proposal editing, you can offer single or multiple service options for your clients to choose from. Start maximizing your earnings and close rate.',
                outerServiceTitle3: 'Streamline Approvals',
                outerServiceImg3: freelanceNotificationImg,
                outerServiceContent3: 'Track when your proposal has been viewed and make accepting as easy as possible with package selection and electronic-approval.',
                contactContent: 'Work smarter (not harder) using Bonsai.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Contracts',
                    featureContent: 'Protect your business with templated work contracts vetted by contract attorneys and thousands of freelancers.',
                    featureImg: featureContractImg,
                    featureSlugs: 'contracts'
                },
                {
                    featureTitle: 'Projects & Client CRM',
                    featureContent: 'Manage your leads, clients and ongoing projects all in one place, instead of juggling them across different software tools.',
                    featureImg: featureClientCrmImg,
                    featureSlugs: 'client-crm'
                },
            ]
        },
        {
            title: 'Contracts',
            innerTitle: 'Protect Your Business',
            icon: faFileContract,
            slugs: 'contracts',
            content: 'Simply answer a few questions to generate an already vetted contract template. Once you hit send, the contract can be e-signed in minutes.',
            image: contractsImg,
            freelanceTopSectionData: {
                freelanceIcon: faFileContract,
                freelanceTitle: 'Contracts',
                freelanceInnerTitle: 'Flexible contracts to secure your business.',
                freelanceInnerContent: 'Create & e-sign contracts from vetted templates. Get peace of mind and get on with your work.',
                freelanceInnerImg: freelanceContractImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Make sure you’re being professional and protected with customizable work contracts.',
                innerServiceData: [
                    {
                        serviceTitle: 'Vetted Templates',
                        serviceImg: freelanceVettedTempImg,
                        serviceContent: 'Use structured freelance contract templates your own custom agreements and even standard NDAs.',
                    },
                    {
                        serviceTitle: 'Electronic Signature',
                        serviceImg: freelanceElectSignImg,
                        serviceContent: 'Send, sign and store your legally-bindings online contracts with your clients.',
                    },
                    {
                        serviceTitle: 'Auto-Reminders',
                        serviceImg: freelanceAutoRemindersImg,
                        serviceContent: 'Auto-remind your client for their signature and receive a notification when it is signed.',
                    }
                ],
                outerServiceTitle1: 'Protect Your Business',
                outerServiceImg1: freelanceProtectBussImg,
                outerServiceContent1: 'Vetted by thousands of freelancers and top contract lawyers, select from a variety of contract templates or agreement templates to get started. Then, add your own customizations for your business.',
                outerServiceTitle2: 'Streamline E-Signature',
                outerServiceImg2: freelanceStreamLineImg,
                outerServiceContent2: 'Use a legally-binding e-signature to speed up the formalities when onboarding a new client relationship. Send it via Bonsai or using your own secure link.',
                outerServiceTitle3: 'Automate Reminders',
                outerServiceImg3: freelanceAutoRemNotificationImg,
                outerServiceContent3: 'Once sending your contract, stay up-to-date with automatic reminders to your client, as well as notifications for viewing and counter-signing.',
                contactContent: 'Secure your work with Bonsai contracts.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
                {
                    featureTitle: 'Proposals',
                    featureContent: 'Win more new client projects with powerful proposal software, service package offerings and electronic approval.',
                    featureImg: featureProposalsImg,
                    featureSlugs: 'proposals'
                },
            ]
        },
        {
            title: 'Client CRM',
            innerTitle: 'Stay Organized',
            icon: faFolder,
            slugs: 'client-crm',
            content: 'Manage your clients and ongoing projects all in one place. Organize all the documents, files and payments together for you and your client.',
            image: clientCrmImg,
            freelanceTopSectionData: {
                freelanceIcon: faFolder,
                freelanceTitle: 'Projects & Client CRM',
                freelanceInnerTitle: 'Manage your own digital workspace and client list.',
                freelanceInnerContent: 'From prospect to project and contract to payment, you can now manage everything all in one place.',
                freelanceInnerImg: freelanceClientCRMImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Save hours running your business by using powerful tools to keep it all organized.',
                innerServiceData: [
                    {
                        serviceTitle: 'Client Management',
                        serviceImg: freelanceClientManageImg,
                        serviceContent: 'Add leads, existing clients and internal notes to keep track of all your contacts.',
                    },
                    {
                        serviceTitle: 'Project Organization',
                        serviceImg: freelanceProjectOrgImg,
                        serviceContent: 'Fill your projects with all the documents, payments, tasks and timesheets you need.',
                    },
                    {
                        serviceTitle: 'Free Collaboration',
                        serviceImg: freelanceFreeCollabImg,
                        serviceContent: 'Invite other contractors to your projects to manage tasks and track time together.',
                    }
                ],
                outerServiceTitle1: 'Build Your Client List',
                outerServiceImg1: freelanceNewClientListImg,
                outerServiceContent1: 'Quit losing clients in your inbox and have a reliable system to track them with your ongoing work together. Add them with all your notes, contacts and tags.',
                outerServiceTitle2: 'Keep It Together',
                outerServiceImg2: freelanceProjectDetailsImg,
                outerServiceContent2: 'Organize all the todos, files and documents for your projects. Your clients even get their own project view to manage payments and contracts you’ve sent.',
                outerServiceTitle3: 'Work With Others',
                outerServiceImg3: freelanceAddColloboratorsImg,
                outerServiceContent3: 'Whether they’re a subcontractor or a co-worker, you can freely collaborate on projects with other users to assign them tasks and track time together.',
                contactContent: 'Spend time on your work, not losing track of it.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
                {
                    featureTitle: 'Task Management',
                    featureContent: 'Use simple task lists and create task templates on your projects to see what needs to be done. Set due dates and get email reminders.',
                    featureImg: featuretaskmanagementImg,
                    featureSlugs: 'task-tracking'
                },
            ]
        },
        {
            title: 'Time Tracking',
            innerTitle: 'Keep It Simple',
            icon: faClock,
            slugs: 'time-tracking',
            content: 'Easily track the time you are working, automatically populate timesheets and seamlessly switch between your projects for the day.',
            image: timeTrackingImg,
            freelanceTopSectionData: {
                freelanceIcon: faClock,
                freelanceTitle: 'Time Tracking',
                freelanceInnerTitle: 'The robust time tracker made for your workflow.',
                freelanceInnerContent: 'Manage your hours with ease with an all-in-one time tracker, timesheets and billing system.',
                freelanceInnerImg: freelanceTimeTrackingImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'A fully-featured time tracker that’s built specifically for online contract work and invoicing clients.',
                innerServiceData: [
                    {
                        serviceTitle: 'Easily Billable',
                        serviceImg: freelanceEasilyBillableImg,
                        serviceContent: 'Set an hourly rate per-project for tracking time and automatically invoicing the completed timesheet.',
                    },
                    {
                        serviceTitle: 'Project-Based',
                        serviceImg: freelanceProjectBasedImg,
                        serviceContent: 'Track time on projects with your collaborators and see how many hours still need to be billed.',
                    },
                    {
                        serviceTitle: 'Cross-Platform',
                        serviceImg: freelancecrossplateformImg,
                        serviceContent: 'Use the Bonsai time tracker on the web, mobile apps, macOS app and Chrome Extension.',
                    }
                ],
                outerServiceTitle1: 'Invoice Hours',
                outerServiceImg1: freelanceCreateInvoiceImg,
                outerServiceContent1: 'Set a project’s hourly rate, start tracking time and bill time to your client with a click. Round the time up to make the billing even smoother.',
                outerServiceTitle2: 'Centralize Timesheets',
                outerServiceImg2: freelanceInvoiceTimesheetImg,
                outerServiceContent2: 'Whether you’re tracking time as a team on a project or working solo, you can keep all your project’s timesheets in the same place to see the hours billed and to-be paid.',
                outerServiceTitle3: 'Use It Anywhere',
                outerServiceImg3: freelanceTimerImg,
                outerServiceContent3: 'Download the app on iOS, Android, Mac and Chrome so the time tracker works the way you do. Use a time tracker that supports your workflow.',
                contactContent: 'Simplify your workflow with Bonsai time tracking.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
                {
                    featureTitle: 'Task Management',
                    featureContent: 'Use simple task lists and create task templates on your projects to see what needs to be done. Set due dates and get email reminders.',
                    featureImg: featuretaskmanagementImg,
                    featureSlugs: 'task-tracking'
                },
            ]
        },
        {
            title: 'Invoices',
            innerTitle: 'Get Paid Faster',
            icon: faFileInvoiceDollar,
            slugs: 'invoices',
            content: 'Create and customize invoices, receive updates about payment timelines, and have automatic payment reminders sent on your behalf.',
            image: invoicesImg,
            freelanceTopSectionData: {
                freelanceIcon: faFileInvoiceDollar,
                freelanceTitle: 'Invoicing & Payments',
                freelanceInnerTitle: 'Get paid on time with smart, flexible invoicing.',
                freelanceInnerContent: 'Join thousands of freelancers getting paid faster with invoice automation, partial payments and more.',
                freelanceInnerImg: freelanceInvoicesImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Start using smart invoices designed to save time and get you paid without chasing clients.',
                innerServiceData: [
                    {
                        serviceTitle: 'Easy Automation',
                        serviceImg: freelanceEasyAutomationImg,
                        serviceContent: 'Auto-everything from creation, sending and reminding. Even automatic late fees.',
                    },
                    {
                        serviceTitle: 'Global Payments',
                        serviceImg: freelanceGlobalPaymentImg,
                        serviceContent: 'Choose from a variety of global payment options such as credit card, ACH and PayPal.',
                    },
                    {
                        serviceTitle: 'Pro Features',
                        serviceImg: freelanceProFeaturesImg,
                        serviceContent: 'Maximize your potential with attachment-locking, partial payments and more.',
                    }
                ],
                outerServiceTitle1: 'Automate It',
                outerServiceImg1: freelanceCreateInvImg,
                outerServiceContent1: 'Use smart invoicing to automatically create your next invoice, remind your client for payment, accrue an overdue late fee and send you read-receipts. Plus, you can use any of our invoice templates.',
                outerServiceTitle2: 'Always Get Paid',
                outerServiceImg2: freelancePaymentMethodImg,
                outerServiceContent2: 'Using Bonsai’s global payment options and smart invoicing features, freelancers get paid an average of 13 days faster and have 3x fewer late payments.',
                outerServiceTitle3: 'Invoice Like A Pro',
                outerServiceImg3: freelanceNewCardImg,
                outerServiceContent3: 'Once sending your contract, stay up-to-date with automatic reminders to your client, as well as notifications for viewing and counter-signing.',
                contactContent: 'Get paid more and on-time with Bonsai.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Time Tracking',
                    featureContent: 'Keep track of the hours you work every day, on every project and on every device. Add notes and the task completed with each new entry.',
                    featureImg: featuretimetrackingImg,
                    featureSlugs: 'time-tracking'
                },
                {
                    featureTitle: 'Contracts',
                    featureContent: 'Protect your business with templated work contracts vetted by contract attorneys and thousands of freelancers.',
                    featureImg: featureContractImg,
                    featureSlugs: 'contracts'
                },
            ]
        },
        {
            title: 'Task Tracking',
            innerTitle: 'Be More Effective',
            icon: faClipboardCheck,
            slugs: 'task-tracking',
            content: 'Give your day more structure with simple task management on your projects. Track time for each task and stay up-to-date.',
            image: taskTrackingImg,
            freelanceTopSectionData: {
                freelanceIcon: faClipboardCheck,
                freelanceTitle: 'Task Management',
                freelanceInnerTitle: 'Simple tasks built for your project workflow.',
                freelanceInnerContent: 'Prioritize the week for your ongoing projects and create reusable task templates for new ones.',
                freelanceInnerImg: freelanceTaskManagementImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Proposals that create a seamless client experience and improve your acceptance rate.',
                innerServiceData: [
                    {
                        serviceTitle: 'Simple & Easy',
                        serviceImg: freelanceSimpleEasyImg,
                        serviceContent: 'Add new tasks in seconds or reuse task templates you’ve saved on projects.',
                    },
                    {
                        serviceTitle: 'Integrated Timers',
                        serviceImg: freelanceIntegratedTimerImg,
                        serviceContent: 'Start new timers from your task list or assign new tasks to multiple hours you’ve billed.',
                    },
                    {
                        serviceTitle: 'Collaboration',
                        serviceImg: freelanceCollaborationImg,
                        serviceContent: 'Invite collaborators to your projects to assign tasks and add comments for each other.',
                    }
                ],
                outerServiceTitle1: 'Keep It Simple',
                outerServiceImg1: freelanceActiveTasksImg,
                outerServiceContent1: 'Whether you’re managing tasks for your business or specific projects, you can add new instantly. You can even set up custom templates for new projects.',
                outerServiceTitle2: 'Tie It Together',
                outerServiceImg2: freelanceInvoiceTimeSheetImg,
                outerServiceContent2: 'Track time on your tasks and the timesheet will show what was completed when billing your client. Continue billing hours for a project’s ongoing tasks easily.',
                outerServiceTitle3: 'Assign To Collaborators',
                outerServiceImg3: freelanceAddCollaboratorsImg,
                outerServiceContent3: 'Have multiple people on a particular project? Add a collaborator for free any time to manage tasks together without granting full access to the project.',
                contactContent: 'Complete your tasks with ease on Bonsai.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Time Tracking',
                    featureContent: 'Keep track of the hours you work every day, on every project and on every device. Add notes and the task completed with each new entry.',
                    featureImg: featuretimetrackingImg,
                    featureSlugs: 'time-tracking'
                },
                {
                    featureTitle: 'Projects & Client CRM',
                    featureContent: 'Manage your leads, clients and ongoing projects all in one place, instead of juggling them across different software tools.',
                    featureImg: featureClientCrmImg,
                    featureSlugs: 'client-crm'
                },
            ]
        },
        {
            title: 'Accounting & Taxes',
            innerTitle: 'Automate Your Finances',
            icon: faReceipt,
            slugs: 'accounting-and-taxes',
            content: "Don't worry about freelance finances when you have automatic expense tracking, income reporting and estimated tax planning.",
            image: accountingTaxesImg,
            freelanceTopSectionData: {
                freelanceIcon: faReceipt,
                freelanceTitle: 'Accounting & Taxes',
                freelanceInnerTitle: 'Accounting & taxes for your solo business.',
                freelanceInnerContent: 'Keep a pulse on your business finances with income reports, expense tracking, tax reminders and more.',
                freelanceInnerImg: freelanceAccTaxesImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Stay on top of your business with simple financial reporting and predictable tax payments.',
                innerServiceData: [
                    {
                        serviceTitle: 'Expense Tracking',
                        serviceImg: freelanceExpenseTrackingImg,
                        serviceContent: 'Import your expenses and automatically save with tax write-offs when filing.',
                    },
                    {
                        serviceTitle: 'Profit / Loss',
                        serviceImg: freelanceProfitLossImg,
                        serviceContent: 'Track your profit for different times of the year with your income and expense totals.',
                    },
                    {
                        serviceTitle: 'Tax Estimates',
                        serviceImg: freelanceTaxEstimatesImg,
                        serviceContent: 'Get quarterly and annual tax reminders along with tax estimates and due dates.',
                    }
                ],
                outerServiceTitle1: 'Automate Expenses',
                outerServiceImg1: freelanceContractAccImg,
                outerServiceContent1: 'Connect your bank account and your expenses will automatically be categorized for tax season and maximizing write-offs.',
                outerServiceTitle2: 'Control Your Finances',
                outerServiceImg2: freelanceIncomeExpImg,
                outerServiceContent2: 'Have peace of mind knowing all your monthly profit, business expenses and deductions are accounted for in one place.',
                outerServiceTitle3: 'Make Taxes Stress-Free',
                outerServiceImg3: freelanceTaxeStressFreeImg,
                outerServiceContent3: 'Download your Schedule C and tax write-offs in minutes. Use any of our tax templates. Receive reminders for your upcoming estimated tax payments.',
                contactContent: 'Never miss another tax payment or write-off.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
                {
                    featureTitle: 'Contracts',
                    featureContent: 'Protect your business with templated work contracts vetted by contract attorneys and thousands of freelancers.',
                    featureImg: featureContractImg,
                    featureSlugs: 'contracts'
                },
            ]
        },
        {
            title: 'Forms',
            innerTitle: 'Ask Your Clients',
            icon: faNewspaper,
            slugs: 'forms',
            content: 'Create your own customized forms and questionnaires for clients and kicking off new projects',
            image: formsImg,
            freelanceTopSectionData: {
                freelanceIcon: faNewspaper,
                freelanceTitle: 'Forms',
                freelanceInnerTitle: 'Custom client forms tailored to your business.',
                freelanceInnerContent: 'From client intake forms to project-ending surveys, you can now easily collect input from clients.',
                freelanceInnerImg: freelanceFormsImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'A lightweight form builder that is integrated perfectly into your client workflow.',
                innerServiceData: [
                    {
                        serviceTitle: 'Clients & Projects',
                        serviceImg: freelanceClientsProjectsImg,
                        serviceContent: 'Send forms to specific clients, on specific projects, for specific use-cases with ease.',
                    },
                    {
                        serviceTitle: 'Flexible Fields',
                        serviceImg: freelanceFlexibleFieldsImg,
                        serviceContent: 'With the customizable field types, you can create the perfect form to fit your needs.',
                    },
                    {
                        serviceTitle: 'Reusable Forms',
                        serviceImg: freelanceReusableFormsImg,
                        serviceContent: 'Standardize your end-to-end client process by reusing the same forms for  new projects.',
                    }
                ],
                outerServiceTitle1: 'Integrate Your Forms',
                outerServiceImg1: freelanceIntegrateFormGraphicsImg,
                outerServiceContent1: 'Forms that smoothly work with your client list and projects. From lead capture to client feedback surveys, start sending questionnaires that fit your workflow.',
                outerServiceTitle2: 'Customize Fields',
                outerServiceImg2: freelanceCustomizeFieldsGraphicsImg,
                outerServiceContent2: 'With flexible field types, you can get multiple-choice responses or free-form answers to best capture your client input. Make the forms your own.',
                outerServiceTitle3: 'Be More Effective',
                outerServiceImg3: freelanceEffectiveGraphicsImg,
                outerServiceContent3: 'Continue iterating on your questionnaires for new projects and improve your client experience. Send out the same forms or create a new one instantly.',
                contactContent: 'Start understanding your clients better today.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Projects & Client CRM',
                    featureContent: 'Manage your leads, clients and ongoing projects all in one place, instead of juggling them across different software tools.',
                    featureImg: featureClientCrmImg,
                    featureSlugs: 'client-crm'
                },
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
            ]
        },
        {
            title: 'Bonsai Tax',
            innerTitle: 'Ask Your Clients',
            icon: faNewspaper,
            slugs: 'bonsai-tax',
            content: 'Create your own customized forms and questionnaires for clients and kicking off new projects',
            image: formsImg,
            freelanceTopSectionData: {
                freelanceIcon: faNewspaper,
                freelanceTitle: 'Bonsai Tax',
                freelanceInnerTitle: 'Software for freelancers to track 1099 expenses & keep a peace of mind at tax time',
                freelanceInnerContent: 'Bonsai Tax is built exclusively for self-employed workers to track expenses, maximize tax write-offs, and estimate quarterly taxes',
                freelanceInnerImg: freelanceFormsImg,
            },
            freelanceServiceSectionData: {
                mainTitle: 'Save an average of $5,600 per year and avoid surprise bills at tax time',
                innerServiceData: [
                    {
                        serviceTitle: 'Track expenses',
                        serviceImg: freelanceClientsProjectsImg,
                        serviceContent: 'Auto-imports expense from bank and credit cards, then classify and track them on web and mobile apps',
                    },
                    {
                        serviceTitle: 'Identify write-offs',
                        serviceImg: freelanceFlexibleFieldsImg,
                        serviceContent: 'Bonsai Tax automatically identifies expenses that are deductible to save you extra money at tax time',
                    },
                    {
                        serviceTitle: 'Estimate quarterly taxes',
                        serviceImg: freelanceReusableFormsImg,
                        serviceContent: 'Never get caught by a surprise tax bill again. Bonsai Tax analyzes your spending to estimate taxes due',
                    }
                ],
                outerServiceTitle1: 'Automate Expenses',
                outerServiceImg1: freelanceIntegrateFormGraphicsImg,
                outerServiceContent1: 'Connect your bank and credit / debit card accounts to automatically import and organize tax receipts',
                outerServiceTitle2: 'Maximize Write-Offs',
                outerServiceImg2: freelanceCustomizeFieldsGraphicsImg,
                outerServiceContent2: 'Bonsai Tax is designed to identify and categorize receipts for taxes. So, our app can help you maximize your tax savings at the end of the year',
                outerServiceTitle3: 'Estimate Quarterly Tax',
                outerServiceImg3: freelanceEffectiveGraphicsImg,
                outerServiceContent3: 'Our tax software for freelancers uses your tracked income, expenses, and deductions to give you live estimates of the taxes you will owe',
                contactContent: 'Start saving on taxes and get financial peace of mind.',
            },
            relatedFeaturesData: [
                {
                    featureTitle: 'Invoices',
                    featureContent: 'Get paid on time using smart invoicing with automatic reminders, read-receipts and a variety of payment options.',
                    featureImg: featureInvoicesImg,
                    featureSlugs: 'invoices'
                },
                {
                    featureTitle: 'Contracts',
                    featureContent: 'Protect your business with templated work contracts vetted by contract attorneys and thousands of freelancers.',
                    featureImg: featureContractImg,
                    featureSlugs: 'contracts'
                },
            ]
        },
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-sections">
                    <div className="footer-section">
                        <h4>Product</h4>
                        <ul>
                            {
                                MiddleSectionTitleList?.map((data) => (
                                    <Link
                                        to={{
                                            pathname: `/freelance/${data.slugs}`,
                                        }}
                                        state={{ data }}  // Pass the data object as state
                                        key={data?.slugs}
                                    >
                                        <li>{data?.title}</li>
                                    </Link>
                                ))
                            }
                            <br /><br />
                            <a href='/pricing'><li>Pricing</li></a>
                            <a href='/review'><li>Bonsai Reviews</li></a>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>FREE Resources</h4>
                        <ul>
                            <li>Freelance Resources</li>
                            <li>Freelance Blog by Bonsai</li>
                            <li>How to Write a Contract</li>
                            <li>Online Signature Maker</li>
                            <li>Self-Employed Taxes Hub</li>
                            <li>Self-Employed Tax Calculator</li>
                            <li>Self-Employed Tax Deductions</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Templates</h4>
                        <ul>
                            <li>Invoice Templates</li>
                            <li>Proposal Templates</li>
                            <li>Contract Templates</li>
                            <li>Agreement Templates</li>
                            <li>Scope of Work Templates</li>
                            <li>Quote Templates</li>
                            <li>Credit Note Templates</li>
                            <li>Estimate Templates</li>
                            <li>Form Templates</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Bonsai</h4>
                        <ul>
                            <a href='/about'><li>About</li></a>
                            <li>Careers</li>
                            <li>Support</li>
                            <li>LinkedIn</li>
                            <li>Twitter</li>
                            <a href='/privacy'><li>Privacy policy</li></a>
                            <li>Legal</li>
                            <a href='/affiliate'> <li>Affiliates</li></a>
                            <li>Write for Us</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Comparisons</h4>
                        <ul>
                            <li>Freshbooks Alternatives</li>
                            <li>Quickbooks Alternatives</li>
                            <li>Wave vs Quickbooks</li>
                            <li>Xero vs Quickbooks</li>
                            <li>Freshbooks vs Quickbooks</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Bonsai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
