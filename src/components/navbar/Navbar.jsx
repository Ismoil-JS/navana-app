import React, { useState } from 'react';
import c from './Navbar.module.scss';
import logo from '../../images/logo.png';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className={c.navbar_container}>
            {/* <header>
                <img src={logo} alt="Logo" />
                <nav>
                    <ul>
                        <li>
                            <a href="/">Asosiy</a>
                        </li>
                        <li>
                            <a href="/about">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="/about">Avtomobillar</a>
                        </li>
                        <li>
                            <a href="/about">To'lov usullari</a>
                        </li>
                        <li>
                            <a href="/about">Yangiliklar</a>
                        </li>
                        <li>
                            <a href="/contact">Aloqa</a>
                        </li>
                    </ul>
                </nav>
                <FiMenu
                    className={c.menu_bar}
                    onClick={() => {
                        setShowMenu(!showMenu);
                    }}
                />
                {showMenu && (
                    <>
                    <ul className={c.aside_menu}>
                        <li>
                            <a href="/">Asosiy</a>
                        </li>
                        <li>
                            <a href="/about">Biz haqimizda</a>
                        </li>
                        <li>
                            <a href="/about">Avtomobillar</a>
                        </li>
                        <li>
                            <a href="/about">To'lov usullari</a>
                        </li>
                        <li>
                            <a href="/about">Yangiliklar</a>
                        </li>
                        <li>
                            <a href="/contact">Aloqa</a>
                        </li>
                    </ul>
                    <div className={c.aside_menu_layer} onClick={() => { setShowMenu(false); }} ></div>
                    </>
                )}
            </header> */}
        </div>
    );
};

export default Navbar