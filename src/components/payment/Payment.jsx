import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { PiBankBold } from "react-icons/pi";
import { FaRegCreditCard } from "react-icons/fa";
import c from './Payment.module.scss'; 

const Payment = () => {
    return (
        <div className={c.paymentContainer}>
            <h2 className={c.title}> TO'LOV <span style={{ color: "rgb(119, 230, 243)" }}>USULLARI</span></h2>
            <div className={c.paymentTypes}>
                <div className={c.paymentType}>
                    <div className={c.paymentIcon}>
                        <FaWallet />
                    </div>
                    <div className={c.paymentDetails}>
                        <h3>Naqd</h3>
                        <p>Siz istagan har qanday elektromobilni naqd pul asosida xarid qiling!</p>
                    </div>
                </div>

                <div className={c.paymentType}>
                    <div className={c.paymentIcon}>
                        <FaRegCreditCard />
                    </div>
                    <div className={c.paymentDetails}>
                        <h3>Pul O'tkazish</h3>
                        <p>O'zingizga ma'qul bo'lgan har qanday bank orqali pul o'tkazib, mashina xarid qiling!</p>
                    </div>
                </div>

                <div className={c.paymentType}>
                    <div className={c.paymentIcon}>
                    <PiBankBold />
                    </div>
                    <div className={c.paymentDetails}>
                        <h3>Kredit</h3>
                        <p>Elektromobillarni qulay kredit asosida xarid qiling!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
