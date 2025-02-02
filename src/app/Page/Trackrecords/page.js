'use client'
import { Carousel } from "antd"
import "../../assest/styles/Trackrecords.css"
import React from 'react'
// import ImageBG from "../../assest/image/Trackercords.png"

export default function TrackrecordsPage() {
    return (
        <div id="trackrecords">
            <div className='contrianer'>
                <div className="header-contrainer">
                    <div className="title"><p>Track Records</p></div>
                    <img src="/Trackercords.png" alt="bg-trackRecord" />
                </div>
                <div className="section01-contrainer">
                    <div className="description">
                        <div className="des-1"><p>Trusted by
                            Industry Leaders</p></div>
                        <div className="des-2"><p>We are proud to be trusted by businesses across diverse industries who rely on Jay Capital Advisory for strategic financial guidance. Our clients include leading names in sectors such as finance, real estate, technology, and manufacturing, all of whom benefit from our commitment to excellence and integrity.</p></div>
                    </div>
                </div>
                <div className="section02-contrainer">
                    
                        <Carousel arrows autoplay >
                            <div className="slide-1">
                                <img src="/TR-Logo-slide1.png" alt="slide-1"/>
                            </div>
                            <div className="slide-2" >
                                <img  src="/TR-Logo-slide2.png" alt="slide-2"/>
                            </div>
                        </Carousel>
                </div>
            </div>
            
        </div>
    )
}
