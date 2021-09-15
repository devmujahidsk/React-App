import React from "react";
import MenuItem from "../../components/navigation/menu-item";
import HeadingSlider from "../../components/homebanner/HeadingSlider";
// import HomeCarousel from "../../components/homecarousel";
import "./home.css";

export default function Home() {
       return(
           <div className="page-wrapper">
                <MenuItem />
                <HeadingSlider />
                {/* <HomeCarousel /> */}
           </div>
       );
}