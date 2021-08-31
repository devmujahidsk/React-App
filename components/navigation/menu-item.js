import React, { useState } from "react";
import { A } from "hookrouter";
import Logo from "../../images/logo.png";
import Hamburger from "../hamburger/hamburger";
import "./menu.css"

export default function MenuItem() {
    const [hamburger, setHamburger] = useState(false);
    const showHamburger = () => setHamburger(!hamburger);
        return(
            <header className="main-head-wrap">
                <div className="menu-wrapper">
                    <div className="logo-wrapper">
                        <A href="/"><img src={Logo} className="head-logo" alt="logo" /></A>
                    </div>
                    <nav className={hamburger ? 'main-menu menu-open' : 'main-menu menu-close'}>
                        <ul className="navbar-wrap" onClick={showHamburger}>
                            <li>
                                <A href="/">
                                    <span className="pos">01.</span>
                                    <div classNam="list-item">Home</div>
                                </A>
                            </li>
                            <li>
                                <A href="/about">
                                    <span className="pos">02.</span>
                                    <div classNam="list-item">About</div>
                                </A>
                            </li>
                            <li>
                                <A href="/our-stories">
                                    <span className="pos">03.</span>
                                    <div classNam="list-item">Our Stories</div>
                                </A>
                            </li>
                            <li>
                                <A href="/contact">
                                    <span className="pos">04.</span>
                                    <div classNam="list-item">Contact</div>
                                </A>
                            </li>
                            <li>
                                <A href="/registration">
                                    <span className="pos">05.</span>
                                    <div classNam="list-item">Registration</div>
                                </A>
                            </li>
                        </ul>
                    </nav>
                    <div className="hamburger-wrap" onClick={showHamburger}>
                        <Hamburger />
                    </div>
                </div>
            </header>
        );
}