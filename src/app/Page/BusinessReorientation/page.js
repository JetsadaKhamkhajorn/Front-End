'use client'
import { Carousel } from "antd"
import "../../assest/styles/BusinessReorientation.css"
import React from 'react'

export default function BusinessReorientationPage() {
    return (
        <div id="businessReorientation">
            <div className='contrianer'>
                <div className="header-contrainer">
                    <div className="title"><p>Business Reorientation</p></div>
                    <img src="/BR-BG.png" alt="bg-BR" />
                </div>
                <div className="section01-contrainer">
                    <div className="description">
                        <div className="des-1">
                            <button>About Us</button>
                        </div>
                        <div className="des-2"><p>We specialize in comprehensive financial advisory services,
                            including ESG consulting and tailored coaching and training  programs.
                            Our team is dedicated to empowering clients with expert guidance in financial management.</p></div>
                    </div>
                </div>
                <div className="section02-contrainer">
                    <div className="divider">
                        <div className="divider-line"></div>
                        <div className="divider-icon">
                            <img src="/X-Logo.png" width={48} height={48} />
                        </div>
                        <div className="divider-line"></div>
                    </div>
                </div>

                <div className="section03-contrainer">
                    <Carousel arrows >
                        {/* slide-1 */}
                        <div className="slide-1">
                            <div className="title-1">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>ESG consulting</p>
                                    </div>
                                    <div className="content-col-1">
                                        <p>We assist businesses in preparing filings that comply with environmental,
                                            social, and governance (ESG) guidelines from the SET and the SEC,
                                            as well as the UN&rsquo;s Sustainable Development Goals (SDGs).
                                            We help ensure transparent reporting to enhance your fundraising capability
                                            i.e. green bonds and green loans. By demonstrating your commitment to sustainability,
                                            we position your company to attract socially-conscious investors and secure the capital
                                            needed for growth and environmental initiatives.</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <img src="/ob-br-slide1.png" />
                                </div>
                            </div>
                            <div className="bg-slide-1">
                                <img src="/bg-slide1-br.png" />
                            </div>
                        </div>
                        {/* slide-2 */}
                        <div className="slide-2" >
                            <div className="title-2">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>SDG consulting</p>
                                    </div>
                                    <div className="content-col-1">
                                        <p>Our Financial Solutions cover essential services, including Mergers & Acquisitions (M&A),
                                            Share Valuation & Feasibility Studies, and Independent Financial Advisory (IFA).
                                            We guide clients through Initial Public Offerings (IPOs) and Private Placements (PP),
                                            and provide Financial Restructuring </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-2">
                                <img src="/bg-slide2-br.png" />
                            </div>
                        </div>
                        {/* slide-3 */}
                        <div className="slide-1">
                            <div className="title-1">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>Digital Transformation</p>
                                    </div>
                                    <div className="content-col-1">
                                        <p>Our Digital Transformation services connect you with trusted partners 
                                            who can help you digitize and streamline your business processes. 
                                            From automating workflows to creating efficient financial reporting processes. 
                                            Together, we help you embrace digital change to stay competitive in an increasingly 
                                            tech-driven world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-3">
                                <img src="/bg-slide3-br.png" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}