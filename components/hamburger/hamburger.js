import React, { useState } from "react";
import "./hamburger.css";

export default function Hamburger() {
    const [burgeropen, setBurgerOpen] = useState(false);
    const showBurgerOpen = () => setBurgerOpen(!burgeropen);
    return(
        <>
        <div className={burgeropen ? 'hamburger menu-open' : 'hamburger menu-close'} onClick={showBurgerOpen}>
            <span className="line burger1"></span>
            <span className="line burger2"></span>
            <span className="line burger3"></span>
        </div>
        </>
    )
}