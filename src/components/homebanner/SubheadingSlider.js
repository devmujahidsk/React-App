import React, { useEffect } from "react";
import { gsap, Power0 } from "gsap";
import "./subheading.css";

export default function SubheadingSlider() {
    useEffect(() => {
        gsap.to("sub-slide1, sub-slide2", { opacity: 1 });
        gsap.from(
            `.animation-slide`,
            1,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, ease: Power0.easeInOut }
        );

        const tl = new gsap.timeline({ paused: true, repeat: -1 });
        const subtitleTimeline = new gsap.timeline();

        subtitleTimeline
            .fromTo(
                ".sub-slide-1",
                2,
                { opacity: 0, y: 20, ease: Power0.easeInOut },
                { opacity: 1, y: 0, ease: Power0.easeInOut },
                "+=1"
            )
            .to(
                ".sub-slide-1",
                2,
                { opacity: 0, y: -20, ease: Power0.easeInOut },
                "+=1"
            )

            .fromTo(
                ".sub-slide-2",
                2,
                { opacity: 0, y: 20, ease: Power0.easeInOut },
                { opacity: 1, y: 0, ease: Power0.easeInOut },
                "+=1"
            )
            .to(
                ".sub-slide-2",
                2,
                { opacity: 0, y: -20, ease: Power0.easeInOut },
                "+=1"
            )

            .to(`.sub-slide-1`, 1, { opacity: 0, y: 20, ease: Power0.easeInOut });

            tl.add(subtitleTimeline);

            // delay start of slider for 2 seconds
            gsap.delayedCall(
            1,
            function(tl) {
                tl.restart(true, false);
            },
            [tl]
            );
    });
    return(
        <div className="subhead-banner">
            <div className="sub-title">
                <div className="animation-slide">
                    <h2>
                        <div className="slideWrap sub-slide-1">The world is going digital, why not you?</div>
                        <div className="slideWrap sub-slide-2">Join us and groove into the world of possibilities!</div>
                    </h2>
                </div>
            </div>
        </div>
    )
}