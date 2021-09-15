import React, { useEffect } from "react";
import { gsap, Power0, Expo } from "gsap";
import Blob from "../blob/blob";
import SubheadingSlider from "./SubheadingSlider";
import Pointimg from "../../images/ut-dot-dark-1.svg";
import "./heading.css";
export default function HeadingSlider() {
    useEffect(() => {
        gsap.to(".head-slide-1, .head-slide-2, .head-slide-3, .head-slide-4", { opacity: 1});
        gsap.from(
            `.animation-slide-head`,
            1,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, ease: Power0.easeInOut }
        );

        const tl = new gsap.timeline({ paused: true, repeat: -1 });
        const subtitleTimeline = new gsap.timeline();
        subtitleTimeline
      .fromTo(
        ".head-slide-1 div",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,

          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=1.5"
      )
      .to(
        ".head-slide-1 div",
        {
          opacity: 0,
          y: 50,

          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=1"
      )

      .fromTo(
        ".head-slide-2 div",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,

          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=1.5"
      )

      .to(
        ".head-slide-2 div",
        {
          opacity: 0,
          y: 50,

          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=1"
      )

      .fromTo(
        ".head-slide-3 div",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,

          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=1.5"
      )

      .to(
        ".head-slide-3 div",
        {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=1"
      )

      .fromTo(
        ".head-slide-4 div",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 2.5,
          stagger: { amount: 0.5 },
          ease: Expo.easeOut
        },
        "+=1.5"
      )

      .to(
        ".head-slide-4 div",
        {
          opacity: 0,
          y: 50,
          duration: 1.2,
          stagger: { amount: 0.25 },
          ease: Expo.easeIn
        },
        "+=1"
      ) 

    tl.add(subtitleTimeline);

    // delay start of slider for 2 seconds
    gsap.delayedCall(
        1,
        function(tl) {
          tl.restart(true, false);
        },
        [tl]
      );

    const blob = new gsap.timeline();
    blob.fromTo(
      ".blob-outer",
      5,
      { opacity: 0, x: 0 },
      { opacity: 1, x: 0, ease: Power0.inOut },
      "+=4"
    );

    const bannerbg = new gsap.timeline();
    bannerbg.fromTo(
      ".banner-bg img",
      5,
      { opacity: 0, x: 0 },
      { opacity: 1, x: 50, ease: Power0.inOut },
      "+=6"
    );

    });

    
    return(
        <div className="head-banner">
          <div className="banner-bg">
            <img src={Pointimg} alt="bg" />
          </div>
            <Blob />
            <SubheadingSlider />
            <div className="head-title"> 
                <div className="animation-slide-head">
                    <h1>
                        <div className="slide-wrap head-slide-1">
                            <div>Human Centric</div>
                        </div>
                        <div className="slide-wrap head-slide-2">
                            <div>Expert</div>
                        </div>
                        <div className="slide-wrap head-slide-3">
                            <div>Proficient</div>
                        </div>
                        <div className="slide-wrap head-slide-4">
                            <div>Ingenious</div>
                        </div>
                    </h1>
                </div>
            </div>
        </div>
    )
}