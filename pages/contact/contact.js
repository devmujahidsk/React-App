import React from "react";
import MenuItem from "../../components/navigation/menu-item";
import Contactform from "../../components/contactform";

export default function Contact() {
    return(
        <>
            <MenuItem />
            <div className="page-title">
                <h1>Im Contact Us page</h1>
                <Contactform />
            </div>
        </>
    )
}