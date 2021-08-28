import React from "react";
import MenuItem from "../../components/navigation/menu-item";
import Blob from "../../components/blob/blob";
// import HeadingSlider from "../../components/homebanner/HeadingSlider";
import "./home.css";

export default function Home() {
       return(
           <>
                <MenuItem />
                {/* <HeadingSlider /> */}
                <div className="page-title">
                    <h1>Hello Im Home Page</h1>
                </div>
                <Blob />
           </>
       );
}