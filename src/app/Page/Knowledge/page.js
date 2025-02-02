'use client'
import { Carousel } from "antd"
import "../../assest/styles/Knowledge.css"
import React from 'react'


export default function KnowledgeSharingPage() {
    return (
        <div id="knowledge">
            <div className='contrianer'>
                <div className="header-contrainer">
                    <div className="title"><p>Knowledge Sharing</p></div>
                    <img src="/knowledgeBG.png" alt="bg-knowledge" />
                </div>
                <div className="section01-contrainer">
                    <div className="description">
                        <div className="des-1">
                            <button>About Us</button>
                        </div>
                        <div className="des-2"><p>We specialize in comprehensive financial advisory services, including ESG consulting and tailored coaching and training  programs. </p></div>
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

                    <Carousel arrows autoplay>
                        {/* slide-1 */}
                        <div className="slide-1">
                            <div className="title-1">
                                <div className="col-1">
                                    <img src="/ks-girl.png" />
                                    <img src="/ks-team.png" />
                                </div>
                                <div className="col-2">
                                    <div className="title-col-2">
                                        <p>Finance for Non Finance</p>
                                    </div>
                                    <div className="content-col-2">
                                        <p>Our Finance for Non-Finance Professionals training course is designed to
                                            equip individuals without a financial background with the essential knowledge and skills to
                                            understand financial concepts. Through clear explanations and practical examples,
                                            we help you grasp key topics like financial statements, budgeting, and cash flow management.
                                            This course empowers you to make informed business decisions, improve financial communication,
                                            and contribute effectively to your organization&apos;s financial goals.</p>
                                    </div>
                                    <img src="/ks-areaChart.png" />
                                </div>
                            </div>
                            <div className="bg-slide-1">
                                <img src="/bg-slide-1.png" />
                            </div>
                        </div>
                        {/* slide-2 */}
                        <div className="slide-2" >
                            <div className="title-2">
                                <div className="col-1">
                                    <div className="title-col-1">
                                        <p>Finance for SME & Small Business</p>
                                    </div>
                                    <div className="content-col-1">
                                        <p>Our Finance for SMEs & Small Business training course is tailored to help entrepreneurs
                                            and small business owners gain a solid understanding of financial management.
                                            We cover essential topics such as financial statements, budgeting,
                                            cash flow management, and profitability analysis.
                                            This course equips you with the tools to make informed financial decisions,
                                            improve business performance, and ensure long-term sustainability. </p>

                                    </div>
                                    <div className="img-col-1">
                                        <img src="/ks-girl2.png" style={{width: "513px", height: "300px"}}/>
                                        <img className="img-man" src="/ks-man.png"  style={{width: "630px", height: "428px"}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-slide-1">
                                <img src="/ks-slide2.png" />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}