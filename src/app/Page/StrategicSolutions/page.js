'use client'
import { Carousel } from "antd"
import "../../assest/styles/Strategic.css"
import React from 'react'

export default function StrategicSolutionsPage() {
    return (
        <div id="strategicSolutions">
           <div className='contrianer'>
                           <div className="header-contrainer">
                               <div className="title"><p>Strategic Solutions</p></div>
                               <img src="/BG-SS.png" alt="bg-ss" />
                               
                           </div>
                           <div className="header-object">
                               <div className="object"><img src="/ob-bg-ss.png" alt="bg-ss" /></div>
                               </div>
                           <div className="section01-contrainer">
                               <div className="description">
                                   <div className="des-1">
                                       <button>About Us</button>
                                   </div>
                                   <div className="des-2"><p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tailored coaching and training  programs. 
                                    Our team is dedicated to empowering clients with expert guidance in financial management, 
                                    sustainable practices, and skills development to navigate today&rsquo;s complex business landscape.</p></div>
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
                                               <div className="title-col-1">
                                                   <p>Business plan & Feasibility Studies</p>
                                               </div>
                                               <div className="content-col-1">
                                                   <p>We help you assess the viability of your business idea. 
                                                    We work with you to develop a strategic plan that outlines your objectives, 
                                                    market opportunities, and financial projections, ensuring that your business is positioned 
                                                    for success and growth. Our in-depth analysis and financial modeling offer clarity on 
                                                    potential risks, funding requirements, and profitability, 
                                                    giving you the confidence to move forward.</p>
                                               </div>
                                           </div>

                                       </div>
                                       <div className="bg-slide-1">
                                           <img src="/bg-slide1-ss.png" />
                                       </div>
                                   </div>
                                   {/* slide-2 */}
                                   <div className="slide-2" >
                                       <div className="title-2">
                                           <div className="col-1">
                                               <div className="title-col-1">
                                                   <p>Business Partnerships</p>
                                               </div>
                                               <div className="content-col-1">
                                                   <p>We help you establish and nurture strategic alliances that drive growth and innovation. 
                                                    We assist in identifying potential partners, structuring agreements, 
                                                    and ensuring successful collaboration  whether yo&rsquo;re looking to expand your 
                                                    market reach, access new resources, or share expertise. </p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="bg-slide-2">
                                           <img src="/bg-slide2-ss.png" />
                                       </div>
                                   </div>
                                   {/* slide-3 */}
                                   <div className="slide-3">
                                       <div className="title-3">
                                           <div className="col-3">
                                               <div className="title-col-3">
                                                   <p>Business Divestment Strategies</p>
                                               </div>
                                               <div className="content-col-3">
                                                   <p>We help you make informed decisions when selling or spinning off parts of your business. 
                                                    We provide guidance on share or asset valuation, market positioning, 
                                                    to identify the right buyers. Our goal is to maximize the value of your divestment, 
                                                    streamline your operations, and help you focus on core business areas for long-term success.</p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="bg-slide-3">
                                           <img src="/bg-slide3-ss.png" />
                                       </div>
                                   </div>
                                   {/* slide-4 */}
                                   <div className="slide-4">
                                       <div className="title-4">
                                           <div className="col-4">
                                               <div className="title-col-4">
                                                   <p>New business investment</p>
                                               </div>
                                               <div className="content-col-4">
                                                   <p>Our New Business Investment services help you identify and seize profitable 
                                                    opportunities for growth. We provide strategic insights, financial analysis, 
                                                    and market guidance to ensure your investments align with your long-term goals. </p>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="bg-slide-4">
                                           <img src="/bg-slide4-ss.png" />
                                       </div>
                                   </div>
                               </Carousel>
                           </div>
                       </div>
        </div>
    )
}