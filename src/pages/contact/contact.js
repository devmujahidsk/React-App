import React from "react";
import MenuItem from "../../components/navigation/menu-item";
import Contactform from "../../components/contactform/index";

export default function Contact() {
    return(
        <div className="page-wrapper">
            <MenuItem />
            <div className="page-title">
                <h1>Im Contact Us page</h1>
            </div>
            <Contactform />
        </div>
    )
}