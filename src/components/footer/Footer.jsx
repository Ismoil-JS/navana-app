import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import c from './Footer.module.scss';
import { FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id='contact' className={c.footer}>
            <div className={c.footer_content}>
                <div className={c.footer_section}>
                    <h3>Contact Us</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className={c.social_media}>
                    <h3>Follow Us</h3>
                    <div className={c.social_icons}>
                        <ul>
                            <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                            <li><a href="https://www.telegram.com/"><FaTelegram /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={c.footerBottom}>
                <p>&copy; 2024 HLB Motors. Barcha Huquqlar Ximoyalangan.</p>
            </div>
        </footer>
    );
}

export default Footer;
