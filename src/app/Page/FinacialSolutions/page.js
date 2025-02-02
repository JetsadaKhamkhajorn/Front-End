'use client'
import { Button, Carousel } from "antd"
import "../../assest/styles/Finacial.css"
import React from 'react'

export default function FinacialSolutionsPage() {
    return (
        <div id="finacialSolutions">
            <div className='contrianer'>
                <div className="header-contrainer">
                    <div className="title"><p>Financial Advisory (FA)</p></div>
                    <img src="/BG-FA.png" alt="bg-knowledge" />
                </div>
                <div className="header-object">
                    <div className="object"><img src="/ob-bg-fa.png" alt="bg-ss" /></div>
                </div>
                <div className="section01-contrainer">
                    <div className="description">
                        <div className="des-1">
                            <button>About Us</button>
                        </div>
                        <div className="des-2"><p>We specialize in comprehensive financial advisory services,
                            including ESG consulting and tailored coaching and training  programs.
                            Our team is dedicated to empowering clients with expert guidance in financial management,
                            sustainable practices, and skills development to navigate toda&rsquo;s complex business
                            landscape. </p></div>
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
                <div className="bt-1"><Button shape="round" >Financial Advisory (FA)</Button></div>
                <div className="section03-contrainer">

                    <Carousel arrows >
                        {/* slide-1 */}
                        <div className="slide-1">
                            <div className="title-1">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>Initial Public Offerings (IPOs)</p>
                                    </div>
                                </div>
                                <div className="col-2">
                                    <div className="content-col-1">
                                        <img src="/ob-slide1-fa.png" />

                                        <p>Our IPO services are tailored to ensure your company&rsquo;s successful transition to the public market.
                                            We offer end-to-end support, from corporate and shareholding restructuring to assisting you
                                            in the process of SEC filing, preparing financial reporting, and internal audit,
                                            as well as ensuring regulatory compliance. Our team also helps manage investors to
                                            ensure optimal funding and set the stage for future growth in the public market.</p>
                                    </div>
                                </div>


                            </div>
                            <div className="bg-slide-2">
                                <img src="/bg-slide1-fa.png" />
                            </div>
                        </div>
                        {/* slide-2 */}
                        <div className="slide-2" >
                            <div className="title-2">
                                <div className="col-2-1">
                                    <div className="title-col2-1">
                                        <p>Private Placements (PPs)</p>
                                    </div>
                                    <div className="content-col2-1">
                                        <p>Our Private Placement services provide tailored solutions to help your company raise capital through private investors.
                                            We guide you through every step of the process, from structuring the deal,
                                            negotiating pricing, to securing investments, ensuring an optimal fundraising costs.</p>

                                    </div>
                                    <div className="img-col-1">
                                        <img src="/ob-bg-fa-sd2-1.png" style={{ width: "5ุ20px", height: "224px" }} />
                                        <img className="img-man" src="/ob-bg-fa-sd2.png" style={{ width: "635px", height: "325px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-1">
                                <img src="/bg-slide2-fa.png" />
                            </div>
                        </div>
                        {/* slide-3 */}
                        <div className="slide-3" >
                            <div className="title-3">
                                <div className="col-3-1">
                                    <div className="title-col3-1">
                                        <p>Private Placements (PPs)</p>
                                    </div>
                                    <div className="content-col3-1">
                                        <p>Our Private Placement services provide tailored solutions to help your company raise capital through private investors.
                                            We guide you through every step of the process, from structuring the deal,
                                            negotiating pricing, to securing investments, ensuring an optimal fundraising costs.</p>

                                    </div>
                                    <div className="img-col-3">
                                        <img src="/ob-bg-fa-sd2-1.png" style={{ width: "5ุ20px", height: "224px" }} />
                                        <img className="img-man" src="/ob-bg-fa-sd2.png" style={{ width: "635px", height: "325px" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-3">
                                <img src="/bg-slide3-fa.png" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}