import React from 'react'
import BonsaiCashTopSection from './BonsaiCashData/BonsaiCashTopSection'
import PaymentSection from './BonsaiCashData/PaymentSection'
import CTOSection from './BonsaiCashData/CTOSection'
import BonsaiCashMiddleSection from './BonsaiCashData/BonsaiCashMiddleSection'
import BonsaiCashBottomSection from './BonsaiCashData/BonsaiCashBottomSection'

const BonsaiCash = () => {
    return (
        <>
            <BonsaiCashTopSection />
            <PaymentSection />
            <CTOSection />
            <BonsaiCashMiddleSection />
            <BonsaiCashBottomSection />
        </>
    )
}

export default BonsaiCash
