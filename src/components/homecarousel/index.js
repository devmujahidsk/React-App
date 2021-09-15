import React from "react";
import Xppen from "../../images/home-slider/xppen-500x750.jpeg";
import Findcreative from "../../images/home-slider/work-findcreative-portrait-500x750.jpeg";
import Monetadesign from "../../images/home-slider/themonetadesign-home-500x750.jpeg";
import Sous from "../../images/home-slider/sous-home-500x750.jpeg";
import Smittenondesign from "../../images/home-slider/smittenondesign-500x750.jpeg";
import Mindshift from "../../images/home-slider/mindshift-home-500x750.jpeg";
import Edtimes from "../../images/home-slider/edtimes-500x750.jpeg";
import Brego from "../../images/home-slider/brego-home-500x750.jpeg";
import "./homecarousel.css";

export default function HomeCarousel() {
    return(
        <section id="home-carousel">
            <div className="home-carousel-wrap">
                <div className="slideitem slide1">
                    <figure>
                        <span className="home-carousel-number">01</span>
                        <a href="https://xp-pen.co.in" title="xp-pen">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Xppen} alt="xp-pen" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Xp Pen</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide2">
                    <figure>
                        <span className="home-carousel-number">02</span>
                        <a href="https://findcreative.com" title="findcreative">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Findcreative} alt="findcreative" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Findcreative</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide3">
                    <figure>
                        <span className="home-carousel-number">03</span>
                        <a href="https://monetadesign.com" title="Monetadesign">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Monetadesign} alt="xp-pen" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Moneta Design</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide4">
                    <figure>
                        <span className="home-carousel-number">04</span>
                        <a href="https://sous.com" title="Sous">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Sous} alt="sous" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Sous</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide5">
                    <figure>
                        <span className="home-carousel-number">05</span>
                        <a href="https://smittenondesign.com" title="smittenondesign">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Smittenondesign} alt="smittenondesign" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Smittenondesign</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide6">
                    <figure>
                        <span className="home-carousel-number">06</span>
                        <a href="https://mindshifinteractive.com" title="mindshift">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Mindshift} alt="mindshift" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Mindshift</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide7">
                    <figure>
                        <span className="home-carousel-number">07</span>
                        <a href="https://edtimes.in" title="EdTimes">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Edtimes} alt="edtimes" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Edtimes</figcaption>
                        </a>
                    </figure>
                </div>
                <div className="slideitem slide8">
                    <figure>
                        <span className="home-carousel-number">08</span>
                        <a href="https://brego.com" title="brego">
                            <div className="carousel-img-wrap">
                                <div className="carousel-img">
                                    <img src={Brego} alt="brego" />
                                </div>
                            </div>
                            <figcaption className="home-carousel-caption">Brego</figcaption>
                        </a>
                    </figure>
                </div>
            </div>
        </section>
    )
}