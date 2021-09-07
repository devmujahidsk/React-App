import React from "react";
import Blobimg from "../../images/thin-lines-blob@2x.png";
import "./blob.css";
export default function Blob() {
    return(
        <div className="blob-outer blob-otr">
            <div className="thin-line-blob-wrapper">
                <img src={Blobimg} alt="blob-img" />
            </div>
            <div className="blob-wrapper">
                <div className="blob-layer-1"></div>
                <div className="blob-layer-2"></div>
                <div className="blob"></div>
                <div className="blob-layer-3"></div>
            </div>
        </div>
    )
}