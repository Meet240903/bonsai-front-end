import React, { useState, useEffect, useRef } from 'react';
import '../assets/css/header.css';
import bonsaiLogo from '../assets/images/bonsai-logo.svg';
import { Link } from 'react-router-dom';
import freelanceBonsaitaxImg from '../assets/images/freelaneBonsaiTax/graphic_accounting_taxes.png'
import freelanceExpenceTrackImg from '../assets/images/freelaneBonsaiTax/expense tracking.svg'
import freelanceLossImg from '../assets/images/freelaneBonsaiTax/loss.svg'
import freelanceEstimateQuartlytaxeImg from '../assets/images/freelaneBonsaiTax/tax estimates.svg'
import freelanceimportTrackExpImg from '../assets/images/freelaneBonsaiTax/Import_and_track_expenses.png'
import freelanceIdentifyTaxWriteImg from '../assets/images/freelaneBonsaiTax/identify_tax_write.png'
import freelanceEstimateQuartlyTaxe1Img from '../assets/images/freelaneBonsaiTax/Estimate_quarterly_taxes.png'
import formsImg from '../assets/images/forms.png';
import featureInvoicesImg from '../assets/images/freelanceInvoices/Explore_invoices.svg'
import featureContractImg from '../assets/images/freelanceContract/explore_contracts.svg'
import { faClipboardCheck, faFileContract, faFileInvoiceDollar, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faFileLines, faFolder, faNewspaper } from '@fortawesome/free-regular-svg-icons';
import proposalImg from '../assets/images/proposals.png';
import contractsImg from '../assets/images/contract.png';
import clientCrmImg from '../assets/images/clientcrm.png';
import timeTrackingImg from '../assets/images/timetracking.png';
import invoicesImg from '../assets/images/invoice.png';
import taskTrackingImg from '../assets/images/tasktracking.png';
import accountingTaxesImg from '../assets/images/accounting-taxes.png';
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
import featureClientCrmImg from '../assets/images/freelanceClientcrm/Projects_Client_CRM.svg'
import featureProposalsImg from '../assets/images/freelanceInvoices/Explore_Proposals.svg'
import featuretimetrackingImg from '../assets/images/freelanceTimeTracking/time_tracking.svg'
import featuretaskmanagementImg from '../assets/images/freelanceTaskTracking/task_management.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//template section images
import contractImg from '../assets/images/templates/contract.png'
import invoiceImg from '../assets/images/templates/invoice.png'
import templateimg from '../assets/images/templates/middleSectionImg.jpg'
import createAccImg from '../assets/images/templates/Contract/acc-first-img.png'
import createContractImg from '../assets/images/templates/Contract/create_contract.png'
import ChooseIndustryImg from '../assets/images/templates/Contract/choose-your-industry.png'
import ProjectDetImg from '../assets/images/templates/Contract/add_project_details.png'
import BasicInfoImg from '../assets/images/templates/Contract/basic_info.png'
import SoWImg from '../assets/images/templates/Contract/scope_of_work.png'
import PaymentImg from '../assets/images/templates/Contract/payment.png'
import InvoiceImg from '../assets/images/templates/Contract/integrate_invoices.png'
import SignContractImg from '../assets/images/templates/Contract/sign_contract.png'
import DownloadPDFImg from '../assets/images/templates/Contract/download_PDF.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [multiDropdownMenu, setMultiDropdownMenu] = useState(false);
    const [templateDropDown, setTemplateDropDown] = useState(false);
    const dropdownRef = useRef(null);
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
        }
    ];
    const data = {
        title: 'Bonsai Tax',
        innerTitle: 'Ask Your Clients',
        icon: faReceipt,
        slugs: 'bonsai-tax',
        content: 'Create your own customized forms and questionnaires for clients and kicking off new projects',
        image: formsImg,
        freelanceTopSectionData: {
            freelanceIcon: faReceipt,
            freelanceTitle: 'Bonsai Tax',
            freelanceInnerTitle: 'Software for freelancers to track 1099 expenses & keep a peace of mind at tax time',
            freelanceInnerContent: 'Bonsai Tax is built exclusively for self-employed workers to track expenses, maximize tax write-offs, and estimate quarterly taxes',
            freelanceInnerImg: freelanceBonsaitaxImg,
        },
        freelanceServiceSectionData: {
            mainTitle: 'Save an average of $5,600 per year and avoid surprise bills at tax time',
            innerServiceData: [
                {
                    serviceTitle: 'Track expenses',
                    serviceImg: freelanceExpenceTrackImg,
                    serviceContent: 'Auto-imports expense from bank and credit cards, then classify and track them on web and mobile apps',
                },
                {
                    serviceTitle: 'Identify write-offs',
                    serviceImg: freelanceLossImg,
                    serviceContent: 'Bonsai Tax automatically identifies expenses that are deductible to save you extra money at tax time',
                },
                {
                    serviceTitle: 'Estimate quarterly taxes',
                    serviceImg: freelanceEstimateQuartlytaxeImg,
                    serviceContent: 'Never get caught by a surprise tax bill again. Bonsai Tax analyzes your spending to estimate taxes due',
                }
            ],
            outerServiceTitle1: 'Automate Expenses',
            outerServiceImg1: freelanceimportTrackExpImg,
            outerServiceContent1: 'Connect your bank and credit / debit card accounts to automatically import and organize tax receipts',
            outerServiceTitle2: 'Maximize Write-Offs',
            outerServiceImg2: freelanceIdentifyTaxWriteImg,
            outerServiceContent2: 'Bonsai Tax is designed to identify and categorize receipts for taxes. So, our app can help you maximize your tax savings at the end of the year',
            outerServiceTitle3: 'Estimate Quarterly Tax',
            outerServiceImg3: freelanceEstimateQuartlyTaxe1Img,
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
    }

    const templateDropdownData = [
        {
            icon: faFileContract,
            title: 'Contract Template',
            slugs: 'contract-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Contract Templates',
                sectionContent: 'Welcome to our gallery of editable contract templates. You can search by industry to find a contract template specifically for your freelance profession. All of our contract templates have been legally vetted by top lawyers.',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering Contract Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel Contract Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What is a contract template?',
                    contentList: [
                        {
                            content: 'A contract is a legally binding agreement between you and your client. It’s as simple as that.',
                        },
                        {
                            content: 'A contract template is basically the draft version of the contract, with all your needs and requirements preloaded onto it (which you’ll be easily able to edit later on).',
                        },
                        {
                            content: 'With sections stating your job description, the intended work you’ll do, your payment details, and any other descriptives or legal requirements needed, a contract template is a must-have for freelancers and their clients to stay protected.',
                        },
                        {
                            content: 'Sounds easy, right? It doesn’t take a law firm to create a simple contract template.',
                        },
                        {
                            content: 'The real value here is that a contract template will save you a lot of time and effort when you’re negotiating with a new client. This means you can spend more time doing what actually makes you passionate, instead of the negotiations and the paperwork.',
                        },
                    ]
                },
                {
                    mainTitle: 'What information should be included in a contract?',
                    contentList: [
                        {
                            content: "Before you begin writing your own contract, you should always seek legal advice to make sure what you're making is actually a legally binding document.",
                        },
                        {
                            content: "That being said, every basic and formal contract should include these essential elements:",
                            innerContentList: [
                                {
                                    innerTitle: "1. WORK AND PAYMENT",
                                    childContent: [
                                        {
                                            content: "For the work and payment details section, you’ll want to include details on:",
                                        },
                                        {
                                            title: 'Project or job description',
                                            content: "This will include an outline of your full services for the client.",
                                        },
                                        {
                                            title: 'Timeframe of the contract',
                                            content: "You should detail your start and end date, as well as any service times. For example, a wedding photographer will want to state when they’ll arrive and when their breaks are throughout the day.",
                                        },
                                        {
                                            title: 'Payment details',
                                            content: "Here you’ll state what the client is paying you (whether that’s a flat fee, per hour, or something else), your payment schedule, as well as any deposits before the work starts. It’s common for a wedding photography contract to include any cancellation fees or non-refundable deposits.",
                                        },
                                        {
                                            title: 'Expenses',
                                            content: "You may need to travel, rent a hotel, or even purchase new clothes so you abide by a dress code for the job. Outline if the client is required to reimburse you for any expenses.",
                                        },
                                        {
                                            title: 'Invoice details',
                                            content: "Include how and when you’ll invoice the client. Outline when the due date is and any incurring late fees should they miss it.",
                                        },
                                        {
                                            title: 'Support',
                                            content: "You’ll want to agree on how much (if at all) support is provided to the client once the job is done. This can include editing or touching up photos if you’re a wedding photographer.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "2. OWNERSHIP AND LICENSES",
                                    childContent: [
                                        {
                                            content: "This section should include details on:",
                                        },
                                        {
                                            title: 'The client’s ownership of the work product',
                                            content: "This will be a detailed section stating that the client owns the final work product. You’ll want to agree on what that includes and when the client obtains ownership.",
                                        },
                                        {
                                            title: 'Your usage of the work product',
                                            content: "As freelancers, you can state any permissions the client gives you for using the final product. As a wedding photographer, you’ll want to have permission to showcase photos in your portfolio.",
                                        },
                                        {
                                            title: 'Help you provide secure ownership',
                                            content: "This section is for when the client needs your help to prove the product is theirs. You should agree that you’ll help the client secure ownership and if you aren’t available to help, the client can speak on your behalf.",
                                        },
                                        {
                                            title: 'Your intellectual property and usage',
                                            content: "Include details on intellectual property (IP) usage permissions and ownership.",
                                        },
                                        {
                                            title: 'The client’s intellectual property and usage',
                                            content: "Similar to the section above, the client also has IP that you may use as long as they give permission. This could include using their logo on your portfolio.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "3. COMPETITIVE ENGAGEMENTS",
                                    childContent: [
                                        {
                                            content: "Include a statement about any restrictions working with close competitors for the duration of the contract. Outline any partnership agreements you may have.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "4. NON-SOLICITATION",
                                    childContent: [
                                        {
                                            content: "You’ll want to outline any non-solicitation clauses here for you and the client.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "5. REPRESENTATIONS",
                                    childContent: [
                                        {
                                            content: "For a legally binding document, you should include a representations section which will cover:",
                                        },
                                        {
                                            title: 'Who has the authority to sign',
                                            content: "Basically, a statement that promises both parties to have the authority to sign.",
                                        },
                                        {
                                            title: 'The right to use the intellectual property involved with the final product',
                                            content: "Explain that the parties involved (including any independent contractors or subcontractors) have the right to use the IP involved with creating the final product.",
                                        },
                                        {
                                            title: 'You comply with law',
                                            content: "State that you promise to comply with the laws of the country that you are in.",
                                        },
                                        {
                                            title: 'The final product doesn’t infringe',
                                            content: "A promise that the final product doesn’t infringe on another party's IP.",
                                        },
                                        {
                                            title: 'The client promises to provide feedback',
                                            content: "Make a state about the client promising to give you feedback on the final product in a timely manner.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "6. TERMS AND TERMINATION",
                                    childContent: [
                                        {
                                            content: "This section will detail the terms and conditions around the termination of the contract. This could be on a particular date or after the completion of a specific project.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "7. INDEPENDENT CONTRACTOR",
                                    childContent: [
                                        {
                                            content: "Add in the details about the working relationship between you, as a freelancer or independent contractor, and the client. This can include things like whether or not you use your own equipment, if you’re provided training, or any tax responsibilities.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "8. CONFIDENTIAL INFORMATION",
                                    childContent: [
                                        {
                                            content: "Here you’ll explain the access and handling of confidential information between the two (or more) parties.",
                                        },
                                        {
                                            content: "Remember to add what kind of permission you and your client give and do not give each other.",
                                        },
                                        {
                                            content: "We recommend seeking legal advice for this section of the contract, as it can be very detailed and need specialist input.",
                                        },
                                        {
                                            title: 'The client’s confidential information',
                                            content: "Here you should determine what happens when you or the client come across each other’s confidential information. You'll also want to add any non-disclosure agreements here too, which would be helpful for protecting a company's trade secrets.",
                                        },
                                        {
                                            title: 'Third-party confidential information',
                                            content: "This is similar to the above clause, where you’ll mention the same or similar agreements should you come across the confidential information of a third party.",
                                        },
                                        {
                                            title: 'You comply with law',
                                            content: "State that you promise to comply with the laws of the country that you are in.",
                                        },
                                        {
                                            title: 'The final product doesn’t infringe',
                                            content: "A promise that the final product doesn’t infringe on another party's IP.",
                                        },
                                        {
                                            title: 'The client promises to provide feedback',
                                            content: "Make a state about the client promising to give you feedback on the final product in a timely manner.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "9. LIMITATION OF LIABILITY",
                                    childContent: [
                                        {
                                            content: "Here is a short statement basically explaining that neither party is liable if the other breaches the contract unknowingly.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "10. INDEMNITY",
                                    childContent: [
                                        {
                                            content: "This section involves legal protections and other formalities. You’ll want to state that if one party is fined or sued then there is no liability, damages, or expenses pushed onto the other party (you or the client).",
                                        },
                                        {
                                            content: "Remember to have two sections, one for each party involved.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "11. GENERAL",
                                    childContent: [
                                        {
                                            content: "This is a general overview of the contract agreement itself, which should include:",
                                        },
                                        {
                                            title: 'Assigning rights',
                                            content: "This statement is around the obligations of giving the contract over to another party should it need to happen.",
                                        },
                                        {
                                            title: 'Arbitration',
                                            content: "If a dispute between the parties involved can be resolved through arbitration.",
                                        },
                                        {
                                            title: 'Modifications or waivers',
                                            content: "If anything has to change in this legal document, both parties must agree to it in writing.",
                                        },
                                        {
                                            title: 'Notices terms',
                                            content: "State all the terms and conditions around giving notice.",
                                        },
                                        {
                                            title: 'Severability',
                                            content: "This explains what happens should there be any unenforceable parts of the contract.",
                                        },
                                        {
                                            title: 'Signature terms',
                                            content: "How both parties will be agreeing to sign the contract and what counts as an original copy.",
                                        },
                                        {
                                            title: 'Governing law',
                                            content: "A quick statement explaining that the contract is under the law of the governing body involved.",
                                        },
                                        {
                                            title: 'Contract validity',
                                            content: "A short sentence underlining the validity of the contract.",
                                        },
                                    ]
                                },
                                {
                                    innerTitle: "12. SIGNATURES & DATE",
                                    childContent: [
                                        {
                                            content: "In this section, both parties will add their signatures agreeing to the terms of the contract.",
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'How many copies of a contract do I need?',
                    contentList: [
                        {
                            content: 'You and your client should both have at least one copy of the originally signed contract and any formal documentation when required. Whether it’s an independent contractor agreement, partnership agreement, simple lease agreement, cleaning services agreement or rental agreement, any legally binding contract should be held by both parties in its original form. Photocopies are also a good idea – you never know when your original copy may be lost.',
                        },
                    ]
                },
                {
                    mainTitle: 'Do I need a lawyer or a notary?',
                    contentList: [
                        {
                            content: 'Remember that for any major services or deals you should always include a lawyer or a notary. However, depending on the type of work you do, legal counsel isn’t always necessary when it comes to independent contractor contracts.',
                        },
                    ]
                },
                {
                    mainTitle: 'How to create your contract',
                    contentList: [
                        {
                            content: 'Below is a step-by-step guide on how to create your contract.',
                        },
                    ]
                },
            ],
            accordianData: [
                {
                    title: "Create an account",
                    contentList: [
                        {
                            content: "First, set up a Bonsai account. The only information you need to enter is your name and email address.",
                        },
                    ],
                    accordianImg: createAccImg,
                },
                {
                    title: "Click on 'create contract'",
                    contentList: [
                        {
                            content: "Once signed into Bonsai, you can jump right into creating a contract by going to your Dashboard and choosing create a contract.",
                        },
                    ],
                    accordianImg: createContractImg,
                },
                {
                    title: "Choose your industry",
                    contentList: [
                        {
                            content: "That takes you right to the first step in creating a contract, including a drop-down menu where you select your industry.",
                        },
                    ],
                    accordianImg: ChooseIndustryImg,
                },
                {
                    title: "Fill in the project details",
                    contentList: [
                        {
                            content: "Make sure you also insert a client name, type of project, choosing standard template, and then selecting template type. For this example, we are using a sample client, and a blog post contract template for a freelance writing business.",
                        },
                    ],
                    accordianImg: ProjectDetImg,
                },
                {
                    title: "Enter basic information",
                    contentList: [
                        {
                            content: "The next step will walk you through information for the contract, starting with your location, including which state in the United States.",
                        },
                        {
                            content: "You select whether you work through a company, and if you do, there are different company structures from which to choose, and then you insert the company name and your title.",
                        },
                    ],
                    accordianImg: BasicInfoImg,
                },
                {
                    title: "Describe the scope of work",
                    contentList: [
                        {
                            content: "Based on the choice of a writer doing a blog post, this section is auto-populated, but you can easily change the contents to describe what you will be doing for the client.",
                        },
                        {
                            content: "You can also attach a statement of work, which is another time-saver. You can have a variety of your standard work tasks saved and ready to be attached, which makes the contracts simple and easy to do, and any in-depth details about the work can be in the statement of work document.",
                        },
                    ],
                    accordianImg: SoWImg,
                },
                {
                    title: "Include payment details",
                    contentList: [
                        {
                            content: "You can choose from a multitude of payment options, including a flat fee, milestones, and hourly, daily, weekly and monthly rates.",
                        },
                        {
                            content: "If you choose milestones, for instance, you then add the amount and add the milestone dates, with the option to add as many as you need. If you choose hourly, you insert your rate. It’s so simple and flexible.",
                        },
                    ],
                    accordianImg: PaymentImg,
                },
                {
                    title: "Integrate your invoices",
                    contentList: [
                        {
                            content: "In the final step, you reap even greater benefits from the Bonsai system, because the contract you just created, complete with payment terms, is integrated with an invoicing system. That means your invoices are already done based on the contract.",
                        },
                        {
                            content: "You have the flexibility to decide whether or not you want the system to create the invoices, and whether or not you want them sent automatically. As stated, you can always review and edit them before they’re sent.",
                        },
                    ],
                    accordianImg: InvoiceImg,
                },
                {
                    title: "Sign the contract",
                    contentList: [
                        {
                            content: "Once you’ve made all the edits and you’re ready to finalize the contract, sign contract is the final step.",
                        },
                        {
                            content: "Then, you will simply type in your name, and a signature is created with your email address below it.",
                        },
                        {
                            content: "You’re then ready to send the contract to your client. When they receive it, there’s a section for them to sign next to your e-signature, with the legal binding statement that means it’s official. You can start your work.",
                        },
                    ],
                    accordianImg: SignContractImg,
                },
                {
                    title: "Save as PDF",
                    contentList: [
                        {
                            content: "But you can do more, by choosing the More Options drop-down menu. If you haven’t yet sent the contract, you can un-sign it and edit it. You can duplicate it, delete it, and download it as a PDF.",
                        },
                        {
                            content: "If you choose View Project, you’ll get a dashboard that displays an overview, including the client’s name, invoices, time tracking and more.",
                        },
                        {
                            content: "And, perhaps best of all, you can turn this contract into a contract template. Then you’ll be able to use this work time and again, for various clients and projects.",
                        },
                    ],
                    accordianImg: DownloadPDFImg,
                },
            ]
        },
        {
            icon: faFileLines,
            title: 'Proposals Template',
            slugs: 'proposals-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Proposal Templates',
                sectionContent: 'Welcome to our gallery of proposal templates. You can search by industry to find a proposal template specifically for your freelance profession.',
                buttonContent: 'START CREATING YOUR PROPOSAL',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering Proposals Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel Proposals Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What Are Proposal Templates?',
                    contentList: [
                        {
                            content: 'A proposal template is the skeleton document you adapt to win business from new and existing clients. Your proposal template includes all the specific information your prospective client needs to know how you will solve their challenges, and the goals you want to accomplish with them. All you need to do is adapt your proposal template for each client.',
                        },
                        {
                            content: 'With business proposals, you introduce who you are, what your business does, and what you’ve achieved. You also run through the details of what you’re planning to accomplish for your potential client. Proposals can look however you need them to, they can be a fully-fledged business plan, a design proposal, or even a marketing proposal—it depends on what you do.',
                        },
                        {
                            content: 'Proposal templates are a great way to streamline and improve your proposal workflow. Having a proposal template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.',
                        },
                    ]
                },
                {
                    mainTitle: 'Why Use a Proposal Template?',
                    contentList: [
                        {
                            content: "There are some obvious reasons why you should use a templated proposal:",
                            contentUlList: [
                                {
                                    content: "Creating a reusable document saves precious time and energy",
                                },
                                {
                                    content: "It allows you to be consistent with your tone and messaging",
                                },
                                {
                                    content: "You can add your branding to the document, to make you look more professional than the competition",
                                },
                                {
                                    content: "It provides clarity to your prospective client, laying out exactly what you can do, the duration, and how much it will cost",
                                },
                                {
                                    content: "You can track and monitor the pitches you send, adjusting as you go, rather than starting from scratch each and every time",
                                },
                            ]
                        },
                        {
                            content: "But a proposal is so much more than simply a list of your services with prices attached.",
                        },
                        {
                            content: "Firstly, it’s your opportunity to lay the groundwork for a potentially fruitful working relationship. By using a proposal template, you get to establish smooth lines of communication, define expectations, and demonstrate that you understand the needs, goals, and ideas of the client.",
                        },
                        {
                            content: "That last part is crucial because, if you’re responding to an RFP (“request for proposal” — sometimes called a “request for pitch”) you need to show that you’ve read and understood the initial brief. If you can’t do that, you’ve fallen at the first hurdle.",
                        },
                        {
                            content: "Then there’s the aesthetics. Your proposal should be an extension of your brand, and, as Jeff Bezos said, “your brand is what other people say about you when you’re not in the room.”",
                        },
                        {
                            content: "By using a proposal template, you can control how your brand is perceived every time you pitch for new work. And by positioning yourself right, you can charge higher rates and work with a better quality of client.",
                        },
                        {
                            content: "Finally, your proposal can act as a framework for your contract. It’s your chance to clear up any misunderstandings, ask the right questions, and (importantly) get the answers to those questions.",
                        },
                        {
                            content: "Once your prospect accepts your proposal, you can then take the milestones and costs they’ve approved, and simply sweep them into your contract. Seamless.",
                        },
                    ]
                },
                {
                    mainTitle: '8 Common Mistakes to Avoid While Using Proposal Templates',
                    contentList: [
                        {
                            content: 'While it’s undoubtedly true that using a proposal template can speed things up when it comes to pitching for new work, there are still some pitfalls you need to avoid.',
                        },
                        {
                            content: 'By understanding what these are, you can tweak your template to make sure you aren’t making common mistakes. That’s the downside to a template — if one error slips the net, you’ll end up repeating it every time you make a new proposal.',
                        },
                        {
                            content: 'Luckily, at Bonsai, we’ve worked with over 150,000 freelancers, many of whom are firmly in the top 1% when it comes to earnings and reputation.',
                        },
                        {
                            content: 'We’ve asked them to share their top mistakes, and how best to avoid them:',
                        },
                    ],
                    mistakeList: [
                        {
                            mistakeTitle: "Placing too much focus on your experience.",
                            contentList: [
                                {
                                    content: "Many freelancers get this wrong when writing a proposal. They get so swept up in selling themselves that they forget what it is their prospect wants to know: “How can you help me?”"
                                },
                                {
                                    content: "Yes, it’s important to instil confidence that you’re the right person for the job. But don’t drone on about all your accomplishments and experiences. Make it clear and concise that you know what you’re doing, then move onto the task at hand, which is, of course, selling the solution."
                                },
                                {
                                    content: "In short, make sure your proposal isn’t all about you. A short blurb and a few bullet points should be enough to capture all the relevant info."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Being too salesy.",
                            contentList: [
                                {
                                    content: "The flipside to mistake number one is that some freelancers tend to overcorrect. Instead of talking about themselves, they jump straight into sales mode, which can set the wrong tone from the outset."
                                },
                                {
                                    content: "Most successful freelancer-client relationships come about due to the fact that they’re framed as partnerships. You’re going to work together to overcome these challenges and deliver results."
                                },
                                {
                                    content: "To do this, you need to make a connection with your words. You need to treat your prospect as a human being, build trust, and get to know them better. If you fail to do this, you can come across as a sleazy salesperson trying to make a quick buck, rather than a focused freelancer who truly cares about their client’s goals."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the same cover letter over and over.",
                            contentList: [
                                {
                                    content: "Another downside to using a template is the temptation to write something once and never change it. This is especially true of your cover letter. While other parts of your template can stay the same, you should spend some time tweaking (or rewriting) your cover letter to make sure it meets the client’s expectations."
                                },
                                {
                                    content: "It’s your opportunity to demonstrate that you’ve read and understood the brief, setting the tone for the rest of the proposal. If it appears generic, there’s a good chance your pitch will be dismissed, no matter how good your proposed solution."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Sending long proposals.",
                            contentList: [
                                {
                                    content: "By now, it’s probably apparent that the key to a successful freelance proposal is balance. You might think that pouring hours into creating the perfect proposal will enhance your chances of winning the bid, but in most cases, the opposite is true."
                                },
                                {
                                    content: "If you make your proposal too long, you’ll fail to engage your prospect. Short and to the point will almost always win the day. Remember, you’ll have plenty of time to dig into the detail when you win the job. This is about making a quick and meaningful connection — not writing War and Peace."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Not sending a proposal quickly.",
                            contentList: [
                                {
                                    content: "You’d think this would be a slam dunk when you’ve got a proposal template at your fingertips. And yet, some freelancers are still slow out the blocks when it comes to sending a proposal."
                                },
                                {
                                    content: "When a potential client reaches out, whether it’s informally through social media or via your website, or formally with an RFP, chances are they’re excited to get going. They’ve got an idea, and they need your expert help to make it happen."
                                },
                                {
                                    content: "If you’re slow in sending your proposal, you’re effectively failing to match their excitement, and that’ll show. Clients want to work with freelancers who want to work with them."
                                },
                                {
                                    content: "Don’t allow the fact that you’ve got a template to lure you into a false sense of security where time is concerned! Your competition won’t hang around. Snap to it."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the wrong language around price.",
                            contentList: [
                                {
                                    content: "This is something the top 1% nail time and again — value language. When you’re creating the pricing section of your freelance proposal, it’s your opportunity to frame the tricky subject of cost in a positive light. By using the word “investment”, you’re moving the focus away from “money spent” to “money invested”."
                                },
                                {
                                    content: "It really is that simple. With one minor switch, you’re able to provoke a different psychological response. An “investment” suggests that they’ll see benefits or results, whereas “cost” is simply money out the door with nothing in return."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Failing to highlight ROI (return on investment).",
                            contentList: [
                                {
                                    content: "Just because you’ve tweaked the language in your pricing section, don’t assume that every potential client will understand the benefits of working with you. Your proposal needs to hammer those benefits home."
                                },
                                {
                                    content: "To that end, make sure you include a section that highlights precisely what your prospect will get in return for working with you. If you can demonstrate that, by purchasing your service, they’ll receive benefits far in excess of the cost, you’ll put their mind at ease — and stand out from the competition."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Forgetting to follow up.",
                            contentList: [
                                {
                                    content: "Many freelancers think that sending their proposal is the end of the conversation–it couldn't be further from the truth. Once you've edited your proposal template and send it on its way, you need to follow up."
                                },
                                {
                                    content: "Did your prospective client receive it? Do they have any questions? Perhaps, they've simply not had time to look at it yet and will be grateful for the reminder."
                                },
                                {
                                    content: "Sending a few emails after a proposal is the best way to follow up on it, but remember that your proposal–however fantastic it is–is not their only priority. After all, your client has a business function to run. So, send an email 24hr later asking to confirm if they've received it, and if they have any questions, maybe even let them know when you're expecting their response–in a subtle way."
                                },
                                {
                                    content: "By following up on it, you show your interest, and by being respectful of their time, you show them that you understand the time constraints their business has–and all of this proves to them you're someone that would be a great partner to them!"
                                },
                                {
                                    content: "Note: Bonsai's proposals actually save you the headache of remembering to follow up. You can track when your proposal has been viewed and make accepting as easy as possible with package selection and electronic approval."
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'What a Good Proposal Template Includes',
                    contentList: [
                        {
                            content: "Now that you know some of the benefits of using a template, and some of the most common mistakes you need to avoid, let’s take a look at the key elements of a proposal template.",
                        },
                        {
                            content: "For starters, every template will require certain information that will remain the same, including:",
                            contentUlList: [
                                {
                                    content: "A cover page; with your name, your freelance business name and address, and your logo or business branding",
                                },
                                {
                                    content: "Short personal statement; outlining your background, experience, business and maybe some of your team members",
                                },
                                {
                                    content: "Executive summary; a brief summary of what you’re about to present",
                                },
                                {
                                    content: "Goals and objectives; what you’re trying to achieve with the proposal and how you plan to solve the client's challenge",
                                },
                                {
                                    content: "Scope of work; the nitty-gritty details of the project or business proposal plan",
                                },
                                {
                                    content: "Timeline; time is money, and clients will want to see how long your work will take",
                                },
                                {
                                    content: "Previous projects; you're only as good as your past achievements, so showcase them. Add customer testimonials",
                                },
                                {
                                    content: "Return on investment (ROI); what revenue goals do you believe your solution will obtain for the client",
                                },
                                {
                                    content: "Payment terms; accepted forms of payment (i.e., do you accept credit cards?) and when you expect to be paid (15 days, 30 days, etc.)",
                                },
                                {
                                    content: "Terms and conditions; including late fees, confidentiality, and copyright, etc",
                                },
                                {
                                    content: "Final CTA; let them know how to contact you and the following steps",
                                },
                            ]
                        },
                        {
                            content: "Next, you need to include sections for the information that you’ll adapt as per the brief. This ensures that your format will remain consistent, even if this info changes from one pitch to the next.:",
                            contentUlList: [
                                {
                                    content: "Client reference number; for your own records (include the date)",
                                },
                                {
                                    content: "A cover letter; outlining your understanding of the brief and how you plan to solve the client's problem",
                                },
                                {
                                    content: "Resources needed; A list of the resources, client assets and information you need to deliver your work",
                                },
                                {
                                    content: "Acceptance date; a date by which the proposal must be accepted.",
                                },
                            ]
                        },
                        {
                            content: "Note: When you’re creating your proposal using an editable template, you need to be meticulous when it comes to spelling and proofreading. If you profess to have “an eye for detail” while your proposal is riddled with errors, it (and you) won’t be taken seriously. Get someone you trust to check it over when you think it’s ready.",
                        },
                    ]
                },
                {
                    mainTitle: 'When to Use a Proposal Template?',
                    contentList: [
                        {
                            content: "The way in which you pitch your services is a reflection of you and your business.",
                        },
                        {
                            content: "You could simply draft a few lines in an email, add an estimated cost, and hit send, but you’ll appear uninterested in the client's project.",
                        },
                        {
                            content: "You could also open a blank document and try to write a full proposal from scratch, but you might miss key information, or write too much and miss the point of the brief entirely. Structure is just as important as the content.",
                        },
                        {
                            content: "Now, imagine the alternative. Instead of doing too much or too little, you simply produce a polished proposal that covers all the key points and guides the prospect through your solution.",
                        },
                        {
                            content: "It’s not too long. It’s not too short. It’s just right. And if you do that, you’ll come across as professional, considered, and in control. With that in mind, you can use a proposal template whenever you’re pitching for new work:",
                            contentUlList: [
                                {
                                    content: "Formal response to an RFP; gather information and insert it into your template, building a professional-looking document that demonstrates your knowledge and understanding of the task at hand.",
                                },
                                {
                                    content: "A less formal, cold pitch; you can use your template to once again build out a considered solution to a problem the client may not even realize they’re experiencing. Seeing it laid out in a proposal document would make it far more compelling than if it arrived in a short, easily dismissed email.",
                                },
                            ]
                        },
                        {
                            content: "Either way, a template can bring structure to your pitching process and help you win more than you lose.",
                        },
                    ]
                },
                {
                    mainTitle: 'Advantages of Proposal Templates',
                    contentList: [
                        {
                            content: "There are plenty of advantages in using a free proposal template and even more when using one of Bonsai’s! Take a look:",
                            contentUlList: [
                                {
                                    content: "You can turnaround proposals quicker than if you were writing them from scratch, which increases your chances of winning business. You can respond to a client’s request sooner than the competition",
                                },
                                {
                                    content: "Templates provide complete consistency. By using a template, you can produce several proposals in quick succession, and tailor each for a specific brief.",
                                },
                                {
                                    content: "Templates can also encapsulate your brand. From the colours you use to your logo, font, and tone of voice, you can position yourself in whatever way you want to be perceived",
                                },
                                {
                                    content: "They help free up your time — time that can be spent on other important freelance tasks",
                                },
                                {
                                    content: "It becomes a repeatable process, and one you can tweak and improve as you go. You don’t have to completely reinvent the wheel each and every time you send out a new proposal. You’ll soon have an idea of what works and what doesn’t.",
                                },
                                {
                                    content: "A quality proposal template sends a positive message about your business. It screams professionalism, integrity, and reliability",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'The Benefits of Using Bonsai’s Templates',
                    contentList: [
                        {
                            content: "Writing proposals can be time-consuming: you need to add information about yourself, your previous work, your proposed business or project, payment information, and more.",
                        },
                        {
                            content: "Once you have the hang of creating and writing a freelance proposal, the next step is to join the top 1% in using a dedicated online system.",
                        },
                        {
                            content: "This will do much of the heavy lifting for you, including adding and removing sections with a click, calculating fees instantly, sending reminders, and tracking when the proposal is opened.",
                        },
                        {
                            content: "And if you’re looking for an all-in-one freelancing tool for professional-looking proposals, look no further! Bonsai offers a 14-day free trial.",
                        },
                        {
                            content: "There are several key elements to note with a Bonsai sample proposal:",
                            contentUlList: [
                                {
                                    content: "You can emphasise your professionalism by adding your company branding to the document",
                                },
                                {
                                    content: "Each template has a clear structure, incorporating all the important sections of a client-winning proposal",
                                },
                                {
                                    content: "An easy-to-understand fee summary, with an option to choose between packages",
                                },
                            ]
                        },
                        {
                            content: "It’s crystal clear, easy to read, and looks professional. But that’s not all. If your prospective client is sold on your solution, they can accept your proposal from within the document. No need for long email chains or time-consuming back-and-forth.",
                        },
                    ]
                },
                {
                    mainTitle: 'How to Create a Proposal Using Bonsai Templates',
                    contentList: [
                        {
                            content: "Super simple. Bonsai makes creating, saving and sending proposal templates easy. Here's how:",
                            contentUlList: [
                                {
                                    content: "Sign up to Bonsai for free",
                                },
                                {
                                    content: "Choose the proposal template that reflects your industry from our gallery",
                                },
                                {
                                    content: "Start editing your template",
                                },
                                {
                                    content: "Download and send to your client. Job done.",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'Bonsai vs Generic Proposal Templates',
                    contentList: [
                        {
                            content: "Bonsai beats generic proposal templates in many ways–but we know you can’t just trust our word, we need to show you:",
                        },
                    ]
                },
            ],
            comparisionTableData: [
                {
                    title: "Fast, automated workflow",
                    content: "Create, customize and send professional-looking proposals in minutes.",
                },
                {
                    title: "Flexible editing",
                    content: "Add, move, or remove sections in seconds.",
                },
                {
                    title: "Notifications",
                    content: "Get notifications when clients view or accept your proposals.",
                },
                {
                    title: "Automate your follow-up",
                    content: "Optimize automatic reminders by choosing the right time to email each client.",
                },
                {
                    title: "Let clients mix and match packages",
                    content: "Add single or multiple package options to your proposals that your clients can choose from automatically.",
                },
                {
                    title: "Streamline approvals",
                    content: "Make accepting as easy as possible with package selection and electronic-approval.",
                },
            ]
        },
        {
            icon: faFileInvoiceDollar,
            title: 'Invoice Template',
            slugs: 'invoice-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Invoice Templates',
                sectionContent: 'Welcome to our gallery of invoice templates. You can search by industry to find an invoice template specifically for your freelance profession.',
                buttonContent: 'START CREATING YOUR INVOICE',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering Invoice Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel Invoice Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What Are Invoice Templates?',
                    contentList: [
                        {
                            content: 'A invoice template is the skeleton document you adapt to win business from new and existing clients. Your invoice template includes all the specific information your prospective client needs to know how you will solve their challenges, and the goals you want to accomplish with them. All you need to do is adapt your invoice template for each client.',
                        },
                        {
                            content: 'With business invoices, you introduce who you are, what your business does, and what you’ve achieved. You also run through the details of what you’re planning to accomplish for your potential client. invoices can look however you need them to, they can be a fully-fledged business plan, a design invoice, or even a marketing invoice—it depends on what you do.',
                        },
                        {
                            content: 'invoice templates are a great way to streamline and improve your invoice workflow. Having a invoice template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.',
                        },
                    ]
                },
                {
                    mainTitle: 'Why Use a invoice Template?',
                    contentList: [
                        {
                            content: "There are some obvious reasons why you should use a templated invoice:",
                            contentUlList: [
                                {
                                    content: "Creating a reusable document saves precious time and energy",
                                },
                                {
                                    content: "It allows you to be consistent with your tone and messaging",
                                },
                                {
                                    content: "You can add your branding to the document, to make you look more professional than the competition",
                                },
                                {
                                    content: "It provides clarity to your prospective client, laying out exactly what you can do, the duration, and how much it will cost",
                                },
                                {
                                    content: "You can track and monitor the pitches you send, adjusting as you go, rather than starting from scratch each and every time",
                                },
                            ]
                        },
                        {
                            content: "But a invoice is so much more than simply a list of your services with prices attached.",
                        },
                        {
                            content: "Firstly, it’s your opportunity to lay the groundwork for a potentially fruitful working relationship. By using a invoice template, you get to establish smooth lines of communication, define expectations, and demonstrate that you understand the needs, goals, and ideas of the client.",
                        },
                        {
                            content: "That last part is crucial because, if you’re responding to an RFP (“request for invoice” — sometimes called a “request for pitch”) you need to show that you’ve read and understood the initial brief. If you can’t do that, you’ve fallen at the first hurdle.",
                        },
                        {
                            content: "Then there’s the aesthetics. Your invoice should be an extension of your brand, and, as Jeff Bezos said, “your brand is what other people say about you when you’re not in the room.”",
                        },
                        {
                            content: "By using a invoice template, you can control how your brand is perceived every time you pitch for new work. And by positioning yourself right, you can charge higher rates and work with a better quality of client.",
                        },
                        {
                            content: "Finally, your invoice can act as a framework for your contract. It’s your chance to clear up any misunderstandings, ask the right questions, and (importantly) get the answers to those questions.",
                        },
                        {
                            content: "Once your prospect accepts your invoice, you can then take the milestones and costs they’ve approved, and simply sweep them into your contract. Seamless.",
                        },
                    ]
                },
                {
                    mainTitle: '8 Common Mistakes to Avoid While Using invoice Templates',
                    contentList: [
                        {
                            content: 'While it’s undoubtedly true that using a invoice template can speed things up when it comes to pitching for new work, there are still some pitfalls you need to avoid.',
                        },
                        {
                            content: 'By understanding what these are, you can tweak your template to make sure you aren’t making common mistakes. That’s the downside to a template — if one error slips the net, you’ll end up repeating it every time you make a new invoice.',
                        },
                        {
                            content: 'Luckily, at Bonsai, we’ve worked with over 150,000 freelancers, many of whom are firmly in the top 1% when it comes to earnings and reputation.',
                        },
                        {
                            content: 'We’ve asked them to share their top mistakes, and how best to avoid them:',
                        },
                    ],
                    mistakeList: [
                        {
                            mistakeTitle: "Placing too much focus on your experience.",
                            contentList: [
                                {
                                    content: "Many freelancers get this wrong when writing a invoice. They get so swept up in selling themselves that they forget what it is their prospect wants to know: “How can you help me?”"
                                },
                                {
                                    content: "Yes, it’s important to instil confidence that you’re the right person for the job. But don’t drone on about all your accomplishments and experiences. Make it clear and concise that you know what you’re doing, then move onto the task at hand, which is, of course, selling the solution."
                                },
                                {
                                    content: "In short, make sure your invoice isn’t all about you. A short blurb and a few bullet points should be enough to capture all the relevant info."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Being too salesy.",
                            contentList: [
                                {
                                    content: "The flipside to mistake number one is that some freelancers tend to overcorrect. Instead of talking about themselves, they jump straight into sales mode, which can set the wrong tone from the outset."
                                },
                                {
                                    content: "Most successful freelancer-client relationships come about due to the fact that they’re framed as partnerships. You’re going to work together to overcome these challenges and deliver results."
                                },
                                {
                                    content: "To do this, you need to make a connection with your words. You need to treat your prospect as a human being, build trust, and get to know them better. If you fail to do this, you can come across as a sleazy salesperson trying to make a quick buck, rather than a focused freelancer who truly cares about their client’s goals."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the same cover letter over and over.",
                            contentList: [
                                {
                                    content: "Another downside to using a template is the temptation to write something once and never change it. This is especially true of your cover letter. While other parts of your template can stay the same, you should spend some time tweaking (or rewriting) your cover letter to make sure it meets the client’s expectations."
                                },
                                {
                                    content: "It’s your opportunity to demonstrate that you’ve read and understood the brief, setting the tone for the rest of the invoice. If it appears generic, there’s a good chance your pitch will be dismissed, no matter how good your proposed solution."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Sending long invoices.",
                            contentList: [
                                {
                                    content: "By now, it’s probably apparent that the key to a successful freelance invoice is balance. You might think that pouring hours into creating the perfect invoice will enhance your chances of winning the bid, but in most cases, the opposite is true."
                                },
                                {
                                    content: "If you make your invoice too long, you’ll fail to engage your prospect. Short and to the point will almost always win the day. Remember, you’ll have plenty of time to dig into the detail when you win the job. This is about making a quick and meaningful connection — not writing War and Peace."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Not sending a invoice quickly.",
                            contentList: [
                                {
                                    content: "You’d think this would be a slam dunk when you’ve got a invoice template at your fingertips. And yet, some freelancers are still slow out the blocks when it comes to sending a invoice."
                                },
                                {
                                    content: "When a potential client reaches out, whether it’s informally through social media or via your website, or formally with an RFP, chances are they’re excited to get going. They’ve got an idea, and they need your expert help to make it happen."
                                },
                                {
                                    content: "If you’re slow in sending your invoice, you’re effectively failing to match their excitement, and that’ll show. Clients want to work with freelancers who want to work with them."
                                },
                                {
                                    content: "Don’t allow the fact that you’ve got a template to lure you into a false sense of security where time is concerned! Your competition won’t hang around. Snap to it."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the wrong language around price.",
                            contentList: [
                                {
                                    content: "This is something the top 1% nail time and again — value language. When you’re creating the pricing section of your freelance invoice, it’s your opportunity to frame the tricky subject of cost in a positive light. By using the word “investment”, you’re moving the focus away from “money spent” to “money invested”."
                                },
                                {
                                    content: "It really is that simple. With one minor switch, you’re able to provoke a different psychological response. An “investment” suggests that they’ll see benefits or results, whereas “cost” is simply money out the door with nothing in return."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Failing to highlight ROI (return on investment).",
                            contentList: [
                                {
                                    content: "Just because you’ve tweaked the language in your pricing section, don’t assume that every potential client will understand the benefits of working with you. Your invoice needs to hammer those benefits home."
                                },
                                {
                                    content: "To that end, make sure you include a section that highlights precisely what your prospect will get in return for working with you. If you can demonstrate that, by purchasing your service, they’ll receive benefits far in excess of the cost, you’ll put their mind at ease — and stand out from the competition."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Forgetting to follow up.",
                            contentList: [
                                {
                                    content: "Many freelancers think that sending their invoice is the end of the conversation–it couldn't be further from the truth. Once you've edited your invoice template and send it on its way, you need to follow up."
                                },
                                {
                                    content: "Did your prospective client receive it? Do they have any questions? Perhaps, they've simply not had time to look at it yet and will be grateful for the reminder."
                                },
                                {
                                    content: "Sending a few emails after a invoice is the best way to follow up on it, but remember that your invoice–however fantastic it is–is not their only priority. After all, your client has a business function to run. So, send an email 24hr later asking to confirm if they've received it, and if they have any questions, maybe even let them know when you're expecting their response–in a subtle way."
                                },
                                {
                                    content: "By following up on it, you show your interest, and by being respectful of their time, you show them that you understand the time constraints their business has–and all of this proves to them you're someone that would be a great partner to them!"
                                },
                                {
                                    content: "Note: Bonsai's invoices actually save you the headache of remembering to follow up. You can track when your invoice has been viewed and make accepting as easy as possible with package selection and electronic approval."
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'What a Good invoice Template Includes',
                    contentList: [
                        {
                            content: "Now that you know some of the benefits of using a template, and some of the most common mistakes you need to avoid, let’s take a look at the key elements of a invoice template.",
                        },
                        {
                            content: "For starters, every template will require certain information that will remain the same, including:",
                            contentUlList: [
                                {
                                    content: "A cover page; with your name, your freelance business name and address, and your logo or business branding",
                                },
                                {
                                    content: "Short personal statement; outlining your background, experience, business and maybe some of your team members",
                                },
                                {
                                    content: "Executive summary; a brief summary of what you’re about to present",
                                },
                                {
                                    content: "Goals and objectives; what you’re trying to achieve with the invoice and how you plan to solve the client's challenge",
                                },
                                {
                                    content: "Scope of work; the nitty-gritty details of the project or business invoice plan",
                                },
                                {
                                    content: "Timeline; time is money, and clients will want to see how long your work will take",
                                },
                                {
                                    content: "Previous projects; you're only as good as your past achievements, so showcase them. Add customer testimonials",
                                },
                                {
                                    content: "Return on investment (ROI); what revenue goals do you believe your solution will obtain for the client",
                                },
                                {
                                    content: "Payment terms; accepted forms of payment (i.e., do you accept credit cards?) and when you expect to be paid (15 days, 30 days, etc.)",
                                },
                                {
                                    content: "Terms and conditions; including late fees, confidentiality, and copyright, etc",
                                },
                                {
                                    content: "Final CTA; let them know how to contact you and the following steps",
                                },
                            ]
                        },
                        {
                            content: "Next, you need to include sections for the information that you’ll adapt as per the brief. This ensures that your format will remain consistent, even if this info changes from one pitch to the next.:",
                            contentUlList: [
                                {
                                    content: "Client reference number; for your own records (include the date)",
                                },
                                {
                                    content: "A cover letter; outlining your understanding of the brief and how you plan to solve the client's problem",
                                },
                                {
                                    content: "Resources needed; A list of the resources, client assets and information you need to deliver your work",
                                },
                                {
                                    content: "Acceptance date; a date by which the invoice must be accepted.",
                                },
                            ]
                        },
                        {
                            content: "Note: When you’re creating your invoice using an editable template, you need to be meticulous when it comes to spelling and proofreading. If you profess to have “an eye for detail” while your invoice is riddled with errors, it (and you) won’t be taken seriously. Get someone you trust to check it over when you think it’s ready.",
                        },
                    ]
                },
                {
                    mainTitle: 'When to Use a invoice Template?',
                    contentList: [
                        {
                            content: "The way in which you pitch your services is a reflection of you and your business.",
                        },
                        {
                            content: "You could simply draft a few lines in an email, add an estimated cost, and hit send, but you’ll appear uninterested in the client's project.",
                        },
                        {
                            content: "You could also open a blank document and try to write a full invoice from scratch, but you might miss key information, or write too much and miss the point of the brief entirely. Structure is just as important as the content.",
                        },
                        {
                            content: "Now, imagine the alternative. Instead of doing too much or too little, you simply produce a polished invoice that covers all the key points and guides the prospect through your solution.",
                        },
                        {
                            content: "It’s not too long. It’s not too short. It’s just right. And if you do that, you’ll come across as professional, considered, and in control. With that in mind, you can use a invoice template whenever you’re pitching for new work:",
                            contentUlList: [
                                {
                                    content: "Formal response to an RFP; gather information and insert it into your template, building a professional-looking document that demonstrates your knowledge and understanding of the task at hand.",
                                },
                                {
                                    content: "A less formal, cold pitch; you can use your template to once again build out a considered solution to a problem the client may not even realize they’re experiencing. Seeing it laid out in a invoice document would make it far more compelling than if it arrived in a short, easily dismissed email.",
                                },
                            ]
                        },
                        {
                            content: "Either way, a template can bring structure to your pitching process and help you win more than you lose.",
                        },
                    ]
                },
                {
                    mainTitle: 'Advantages of invoice Templates',
                    contentList: [
                        {
                            content: "There are plenty of advantages in using a free invoice template and even more when using one of Bonsai’s! Take a look:",
                            contentUlList: [
                                {
                                    content: "You can turnaround invoices quicker than if you were writing them from scratch, which increases your chances of winning business. You can respond to a client’s request sooner than the competition",
                                },
                                {
                                    content: "Templates provide complete consistency. By using a template, you can produce several invoices in quick succession, and tailor each for a specific brief.",
                                },
                                {
                                    content: "Templates can also encapsulate your brand. From the colours you use to your logo, font, and tone of voice, you can position yourself in whatever way you want to be perceived",
                                },
                                {
                                    content: "They help free up your time — time that can be spent on other important freelance tasks",
                                },
                                {
                                    content: "It becomes a repeatable process, and one you can tweak and improve as you go. You don’t have to completely reinvent the wheel each and every time you send out a new invoice. You’ll soon have an idea of what works and what doesn’t.",
                                },
                                {
                                    content: "A quality invoice template sends a positive message about your business. It screams professionalism, integrity, and reliability",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'The Benefits of Using Bonsai’s Templates',
                    contentList: [
                        {
                            content: "Writing invoices can be time-consuming: you need to add information about yourself, your previous work, your proposed business or project, payment information, and more.",
                        },
                        {
                            content: "Once you have the hang of creating and writing a freelance invoice, the next step is to join the top 1% in using a dedicated online system.",
                        },
                        {
                            content: "This will do much of the heavy lifting for you, including adding and removing sections with a click, calculating fees instantly, sending reminders, and tracking when the invoice is opened.",
                        },
                        {
                            content: "And if you’re looking for an all-in-one freelancing tool for professional-looking invoices, look no further! Bonsai offers a 14-day free trial.",
                        },
                        {
                            content: "There are several key elements to note with a Bonsai sample invoice:",
                            contentUlList: [
                                {
                                    content: "You can emphasise your professionalism by adding your company branding to the document",
                                },
                                {
                                    content: "Each template has a clear structure, incorporating all the important sections of a client-winning invoice",
                                },
                                {
                                    content: "An easy-to-understand fee summary, with an option to choose between packages",
                                },
                            ]
                        },
                        {
                            content: "It’s crystal clear, easy to read, and looks professional. But that’s not all. If your prospective client is sold on your solution, they can accept your invoice from within the document. No need for long email chains or time-consuming back-and-forth.",
                        },
                    ]
                },
                {
                    mainTitle: 'How to Create a invoice Using Bonsai Templates',
                    contentList: [
                        {
                            content: "Super simple. Bonsai makes creating, saving and sending invoice templates easy. Here's how:",
                            contentUlList: [
                                {
                                    content: "Sign up to Bonsai for free",
                                },
                                {
                                    content: "Choose the invoice template that reflects your industry from our gallery",
                                },
                                {
                                    content: "Start editing your template",
                                },
                                {
                                    content: "Download and send to your client. Job done.",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'Bonsai vs Generic invoice Templates',
                    contentList: [
                        {
                            content: "Bonsai beats generic invoice templates in many ways–but we know you can’t just trust our word, we need to show you:",
                        },
                    ]
                },
            ],
            comparisionTableData: [
                {
                    title: "Fast, automated workflow",
                    content: "Create, customize and send professional-looking invoices in minutes.",
                },
                {
                    title: "Flexible editing",
                    content: "Add, move, or remove sections in seconds.",
                },
                {
                    title: "Notifications",
                    content: "Get notifications when clients view or accept your invoices.",
                },
                {
                    title: "Automate your follow-up",
                    content: "Optimize automatic reminders by choosing the right time to email each client.",
                },
                {
                    title: "Let clients mix and match packages",
                    content: "Add single or multiple package options to your invoices that your clients can choose from automatically.",
                },
                {
                    title: "Streamline approvals",
                    content: "Make accepting as easy as possible with package selection and electronic-approval.",
                },
            ]
        },
        {
            icon: faFileContract,
            title: 'Agreement Template',
            slugs: 'agreement-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Agreement Templates',
                sectionContent: 'Welcome to our gallery of agreement templates. You can search by industry to find an agreement template specifically for your freelance profession.',
                buttonContent: 'START CREATING YOUR AGREEMENT',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering Agreement Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel Agreement Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What Are Agreement Templates?',
                    contentList: [
                        {
                            content: 'A agreement template is the skeleton document you adapt to win business from new and existing clients. Your agreement template includes all the specific information your prospective client needs to know how you will solve their challenges, and the goals you want to accomplish with them. All you need to do is adapt your agreement template for each client.',
                        },
                        {
                            content: 'With business agreements, you introduce who you are, what your business does, and what you’ve achieved. You also run through the details of what you’re planning to accomplish for your potential client. agreements can look however you need them to, they can be a fully-fledged business plan, a design agreement, or even a marketing agreement—it depends on what you do.',
                        },
                        {
                            content: 'agreement templates are a great way to streamline and improve your agreement workflow. Having a agreement template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.',
                        },
                    ]
                },
                {
                    mainTitle: 'Why Use a agreement Template?',
                    contentList: [
                        {
                            content: "There are some obvious reasons why you should use a templated agreement:",
                            contentUlList: [
                                {
                                    content: "Creating a reusable document saves precious time and energy",
                                },
                                {
                                    content: "It allows you to be consistent with your tone and messaging",
                                },
                                {
                                    content: "You can add your branding to the document, to make you look more professional than the competition",
                                },
                                {
                                    content: "It provides clarity to your prospective client, laying out exactly what you can do, the duration, and how much it will cost",
                                },
                                {
                                    content: "You can track and monitor the pitches you send, adjusting as you go, rather than starting from scratch each and every time",
                                },
                            ]
                        },
                        {
                            content: "But a agreement is so much more than simply a list of your services with prices attached.",
                        },
                        {
                            content: "Firstly, it’s your opportunity to lay the groundwork for a potentially fruitful working relationship. By using a agreement template, you get to establish smooth lines of communication, define expectations, and demonstrate that you understand the needs, goals, and ideas of the client.",
                        },
                        {
                            content: "That last part is crucial because, if you’re responding to an RFP (“request for agreement” — sometimes called a “request for pitch”) you need to show that you’ve read and understood the initial brief. If you can’t do that, you’ve fallen at the first hurdle.",
                        },
                        {
                            content: "Then there’s the aesthetics. Your agreement should be an extension of your brand, and, as Jeff Bezos said, “your brand is what other people say about you when you’re not in the room.”",
                        },
                        {
                            content: "By using a agreement template, you can control how your brand is perceived every time you pitch for new work. And by positioning yourself right, you can charge higher rates and work with a better quality of client.",
                        },
                        {
                            content: "Finally, your agreement can act as a framework for your contract. It’s your chance to clear up any misunderstandings, ask the right questions, and (importantly) get the answers to those questions.",
                        },
                        {
                            content: "Once your prospect accepts your agreement, you can then take the milestones and costs they’ve approved, and simply sweep them into your contract. Seamless.",
                        },
                    ]
                },
                {
                    mainTitle: '8 Common Mistakes to Avoid While Using agreement Templates',
                    contentList: [
                        {
                            content: 'While it’s undoubtedly true that using a agreement template can speed things up when it comes to pitching for new work, there are still some pitfalls you need to avoid.',
                        },
                        {
                            content: 'By understanding what these are, you can tweak your template to make sure you aren’t making common mistakes. That’s the downside to a template — if one error slips the net, you’ll end up repeating it every time you make a new agreement.',
                        },
                        {
                            content: 'Luckily, at Bonsai, we’ve worked with over 150,000 freelancers, many of whom are firmly in the top 1% when it comes to earnings and reputation.',
                        },
                        {
                            content: 'We’ve asked them to share their top mistakes, and how best to avoid them:',
                        },
                    ],
                    mistakeList: [
                        {
                            mistakeTitle: "Placing too much focus on your experience.",
                            contentList: [
                                {
                                    content: "Many freelancers get this wrong when writing a agreement. They get so swept up in selling themselves that they forget what it is their prospect wants to know: “How can you help me?”"
                                },
                                {
                                    content: "Yes, it’s important to instil confidence that you’re the right person for the job. But don’t drone on about all your accomplishments and experiences. Make it clear and concise that you know what you’re doing, then move onto the task at hand, which is, of course, selling the solution."
                                },
                                {
                                    content: "In short, make sure your agreement isn’t all about you. A short blurb and a few bullet points should be enough to capture all the relevant info."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Being too salesy.",
                            contentList: [
                                {
                                    content: "The flipside to mistake number one is that some freelancers tend to overcorrect. Instead of talking about themselves, they jump straight into sales mode, which can set the wrong tone from the outset."
                                },
                                {
                                    content: "Most successful freelancer-client relationships come about due to the fact that they’re framed as partnerships. You’re going to work together to overcome these challenges and deliver results."
                                },
                                {
                                    content: "To do this, you need to make a connection with your words. You need to treat your prospect as a human being, build trust, and get to know them better. If you fail to do this, you can come across as a sleazy salesperson trying to make a quick buck, rather than a focused freelancer who truly cares about their client’s goals."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the same cover letter over and over.",
                            contentList: [
                                {
                                    content: "Another downside to using a template is the temptation to write something once and never change it. This is especially true of your cover letter. While other parts of your template can stay the same, you should spend some time tweaking (or rewriting) your cover letter to make sure it meets the client’s expectations."
                                },
                                {
                                    content: "It’s your opportunity to demonstrate that you’ve read and understood the brief, setting the tone for the rest of the agreement. If it appears generic, there’s a good chance your pitch will be dismissed, no matter how good your proposed solution."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Sending long agreements.",
                            contentList: [
                                {
                                    content: "By now, it’s probably apparent that the key to a successful freelance agreement is balance. You might think that pouring hours into creating the perfect agreement will enhance your chances of winning the bid, but in most cases, the opposite is true."
                                },
                                {
                                    content: "If you make your agreement too long, you’ll fail to engage your prospect. Short and to the point will almost always win the day. Remember, you’ll have plenty of time to dig into the detail when you win the job. This is about making a quick and meaningful connection — not writing War and Peace."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Not sending a agreement quickly.",
                            contentList: [
                                {
                                    content: "You’d think this would be a slam dunk when you’ve got a agreement template at your fingertips. And yet, some freelancers are still slow out the blocks when it comes to sending a agreement."
                                },
                                {
                                    content: "When a potential client reaches out, whether it’s informally through social media or via your website, or formally with an RFP, chances are they’re excited to get going. They’ve got an idea, and they need your expert help to make it happen."
                                },
                                {
                                    content: "If you’re slow in sending your agreement, you’re effectively failing to match their excitement, and that’ll show. Clients want to work with freelancers who want to work with them."
                                },
                                {
                                    content: "Don’t allow the fact that you’ve got a template to lure you into a false sense of security where time is concerned! Your competition won’t hang around. Snap to it."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the wrong language around price.",
                            contentList: [
                                {
                                    content: "This is something the top 1% nail time and again — value language. When you’re creating the pricing section of your freelance agreement, it’s your opportunity to frame the tricky subject of cost in a positive light. By using the word “investment”, you’re moving the focus away from “money spent” to “money invested”."
                                },
                                {
                                    content: "It really is that simple. With one minor switch, you’re able to provoke a different psychological response. An “investment” suggests that they’ll see benefits or results, whereas “cost” is simply money out the door with nothing in return."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Failing to highlight ROI (return on investment).",
                            contentList: [
                                {
                                    content: "Just because you’ve tweaked the language in your pricing section, don’t assume that every potential client will understand the benefits of working with you. Your agreement needs to hammer those benefits home."
                                },
                                {
                                    content: "To that end, make sure you include a section that highlights precisely what your prospect will get in return for working with you. If you can demonstrate that, by purchasing your service, they’ll receive benefits far in excess of the cost, you’ll put their mind at ease — and stand out from the competition."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Forgetting to follow up.",
                            contentList: [
                                {
                                    content: "Many freelancers think that sending their agreement is the end of the conversation–it couldn't be further from the truth. Once you've edited your agreement template and send it on its way, you need to follow up."
                                },
                                {
                                    content: "Did your prospective client receive it? Do they have any questions? Perhaps, they've simply not had time to look at it yet and will be grateful for the reminder."
                                },
                                {
                                    content: "Sending a few emails after a agreement is the best way to follow up on it, but remember that your agreement–however fantastic it is–is not their only priority. After all, your client has a business function to run. So, send an email 24hr later asking to confirm if they've received it, and if they have any questions, maybe even let them know when you're expecting their response–in a subtle way."
                                },
                                {
                                    content: "By following up on it, you show your interest, and by being respectful of their time, you show them that you understand the time constraints their business has–and all of this proves to them you're someone that would be a great partner to them!"
                                },
                                {
                                    content: "Note: Bonsai's agreements actually save you the headache of remembering to follow up. You can track when your agreement has been viewed and make accepting as easy as possible with package selection and electronic approval."
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'What a Good agreement Template Includes',
                    contentList: [
                        {
                            content: "Now that you know some of the benefits of using a template, and some of the most common mistakes you need to avoid, let’s take a look at the key elements of a agreement template.",
                        },
                        {
                            content: "For starters, every template will require certain information that will remain the same, including:",
                            contentUlList: [
                                {
                                    content: "A cover page; with your name, your freelance business name and address, and your logo or business branding",
                                },
                                {
                                    content: "Short personal statement; outlining your background, experience, business and maybe some of your team members",
                                },
                                {
                                    content: "Executive summary; a brief summary of what you’re about to present",
                                },
                                {
                                    content: "Goals and objectives; what you’re trying to achieve with the agreement and how you plan to solve the client's challenge",
                                },
                                {
                                    content: "Scope of work; the nitty-gritty details of the project or business agreement plan",
                                },
                                {
                                    content: "Timeline; time is money, and clients will want to see how long your work will take",
                                },
                                {
                                    content: "Previous projects; you're only as good as your past achievements, so showcase them. Add customer testimonials",
                                },
                                {
                                    content: "Return on investment (ROI); what revenue goals do you believe your solution will obtain for the client",
                                },
                                {
                                    content: "Payment terms; accepted forms of payment (i.e., do you accept credit cards?) and when you expect to be paid (15 days, 30 days, etc.)",
                                },
                                {
                                    content: "Terms and conditions; including late fees, confidentiality, and copyright, etc",
                                },
                                {
                                    content: "Final CTA; let them know how to contact you and the following steps",
                                },
                            ]
                        },
                        {
                            content: "Next, you need to include sections for the information that you’ll adapt as per the brief. This ensures that your format will remain consistent, even if this info changes from one pitch to the next.:",
                            contentUlList: [
                                {
                                    content: "Client reference number; for your own records (include the date)",
                                },
                                {
                                    content: "A cover letter; outlining your understanding of the brief and how you plan to solve the client's problem",
                                },
                                {
                                    content: "Resources needed; A list of the resources, client assets and information you need to deliver your work",
                                },
                                {
                                    content: "Acceptance date; a date by which the agreement must be accepted.",
                                },
                            ]
                        },
                        {
                            content: "Note: When you’re creating your agreement using an editable template, you need to be meticulous when it comes to spelling and proofreading. If you profess to have “an eye for detail” while your agreement is riddled with errors, it (and you) won’t be taken seriously. Get someone you trust to check it over when you think it’s ready.",
                        },
                    ]
                },
                {
                    mainTitle: 'When to Use a agreement Template?',
                    contentList: [
                        {
                            content: "The way in which you pitch your services is a reflection of you and your business.",
                        },
                        {
                            content: "You could simply draft a few lines in an email, add an estimated cost, and hit send, but you’ll appear uninterested in the client's project.",
                        },
                        {
                            content: "You could also open a blank document and try to write a full agreement from scratch, but you might miss key information, or write too much and miss the point of the brief entirely. Structure is just as important as the content.",
                        },
                        {
                            content: "Now, imagine the alternative. Instead of doing too much or too little, you simply produce a polished agreement that covers all the key points and guides the prospect through your solution.",
                        },
                        {
                            content: "It’s not too long. It’s not too short. It’s just right. And if you do that, you’ll come across as professional, considered, and in control. With that in mind, you can use a agreement template whenever you’re pitching for new work:",
                            contentUlList: [
                                {
                                    content: "Formal response to an RFP; gather information and insert it into your template, building a professional-looking document that demonstrates your knowledge and understanding of the task at hand.",
                                },
                                {
                                    content: "A less formal, cold pitch; you can use your template to once again build out a considered solution to a problem the client may not even realize they’re experiencing. Seeing it laid out in a agreement document would make it far more compelling than if it arrived in a short, easily dismissed email.",
                                },
                            ]
                        },
                        {
                            content: "Either way, a template can bring structure to your pitching process and help you win more than you lose.",
                        },
                    ]
                },
                {
                    mainTitle: 'Advantages of agreement Templates',
                    contentList: [
                        {
                            content: "There are plenty of advantages in using a free agreement template and even more when using one of Bonsai’s! Take a look:",
                            contentUlList: [
                                {
                                    content: "You can turnaround agreements quicker than if you were writing them from scratch, which increases your chances of winning business. You can respond to a client’s request sooner than the competition",
                                },
                                {
                                    content: "Templates provide complete consistency. By using a template, you can produce several agreements in quick succession, and tailor each for a specific brief.",
                                },
                                {
                                    content: "Templates can also encapsulate your brand. From the colours you use to your logo, font, and tone of voice, you can position yourself in whatever way you want to be perceived",
                                },
                                {
                                    content: "They help free up your time — time that can be spent on other important freelance tasks",
                                },
                                {
                                    content: "It becomes a repeatable process, and one you can tweak and improve as you go. You don’t have to completely reinvent the wheel each and every time you send out a new agreement. You’ll soon have an idea of what works and what doesn’t.",
                                },
                                {
                                    content: "A quality agreement template sends a positive message about your business. It screams professionalism, integrity, and reliability",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'The Benefits of Using Bonsai’s Templates',
                    contentList: [
                        {
                            content: "Writing agreements can be time-consuming: you need to add information about yourself, your previous work, your proposed business or project, payment information, and more.",
                        },
                        {
                            content: "Once you have the hang of creating and writing a freelance agreement, the next step is to join the top 1% in using a dedicated online system.",
                        },
                        {
                            content: "This will do much of the heavy lifting for you, including adding and removing sections with a click, calculating fees instantly, sending reminders, and tracking when the agreement is opened.",
                        },
                        {
                            content: "And if you’re looking for an all-in-one freelancing tool for professional-looking agreements, look no further! Bonsai offers a 14-day free trial.",
                        },
                        {
                            content: "There are several key elements to note with a Bonsai sample agreement:",
                            contentUlList: [
                                {
                                    content: "You can emphasise your professionalism by adding your company branding to the document",
                                },
                                {
                                    content: "Each template has a clear structure, incorporating all the important sections of a client-winning agreement",
                                },
                                {
                                    content: "An easy-to-understand fee summary, with an option to choose between packages",
                                },
                            ]
                        },
                        {
                            content: "It’s crystal clear, easy to read, and looks professional. But that’s not all. If your prospective client is sold on your solution, they can accept your agreement from within the document. No need for long email chains or time-consuming back-and-forth.",
                        },
                    ]
                },
                {
                    mainTitle: 'How to Create a agreement Using Bonsai Templates',
                    contentList: [
                        {
                            content: "Super simple. Bonsai makes creating, saving and sending agreement templates easy. Here's how:",
                            contentUlList: [
                                {
                                    content: "Sign up to Bonsai for free",
                                },
                                {
                                    content: "Choose the agreement template that reflects your industry from our gallery",
                                },
                                {
                                    content: "Start editing your template",
                                },
                                {
                                    content: "Download and send to your client. Job done.",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'Bonsai vs Generic agreement Templates',
                    contentList: [
                        {
                            content: "Bonsai beats generic agreement templates in many ways–but we know you can’t just trust our word, we need to show you:",
                        },
                    ]
                },
            ],
            comparisionTableData: [
                {
                    title: "Fast, automated workflow",
                    content: "Create, customize and send professional-looking agreements in minutes.",
                },
                {
                    title: "Flexible editing",
                    content: "Add, move, or remove sections in seconds.",
                },
                {
                    title: "Notifications",
                    content: "Get notifications when clients view or accept your agreements.",
                },
                {
                    title: "Automate your follow-up",
                    content: "Optimize automatic reminders by choosing the right time to email each client.",
                },
                {
                    title: "Let clients mix and match packages",
                    content: "Add single or multiple package options to your agreements that your clients can choose from automatically.",
                },
                {
                    title: "Streamline approvals",
                    content: "Make accepting as easy as possible with package selection and electronic-approval.",
                },
            ]
        },
        {
            icon: faFileLines,
            title: 'Quote Template',
            slugs: 'quote-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Quote Templates',
                sectionContent: 'Welcome to our gallery of quote templates. You can search by industry to find an quote template specifically for your freelance profession.',
                buttonContent: 'START EDITING YOUR QUOTE',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering Quote Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel Quote Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What Are Quote Templates?',
                    contentList: [
                        {
                            content: 'A quote template is the skeleton document you adapt to win business from new and existing clients. Your quote template includes all the specific information your prospective client needs to know how you will solve their challenges, and the goals you want to accomplish with them. All you need to do is adapt your quote template for each client.',
                        },
                        {
                            content: 'With business quotes, you introduce who you are, what your business does, and what you’ve achieved. You also run through the details of what you’re planning to accomplish for your potential client. quotes can look however you need them to, they can be a fully-fledged business plan, a design quote, or even a marketing quote—it depends on what you do.',
                        },
                        {
                            content: 'quote templates are a great way to streamline and improve your quote workflow. Having a quote template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.',
                        },
                    ]
                },
                {
                    mainTitle: 'Why Use a quote Template?',
                    contentList: [
                        {
                            content: "There are some obvious reasons why you should use a templated quote:",
                            contentUlList: [
                                {
                                    content: "Creating a reusable document saves precious time and energy",
                                },
                                {
                                    content: "It allows you to be consistent with your tone and messaging",
                                },
                                {
                                    content: "You can add your branding to the document, to make you look more professional than the competition",
                                },
                                {
                                    content: "It provides clarity to your prospective client, laying out exactly what you can do, the duration, and how much it will cost",
                                },
                                {
                                    content: "You can track and monitor the pitches you send, adjusting as you go, rather than starting from scratch each and every time",
                                },
                            ]
                        },
                        {
                            content: "But a quote is so much more than simply a list of your services with prices attached.",
                        },
                        {
                            content: "Firstly, it’s your opportunity to lay the groundwork for a potentially fruitful working relationship. By using a quote template, you get to establish smooth lines of communication, define expectations, and demonstrate that you understand the needs, goals, and ideas of the client.",
                        },
                        {
                            content: "That last part is crucial because, if you’re responding to an RFP (“request for quote” — sometimes called a “request for pitch”) you need to show that you’ve read and understood the initial brief. If you can’t do that, you’ve fallen at the first hurdle.",
                        },
                        {
                            content: "Then there’s the aesthetics. Your quote should be an extension of your brand, and, as Jeff Bezos said, “your brand is what other people say about you when you’re not in the room.”",
                        },
                        {
                            content: "By using a quote template, you can control how your brand is perceived every time you pitch for new work. And by positioning yourself right, you can charge higher rates and work with a better quality of client.",
                        },
                        {
                            content: "Finally, your quote can act as a framework for your contract. It’s your chance to clear up any misunderstandings, ask the right questions, and (importantly) get the answers to those questions.",
                        },
                        {
                            content: "Once your prospect accepts your quote, you can then take the milestones and costs they’ve approved, and simply sweep them into your contract. Seamless.",
                        },
                    ]
                },
                {
                    mainTitle: '8 Common Mistakes to Avoid While Using quote Templates',
                    contentList: [
                        {
                            content: 'While it’s undoubtedly true that using a quote template can speed things up when it comes to pitching for new work, there are still some pitfalls you need to avoid.',
                        },
                        {
                            content: 'By understanding what these are, you can tweak your template to make sure you aren’t making common mistakes. That’s the downside to a template — if one error slips the net, you’ll end up repeating it every time you make a new quote.',
                        },
                        {
                            content: 'Luckily, at Bonsai, we’ve worked with over 150,000 freelancers, many of whom are firmly in the top 1% when it comes to earnings and reputation.',
                        },
                        {
                            content: 'We’ve asked them to share their top mistakes, and how best to avoid them:',
                        },
                    ],
                    mistakeList: [
                        {
                            mistakeTitle: "Placing too much focus on your experience.",
                            contentList: [
                                {
                                    content: "Many freelancers get this wrong when writing a quote. They get so swept up in selling themselves that they forget what it is their prospect wants to know: “How can you help me?”"
                                },
                                {
                                    content: "Yes, it’s important to instil confidence that you’re the right person for the job. But don’t drone on about all your accomplishments and experiences. Make it clear and concise that you know what you’re doing, then move onto the task at hand, which is, of course, selling the solution."
                                },
                                {
                                    content: "In short, make sure your quote isn’t all about you. A short blurb and a few bullet points should be enough to capture all the relevant info."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Being too salesy.",
                            contentList: [
                                {
                                    content: "The flipside to mistake number one is that some freelancers tend to overcorrect. Instead of talking about themselves, they jump straight into sales mode, which can set the wrong tone from the outset."
                                },
                                {
                                    content: "Most successful freelancer-client relationships come about due to the fact that they’re framed as partnerships. You’re going to work together to overcome these challenges and deliver results."
                                },
                                {
                                    content: "To do this, you need to make a connection with your words. You need to treat your prospect as a human being, build trust, and get to know them better. If you fail to do this, you can come across as a sleazy salesperson trying to make a quick buck, rather than a focused freelancer who truly cares about their client’s goals."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the same cover letter over and over.",
                            contentList: [
                                {
                                    content: "Another downside to using a template is the temptation to write something once and never change it. This is especially true of your cover letter. While other parts of your template can stay the same, you should spend some time tweaking (or rewriting) your cover letter to make sure it meets the client’s expectations."
                                },
                                {
                                    content: "It’s your opportunity to demonstrate that you’ve read and understood the brief, setting the tone for the rest of the quote. If it appears generic, there’s a good chance your pitch will be dismissed, no matter how good your proposed solution."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Sending long quotes.",
                            contentList: [
                                {
                                    content: "By now, it’s probably apparent that the key to a successful freelance quote is balance. You might think that pouring hours into creating the perfect quote will enhance your chances of winning the bid, but in most cases, the opposite is true."
                                },
                                {
                                    content: "If you make your quote too long, you’ll fail to engage your prospect. Short and to the point will almost always win the day. Remember, you’ll have plenty of time to dig into the detail when you win the job. This is about making a quick and meaningful connection — not writing War and Peace."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Not sending a quote quickly.",
                            contentList: [
                                {
                                    content: "You’d think this would be a slam dunk when you’ve got a quote template at your fingertips. And yet, some freelancers are still slow out the blocks when it comes to sending a quote."
                                },
                                {
                                    content: "When a potential client reaches out, whether it’s informally through social media or via your website, or formally with an RFP, chances are they’re excited to get going. They’ve got an idea, and they need your expert help to make it happen."
                                },
                                {
                                    content: "If you’re slow in sending your quote, you’re effectively failing to match their excitement, and that’ll show. Clients want to work with freelancers who want to work with them."
                                },
                                {
                                    content: "Don’t allow the fact that you’ve got a template to lure you into a false sense of security where time is concerned! Your competition won’t hang around. Snap to it."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the wrong language around price.",
                            contentList: [
                                {
                                    content: "This is something the top 1% nail time and again — value language. When you’re creating the pricing section of your freelance quote, it’s your opportunity to frame the tricky subject of cost in a positive light. By using the word “investment”, you’re moving the focus away from “money spent” to “money invested”."
                                },
                                {
                                    content: "It really is that simple. With one minor switch, you’re able to provoke a different psychological response. An “investment” suggests that they’ll see benefits or results, whereas “cost” is simply money out the door with nothing in return."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Failing to highlight ROI (return on investment).",
                            contentList: [
                                {
                                    content: "Just because you’ve tweaked the language in your pricing section, don’t assume that every potential client will understand the benefits of working with you. Your quote needs to hammer those benefits home."
                                },
                                {
                                    content: "To that end, make sure you include a section that highlights precisely what your prospect will get in return for working with you. If you can demonstrate that, by purchasing your service, they’ll receive benefits far in excess of the cost, you’ll put their mind at ease — and stand out from the competition."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Forgetting to follow up.",
                            contentList: [
                                {
                                    content: "Many freelancers think that sending their quote is the end of the conversation–it couldn't be further from the truth. Once you've edited your quote template and send it on its way, you need to follow up."
                                },
                                {
                                    content: "Did your prospective client receive it? Do they have any questions? Perhaps, they've simply not had time to look at it yet and will be grateful for the reminder."
                                },
                                {
                                    content: "Sending a few emails after a quote is the best way to follow up on it, but remember that your quote–however fantastic it is–is not their only priority. After all, your client has a business function to run. So, send an email 24hr later asking to confirm if they've received it, and if they have any questions, maybe even let them know when you're expecting their response–in a subtle way."
                                },
                                {
                                    content: "By following up on it, you show your interest, and by being respectful of their time, you show them that you understand the time constraints their business has–and all of this proves to them you're someone that would be a great partner to them!"
                                },
                                {
                                    content: "Note: Bonsai's quotes actually save you the headache of remembering to follow up. You can track when your quote has been viewed and make accepting as easy as possible with package selection and electronic approval."
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'What a Good quote Template Includes',
                    contentList: [
                        {
                            content: "Now that you know some of the benefits of using a template, and some of the most common mistakes you need to avoid, let’s take a look at the key elements of a quote template.",
                        },
                        {
                            content: "For starters, every template will require certain information that will remain the same, including:",
                            contentUlList: [
                                {
                                    content: "A cover page; with your name, your freelance business name and address, and your logo or business branding",
                                },
                                {
                                    content: "Short personal statement; outlining your background, experience, business and maybe some of your team members",
                                },
                                {
                                    content: "Executive summary; a brief summary of what you’re about to present",
                                },
                                {
                                    content: "Goals and objectives; what you’re trying to achieve with the quote and how you plan to solve the client's challenge",
                                },
                                {
                                    content: "Scope of work; the nitty-gritty details of the project or business quote plan",
                                },
                                {
                                    content: "Timeline; time is money, and clients will want to see how long your work will take",
                                },
                                {
                                    content: "Previous projects; you're only as good as your past achievements, so showcase them. Add customer testimonials",
                                },
                                {
                                    content: "Return on investment (ROI); what revenue goals do you believe your solution will obtain for the client",
                                },
                                {
                                    content: "Payment terms; accepted forms of payment (i.e., do you accept credit cards?) and when you expect to be paid (15 days, 30 days, etc.)",
                                },
                                {
                                    content: "Terms and conditions; including late fees, confidentiality, and copyright, etc",
                                },
                                {
                                    content: "Final CTA; let them know how to contact you and the following steps",
                                },
                            ]
                        },
                        {
                            content: "Next, you need to include sections for the information that you’ll adapt as per the brief. This ensures that your format will remain consistent, even if this info changes from one pitch to the next.:",
                            contentUlList: [
                                {
                                    content: "Client reference number; for your own records (include the date)",
                                },
                                {
                                    content: "A cover letter; outlining your understanding of the brief and how you plan to solve the client's problem",
                                },
                                {
                                    content: "Resources needed; A list of the resources, client assets and information you need to deliver your work",
                                },
                                {
                                    content: "Acceptance date; a date by which the quote must be accepted.",
                                },
                            ]
                        },
                        {
                            content: "Note: When you’re creating your quote using an editable template, you need to be meticulous when it comes to spelling and proofreading. If you profess to have “an eye for detail” while your quote is riddled with errors, it (and you) won’t be taken seriously. Get someone you trust to check it over when you think it’s ready.",
                        },
                    ]
                },
                {
                    mainTitle: 'When to Use a quote Template?',
                    contentList: [
                        {
                            content: "The way in which you pitch your services is a reflection of you and your business.",
                        },
                        {
                            content: "You could simply draft a few lines in an email, add an estimated cost, and hit send, but you’ll appear uninterested in the client's project.",
                        },
                        {
                            content: "You could also open a blank document and try to write a full quote from scratch, but you might miss key information, or write too much and miss the point of the brief entirely. Structure is just as important as the content.",
                        },
                        {
                            content: "Now, imagine the alternative. Instead of doing too much or too little, you simply produce a polished quote that covers all the key points and guides the prospect through your solution.",
                        },
                        {
                            content: "It’s not too long. It’s not too short. It’s just right. And if you do that, you’ll come across as professional, considered, and in control. With that in mind, you can use a quote template whenever you’re pitching for new work:",
                            contentUlList: [
                                {
                                    content: "Formal response to an RFP; gather information and insert it into your template, building a professional-looking document that demonstrates your knowledge and understanding of the task at hand.",
                                },
                                {
                                    content: "A less formal, cold pitch; you can use your template to once again build out a considered solution to a problem the client may not even realize they’re experiencing. Seeing it laid out in a quote document would make it far more compelling than if it arrived in a short, easily dismissed email.",
                                },
                            ]
                        },
                        {
                            content: "Either way, a template can bring structure to your pitching process and help you win more than you lose.",
                        },
                    ]
                },
                {
                    mainTitle: 'Advantages of quote Templates',
                    contentList: [
                        {
                            content: "There are plenty of advantages in using a free quote template and even more when using one of Bonsai’s! Take a look:",
                            contentUlList: [
                                {
                                    content: "You can turnaround quotes quicker than if you were writing them from scratch, which increases your chances of winning business. You can respond to a client’s request sooner than the competition",
                                },
                                {
                                    content: "Templates provide complete consistency. By using a template, you can produce several quotes in quick succession, and tailor each for a specific brief.",
                                },
                                {
                                    content: "Templates can also encapsulate your brand. From the colours you use to your logo, font, and tone of voice, you can position yourself in whatever way you want to be perceived",
                                },
                                {
                                    content: "They help free up your time — time that can be spent on other important freelance tasks",
                                },
                                {
                                    content: "It becomes a repeatable process, and one you can tweak and improve as you go. You don’t have to completely reinvent the wheel each and every time you send out a new quote. You’ll soon have an idea of what works and what doesn’t.",
                                },
                                {
                                    content: "A quality quote template sends a positive message about your business. It screams professionalism, integrity, and reliability",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'The Benefits of Using Bonsai’s Templates',
                    contentList: [
                        {
                            content: "Writing quotes can be time-consuming: you need to add information about yourself, your previous work, your proposed business or project, payment information, and more.",
                        },
                        {
                            content: "Once you have the hang of creating and writing a freelance quote, the next step is to join the top 1% in using a dedicated online system.",
                        },
                        {
                            content: "This will do much of the heavy lifting for you, including adding and removing sections with a click, calculating fees instantly, sending reminders, and tracking when the quote is opened.",
                        },
                        {
                            content: "And if you’re looking for an all-in-one freelancing tool for professional-looking quotes, look no further! Bonsai offers a 14-day free trial.",
                        },
                        {
                            content: "There are several key elements to note with a Bonsai sample quote:",
                            contentUlList: [
                                {
                                    content: "You can emphasise your professionalism by adding your company branding to the document",
                                },
                                {
                                    content: "Each template has a clear structure, incorporating all the important sections of a client-winning quote",
                                },
                                {
                                    content: "An easy-to-understand fee summary, with an option to choose between packages",
                                },
                            ]
                        },
                        {
                            content: "It’s crystal clear, easy to read, and looks professional. But that’s not all. If your prospective client is sold on your solution, they can accept your quote from within the document. No need for long email chains or time-consuming back-and-forth.",
                        },
                    ]
                },
                {
                    mainTitle: 'How to Create a quote Using Bonsai Templates',
                    contentList: [
                        {
                            content: "Super simple. Bonsai makes creating, saving and sending quote templates easy. Here's how:",
                            contentUlList: [
                                {
                                    content: "Sign up to Bonsai for free",
                                },
                                {
                                    content: "Choose the quote template that reflects your industry from our gallery",
                                },
                                {
                                    content: "Start editing your template",
                                },
                                {
                                    content: "Download and send to your client. Job done.",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'Bonsai vs Generic quote Templates',
                    contentList: [
                        {
                            content: "Bonsai beats generic quote templates in many ways–but we know you can’t just trust our word, we need to show you:",
                        },
                    ]
                },
            ],
            comparisionTableData: [
                {
                    title: "Fast, automated workflow",
                    content: "Create, customize and send professional-looking quotes in minutes.",
                },
                {
                    title: "Flexible editing",
                    content: "Add, move, or remove sections in seconds.",
                },
                {
                    title: "Notifications",
                    content: "Get notifications when clients view or accept your quotes.",
                },
                {
                    title: "Automate your follow-up",
                    content: "Optimize automatic reminders by choosing the right time to email each client.",
                },
                {
                    title: "Let clients mix and match packages",
                    content: "Add single or multiple package options to your quotes that your clients can choose from automatically.",
                },
                {
                    title: "Streamline approvals",
                    content: "Make accepting as easy as possible with package selection and electronic-approval.",
                },
            ]
        },
        {
            icon: faClock,
            title: 'Scope of work Template',
            slugs: 'sow-template',
            templateTopSection: {
                leftImage: contractImg,
                rightImage: invoiceImg,
                sectionTitle: 'Free Scope of Work Templates',
                sectionContent: 'Welcome to our gallery of scope of work templates. You can search by industry to find a scope of work template specifically for your freelance profession.',
                buttonContent: 'START CREATING YOUR SOW',
            },
            templateMiddleSection: [
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Executive Coaching SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Client SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Consultant',
                    title: 'Business Consulting SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Mentoring SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Home Remodel SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Coach SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Health Coaching SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Sports Coach SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Business Coaching SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Coach',
                    title: 'Life Coaching SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Engeneering SOW Template',
                },
                {
                    middleImg: templateimg,
                    label: 'Architech',
                    title: 'Remodel SOW Template',
                },
            ],
            tableOfContent: [
                {
                    mainTitle: 'What Are SOW Templates?',
                    contentList: [
                        {
                            content: 'A SOW template is the skeleton document you adapt to win business from new and existing clients. Your SOW template includes all the specific information your prospective client needs to know how you will solve their challenges, and the goals you want to accomplish with them. All you need to do is adapt your SOW template for each client.',
                        },
                        {
                            content: 'With business SOWs, you introduce who you are, what your business does, and what you’ve achieved. You also run through the details of what you’re planning to accomplish for your potential client. SOWs can look however you need them to, they can be a fully-fledged business plan, a design SOW, or even a marketing SOW—it depends on what you do.',
                        },
                        {
                            content: 'SOW templates are a great way to streamline and improve your SOW workflow. Having a SOW template on standby makes your life easier, business ops smoother, and ultimately helps you close more business.',
                        },
                    ]
                },
                {
                    mainTitle: 'Why Use a SOW Template?',
                    contentList: [
                        {
                            content: "There are some obvious reasons why you should use a templated SOW:",
                            contentUlList: [
                                {
                                    content: "Creating a reusable document saves precious time and energy",
                                },
                                {
                                    content: "It allows you to be consistent with your tone and messaging",
                                },
                                {
                                    content: "You can add your branding to the document, to make you look more professional than the competition",
                                },
                                {
                                    content: "It provides clarity to your prospective client, laying out exactly what you can do, the duration, and how much it will cost",
                                },
                                {
                                    content: "You can track and monitor the pitches you send, adjusting as you go, rather than starting from scratch each and every time",
                                },
                            ]
                        },
                        {
                            content: "But a SOW is so much more than simply a list of your services with prices attached.",
                        },
                        {
                            content: "Firstly, it’s your opportunity to lay the groundwork for a potentially fruitful working relationship. By using a SOW template, you get to establish smooth lines of communication, define expectations, and demonstrate that you understand the needs, goals, and ideas of the client.",
                        },
                        {
                            content: "That last part is crucial because, if you’re responding to an RFP (“request for SOW” — sometimes called a “request for pitch”) you need to show that you’ve read and understood the initial brief. If you can’t do that, you’ve fallen at the first hurdle.",
                        },
                        {
                            content: "Then there’s the aesthetics. Your SOW should be an extension of your brand, and, as Jeff Bezos said, “your brand is what other people say about you when you’re not in the room.”",
                        },
                        {
                            content: "By using a SOW template, you can control how your brand is perceived every time you pitch for new work. And by positioning yourself right, you can charge higher rates and work with a better quality of client.",
                        },
                        {
                            content: "Finally, your SOW can act as a framework for your contract. It’s your chance to clear up any misunderstandings, ask the right questions, and (importantly) get the answers to those questions.",
                        },
                        {
                            content: "Once your prospect accepts your SOW, you can then take the milestones and costs they’ve approved, and simply sweep them into your contract. Seamless.",
                        },
                    ]
                },
                {
                    mainTitle: '8 Common Mistakes to Avoid While Using SOW Templates',
                    contentList: [
                        {
                            content: 'While it’s undoubtedly true that using a SOW template can speed things up when it comes to pitching for new work, there are still some pitfalls you need to avoid.',
                        },
                        {
                            content: 'By understanding what these are, you can tweak your template to make sure you aren’t making common mistakes. That’s the downside to a template — if one error slips the net, you’ll end up repeating it every time you make a new SOW.',
                        },
                        {
                            content: 'Luckily, at Bonsai, we’ve worked with over 150,000 freelancers, many of whom are firmly in the top 1% when it comes to earnings and reputation.',
                        },
                        {
                            content: 'We’ve asked them to share their top mistakes, and how best to avoid them:',
                        },
                    ],
                    mistakeList: [
                        {
                            mistakeTitle: "Placing too much focus on your experience.",
                            contentList: [
                                {
                                    content: "Many freelancers get this wrong when writing a SOW. They get so swept up in selling themselves that they forget what it is their prospect wants to know: “How can you help me?”"
                                },
                                {
                                    content: "Yes, it’s important to instil confidence that you’re the right person for the job. But don’t drone on about all your accomplishments and experiences. Make it clear and concise that you know what you’re doing, then move onto the task at hand, which is, of course, selling the solution."
                                },
                                {
                                    content: "In short, make sure your SOW isn’t all about you. A short blurb and a few bullet points should be enough to capture all the relevant info."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Being too salesy.",
                            contentList: [
                                {
                                    content: "The flipside to mistake number one is that some freelancers tend to overcorrect. Instead of talking about themselves, they jump straight into sales mode, which can set the wrong tone from the outset."
                                },
                                {
                                    content: "Most successful freelancer-client relationships come about due to the fact that they’re framed as partnerships. You’re going to work together to overcome these challenges and deliver results."
                                },
                                {
                                    content: "To do this, you need to make a connection with your words. You need to treat your prospect as a human being, build trust, and get to know them better. If you fail to do this, you can come across as a sleazy salesperson trying to make a quick buck, rather than a focused freelancer who truly cares about their client’s goals."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the same cover letter over and over.",
                            contentList: [
                                {
                                    content: "Another downside to using a template is the temptation to write something once and never change it. This is especially true of your cover letter. While other parts of your template can stay the same, you should spend some time tweaking (or rewriting) your cover letter to make sure it meets the client’s expectations."
                                },
                                {
                                    content: "It’s your opportunity to demonstrate that you’ve read and understood the brief, setting the tone for the rest of the SOW. If it appears generic, there’s a good chance your pitch will be dismissed, no matter how good your proposed solution."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Sending long SOWs.",
                            contentList: [
                                {
                                    content: "By now, it’s probably apparent that the key to a successful freelance SOW is balance. You might think that pouring hours into creating the perfect SOW will enhance your chances of winning the bid, but in most cases, the opposite is true."
                                },
                                {
                                    content: "If you make your SOW too long, you’ll fail to engage your prospect. Short and to the point will almost always win the day. Remember, you’ll have plenty of time to dig into the detail when you win the job. This is about making a quick and meaningful connection — not writing War and Peace."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Not sending a SOW quickly.",
                            contentList: [
                                {
                                    content: "You’d think this would be a slam dunk when you’ve got a SOW template at your fingertips. And yet, some freelancers are still slow out the blocks when it comes to sending a SOW."
                                },
                                {
                                    content: "When a potential client reaches out, whether it’s informally through social media or via your website, or formally with an RFP, chances are they’re excited to get going. They’ve got an idea, and they need your expert help to make it happen."
                                },
                                {
                                    content: "If you’re slow in sending your SOW, you’re effectively failing to match their excitement, and that’ll show. Clients want to work with freelancers who want to work with them."
                                },
                                {
                                    content: "Don’t allow the fact that you’ve got a template to lure you into a false sense of security where time is concerned! Your competition won’t hang around. Snap to it."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Using the wrong language around price.",
                            contentList: [
                                {
                                    content: "This is something the top 1% nail time and again — value language. When you’re creating the pricing section of your freelance SOW, it’s your opportunity to frame the tricky subject of cost in a positive light. By using the word “investment”, you’re moving the focus away from “money spent” to “money invested”."
                                },
                                {
                                    content: "It really is that simple. With one minor switch, you’re able to provoke a different psychological response. An “investment” suggests that they’ll see benefits or results, whereas “cost” is simply money out the door with nothing in return."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Failing to highlight ROI (return on investment).",
                            contentList: [
                                {
                                    content: "Just because you’ve tweaked the language in your pricing section, don’t assume that every potential client will understand the benefits of working with you. Your SOW needs to hammer those benefits home."
                                },
                                {
                                    content: "To that end, make sure you include a section that highlights precisely what your prospect will get in return for working with you. If you can demonstrate that, by purchasing your service, they’ll receive benefits far in excess of the cost, you’ll put their mind at ease — and stand out from the competition."
                                },
                            ]
                        },
                        {
                            mistakeTitle: "Forgetting to follow up.",
                            contentList: [
                                {
                                    content: "Many freelancers think that sending their SOW is the end of the conversation–it couldn't be further from the truth. Once you've edited your SOW template and send it on its way, you need to follow up."
                                },
                                {
                                    content: "Did your prospective client receive it? Do they have any questions? Perhaps, they've simply not had time to look at it yet and will be grateful for the reminder."
                                },
                                {
                                    content: "Sending a few emails after a SOW is the best way to follow up on it, but remember that your SOW–however fantastic it is–is not their only priority. After all, your client has a business function to run. So, send an email 24hr later asking to confirm if they've received it, and if they have any questions, maybe even let them know when you're expecting their response–in a subtle way."
                                },
                                {
                                    content: "By following up on it, you show your interest, and by being respectful of their time, you show them that you understand the time constraints their business has–and all of this proves to them you're someone that would be a great partner to them!"
                                },
                                {
                                    content: "Note: Bonsai's SOWs actually save you the headache of remembering to follow up. You can track when your SOW has been viewed and make accepting as easy as possible with package selection and electronic approval."
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'What a Good SOW Template Includes',
                    contentList: [
                        {
                            content: "Now that you know some of the benefits of using a template, and some of the most common mistakes you need to avoid, let’s take a look at the key elements of a SOW template.",
                        },
                        {
                            content: "For starters, every template will require certain information that will remain the same, including:",
                            contentUlList: [
                                {
                                    content: "A cover page; with your name, your freelance business name and address, and your logo or business branding",
                                },
                                {
                                    content: "Short personal statement; outlining your background, experience, business and maybe some of your team members",
                                },
                                {
                                    content: "Executive summary; a brief summary of what you’re about to present",
                                },
                                {
                                    content: "Goals and objectives; what you’re trying to achieve with the SOW and how you plan to solve the client's challenge",
                                },
                                {
                                    content: "Scope of work; the nitty-gritty details of the project or business SOW plan",
                                },
                                {
                                    content: "Timeline; time is money, and clients will want to see how long your work will take",
                                },
                                {
                                    content: "Previous projects; you're only as good as your past achievements, so showcase them. Add customer testimonials",
                                },
                                {
                                    content: "Return on investment (ROI); what revenue goals do you believe your solution will obtain for the client",
                                },
                                {
                                    content: "Payment terms; accepted forms of payment (i.e., do you accept credit cards?) and when you expect to be paid (15 days, 30 days, etc.)",
                                },
                                {
                                    content: "Terms and conditions; including late fees, confidentiality, and copyright, etc",
                                },
                                {
                                    content: "Final CTA; let them know how to contact you and the following steps",
                                },
                            ]
                        },
                        {
                            content: "Next, you need to include sections for the information that you’ll adapt as per the brief. This ensures that your format will remain consistent, even if this info changes from one pitch to the next.:",
                            contentUlList: [
                                {
                                    content: "Client reference number; for your own records (include the date)",
                                },
                                {
                                    content: "A cover letter; outlining your understanding of the brief and how you plan to solve the client's problem",
                                },
                                {
                                    content: "Resources needed; A list of the resources, client assets and information you need to deliver your work",
                                },
                                {
                                    content: "Acceptance date; a date by which the SOW must be accepted.",
                                },
                            ]
                        },
                        {
                            content: "Note: When you’re creating your SOW using an editable template, you need to be meticulous when it comes to spelling and proofreading. If you profess to have “an eye for detail” while your SOW is riddled with errors, it (and you) won’t be taken seriously. Get someone you trust to check it over when you think it’s ready.",
                        },
                    ]
                },
                {
                    mainTitle: 'When to Use a SOW Template?',
                    contentList: [
                        {
                            content: "The way in which you pitch your services is a reflection of you and your business.",
                        },
                        {
                            content: "You could simply draft a few lines in an email, add an estimated cost, and hit send, but you’ll appear uninterested in the client's project.",
                        },
                        {
                            content: "You could also open a blank document and try to write a full SOW from scratch, but you might miss key information, or write too much and miss the point of the brief entirely. Structure is just as important as the content.",
                        },
                        {
                            content: "Now, imagine the alternative. Instead of doing too much or too little, you simply produce a polished SOW that covers all the key points and guides the prospect through your solution.",
                        },
                        {
                            content: "It’s not too long. It’s not too short. It’s just right. And if you do that, you’ll come across as professional, considered, and in control. With that in mind, you can use a SOW template whenever you’re pitching for new work:",
                            contentUlList: [
                                {
                                    content: "Formal response to an RFP; gather information and insert it into your template, building a professional-looking document that demonstrates your knowledge and understanding of the task at hand.",
                                },
                                {
                                    content: "A less formal, cold pitch; you can use your template to once again build out a considered solution to a problem the client may not even realize they’re experiencing. Seeing it laid out in a SOW document would make it far more compelling than if it arrived in a short, easily dismissed email.",
                                },
                            ]
                        },
                        {
                            content: "Either way, a template can bring structure to your pitching process and help you win more than you lose.",
                        },
                    ]
                },
                {
                    mainTitle: 'Advantages of SOW Templates',
                    contentList: [
                        {
                            content: "There are plenty of advantages in using a free SOW template and even more when using one of Bonsai’s! Take a look:",
                            contentUlList: [
                                {
                                    content: "You can turnaround SOWs quicker than if you were writing them from scratch, which increases your chances of winning business. You can respond to a client’s request sooner than the competition",
                                },
                                {
                                    content: "Templates provide complete consistency. By using a template, you can produce several SOWs in quick succession, and tailor each for a specific brief.",
                                },
                                {
                                    content: "Templates can also encapsulate your brand. From the colours you use to your logo, font, and tone of voice, you can position yourself in whatever way you want to be perceived",
                                },
                                {
                                    content: "They help free up your time — time that can be spent on other important freelance tasks",
                                },
                                {
                                    content: "It becomes a repeatable process, and one you can tweak and improve as you go. You don’t have to completely reinvent the wheel each and every time you send out a new SOW. You’ll soon have an idea of what works and what doesn’t.",
                                },
                                {
                                    content: "A quality SOW template sends a positive message about your business. It screams professionalism, integrity, and reliability",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'The Benefits of Using Bonsai’s Templates',
                    contentList: [
                        {
                            content: "Writing SOWs can be time-consuming: you need to add information about yourself, your previous work, your proposed business or project, payment information, and more.",
                        },
                        {
                            content: "Once you have the hang of creating and writing a freelance SOW, the next step is to join the top 1% in using a dedicated online system.",
                        },
                        {
                            content: "This will do much of the heavy lifting for you, including adding and removing sections with a click, calculating fees instantly, sending reminders, and tracking when the SOW is opened.",
                        },
                        {
                            content: "And if you’re looking for an all-in-one freelancing tool for professional-looking SOWs, look no further! Bonsai offers a 14-day free trial.",
                        },
                        {
                            content: "There are several key elements to note with a Bonsai sample SOW:",
                            contentUlList: [
                                {
                                    content: "You can emphasise your professionalism by adding your company branding to the document",
                                },
                                {
                                    content: "Each template has a clear structure, incorporating all the important sections of a client-winning SOW",
                                },
                                {
                                    content: "An easy-to-understand fee summary, with an option to choose between packages",
                                },
                            ]
                        },
                        {
                            content: "It’s crystal clear, easy to read, and looks professional. But that’s not all. If your prospective client is sold on your solution, they can accept your SOW from within the document. No need for long email chains or time-consuming back-and-forth.",
                        },
                    ]
                },
                {
                    mainTitle: 'How to Create a SOW Using Bonsai Templates',
                    contentList: [
                        {
                            content: "Super simple. Bonsai makes creating, saving and sending SOW templates easy. Here's how:",
                            contentUlList: [
                                {
                                    content: "Sign up to Bonsai for free",
                                },
                                {
                                    content: "Choose the SOW template that reflects your industry from our gallery",
                                },
                                {
                                    content: "Start editing your template",
                                },
                                {
                                    content: "Download and send to your client. Job done.",
                                },
                            ]
                        },
                    ]
                },
                {
                    mainTitle: 'Bonsai vs Generic SOW Templates',
                    contentList: [
                        {
                            content: "Bonsai beats generic SOW templates in many ways–but we know you can’t just trust our word, we need to show you:",
                        },
                    ]
                },
            ],
            comparisionTableData: [
                {
                    title: "Fast, automated workflow",
                    content: "Create, customize and send professional-looking SOWs in minutes.",
                },
                {
                    title: "Flexible editing",
                    content: "Add, move, or remove sections in seconds.",
                },
                {
                    title: "Notifications",
                    content: "Get notifications when clients view or accept your SOWs.",
                },
                {
                    title: "Automate your follow-up",
                    content: "Optimize automatic reminders by choosing the right time to email each client.",
                },
                {
                    title: "Let clients mix and match packages",
                    content: "Add single or multiple package options to your SOWs that your clients can choose from automatically.",
                },
                {
                    title: "Streamline approvals",
                    content: "Make accepting as easy as possible with package selection and electronic-approval.",
                },
            ]
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setDropdownMenu(false);
        setMultiDropdownMenu(false);
        setTemplateDropDown(false);
    };

    return (
        <header className="header">
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo">
                    <a href='/bonsai-front-end'>
                        <img src={bonsaiLogo} className='img-fluid' style={{ height: '90px', width: '150px' }} alt="Logo" />
                    </a>
                </div>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li className='product-menu'
                            onMouseEnter={() => { setDropdownMenu(true); setTemplateDropDown(false) }}
                            onClick={() => { setDropdownMenu(!dropdownMenu); setMultiDropdownMenu(false) }}
                            ref={dropdownRef}>
                            Product
                        </li>
                        {
                            dropdownMenu &&
                            <div className='dropdown-list'>
                                <div className='dropdown-content' onMouseEnter={() => setMultiDropdownMenu(true)} onClick={() => setMultiDropdownMenu(!multiDropdownMenu)}>
                                    <h4>Bonsai Workflow</h4>
                                    <p>Look professional, win more clients and manage your business from one place</p>
                                </div>
                                {
                                    multiDropdownMenu && <div className='multi-dropdown-menu'>
                                        {
                                            MiddleSectionTitleList?.map((data, index) => (
                                                <Link
                                                    to={{
                                                        pathname: `/freelance/${data.slugs}`,
                                                    }}
                                                    state={{ data }}  // Pass the data object as state
                                                    onClick={() => { setDropdownMenu(false); setMultiDropdownMenu(false) }}
                                                >
                                                    <div className='multi-dropdown-content' key={index}>
                                                        <h6><FontAwesomeIcon icon={data?.icon} />&nbsp;&nbsp; {data?.title}</h6>
                                                    </div>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                }
                                <hr />
                                <Link
                                    to={{
                                        pathname: `/freelance/${data.slugs}`,
                                    }}
                                    state={{ data }}  // Pass the data object as state
                                    onClick={() => setDropdownMenu(false)}
                                >
                                    <div className='dropdown-content'>

                                        <h4>Bonsai Tax</h4>
                                        <p>Track expenses, maximize tax write-offs, and estimate taxes without the headache</p>

                                    </div>
                                </Link>
                                <hr />
                                <Link to='/bonsai-cash' onClick={() => setDropdownMenu(false)}>
                                    <div className='dropdown-content'>

                                        <h4>Bonsai Cash</h4>
                                        <p>Bonsai’s all-in-one financial hub: No fees and lightning fast payouts</p>

                                    </div>
                                </Link>
                            </div>
                        }
                        <li className='template-menu'
                            onMouseEnter={() => { setTemplateDropDown(true); setDropdownMenu(false) }}
                            onClick={() => setTemplateDropDown(!templateDropDown)}
                        >
                            Templates
                        </li>
                        {
                            templateDropDown &&
                            <div className='template-dropdown-list'>
                                {
                                    templateDropdownData?.map((data, index) => (
                                        <Link
                                            to={{
                                                pathname: `/templates/${data.slugs}`,
                                            }}
                                            state={{ data }}  // Pass the data object as state
                                            onClick={() => setTemplateDropDown(false)}
                                        >
                                            <div className='template-dropdown-content' key={index}>
                                                <p><FontAwesomeIcon icon={data?.icon} />&nbsp;&nbsp;{data?.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        }
                        <Link to="/pricing" onClick={() => { setDropdownMenu(false); setTemplateDropDown(false) }}><li>Pricing</li></Link>
                        <Link to="/review" onClick={() => { setDropdownMenu(false); setTemplateDropDown(false) }}><li>Reviews</li></Link>
                    </ul>
                </nav>
                <div className="header-buttons">
                    <Link to='/signin' className="btn login">Login</Link>
                    <Link to='/signup' className="btn start-free">Start Free</Link>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
            </div>
        </header>
    );
};

export default Header;