import React from "react";
import Link from 'next/link'
import VideoModal from '../ModalVideo/VideoModal'

const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xl-4 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-subtitle">
                                <span>Around the clock</span>
                            </div>
                            <div className="wpo-hero-title">
                                <h2>Ready To <span>Help</span> You.</h2>
                            </div>
                            <div className="wpo-hero-des">
                                <p>We are licensed, insured, & have been plumbing for over 20 years, let us help you.
                                </p>
                            </div>
                            <div className="btns">
                                <ul>
                                    <li>
                                        <Link href="/appointment" className="btn theme-btn">BOOK IN-HOME APPT</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}



export default Hero;