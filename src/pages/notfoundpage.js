import React from "react";
import MenuItem from "../components/navigation/menu-item"

export default function NotFoundPage () {
    return(
        <>
            <MenuItem />
            <div className="page-title">
                <h1>Sorry This Page is Not Found</h1>
            </div>
        </>
    )
}