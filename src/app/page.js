"use client";
import './assest/styles/Home.modul.css';
import React, { useEffect, useState } from 'react';
import myImage from './assest/image/Frame_482199.png';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Button, Flex, Layout } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import AboutPage from './Page/Trackrecords/page';
import ContactPage from './Page/Contactus/page';
import FooterPage from './contents/FooterPage';



const LineStyle = styled("div")`
    height: 20px;
    background: #855515;
`;

export default function Home() {
    const { Content, Footer } = Layout;
    const [scrollPosition, setScrollPosition] = useState(0);
    const TextValuesLoop = 'JJ JIRA S LIBRARY';
    const words = ['MA', 'IPO', 'DDD', 'WWW'];
    const [currentWord, setCurrentWord] = useState(0);



    //----------------------------------Text-------------------------------------
    let [rightValue, setRightValue] = useState('calc(1% + 30px)');
    let [leftValue, setLeftValue] = useState('calc(6% + 28.9%)');
    let [bottomValue, setBottomValue] = useState('');
    let [topValue, setTopValue] = useState('');


    //----------------------------------Spinner-----------------------------------
    let [leftValueSpiner, setLeftValueSpiner] = useState('calc(6% + 28.9%)');
    let [rightValueSpiner, setRightValueSpiner] = useState('');
    let [bottomValueSpiner, setBottomValueSpiner] = useState('');
    let [topValueSpiner, setTopValueSpiner] = useState('calc(-210px + 50vh)');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth <= 380) {
                // iPhone
                setRightValue('calc(-6% + 30px)');
                setLeftValueSpiner('calc(6% + 16.9%)');
                setTopValueSpiner('calc(-360px + 50vh)');
            } else if (screenWidth <= 768) {
                // Tablet
                setRightValue('calc(0% + 30px)');
                setLeftValueSpiner('calc(6% + 13.9%)');
                setTopValueSpiner('calc(-360px + 50vh)');
            } else {
                // Desktop
                setRightValue('calc(1% + 30px)');
            }
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleResize);
        handleResize(); // เรียกใช้ handleResize ทันทีเมื่อ component โหลด

        return () => {
            window.removeEventListener("scroll", handleScroll); // ลบ scroll listener
            window.removeEventListener('resize', handleResize); // ลบ resize listener
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWord((prev) => (prev + 1) % words.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Content>
                <div
                    id="home"
                    style={{
                        background: `url(https://www.jaycapital.co.th/wp-content/uploads/2024/04/07.png?id=29618) !important`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative',
                        minHeight: '100vh'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(145deg, rgb(255, 215, 0) 0%, rgb(0, 77, 0) 30%, rgb(11, 78, 11) 60%, rgb(0, 102, 0) 80%, rgb(255, 215, 0) 100%)',
                            opacity: 0.6,
                            zIndex: 1,
                        }}
                    />



                    <div
                        className="text"
                        style={{
                            zIndex: 2,
                            position: 'absolute',
                            right: 'calc(52% + 30px)',
                            top: 'calc(20% - 20px)',
                            width: '38%%',
                            overflow: 'hidden',
                            borderRadius: '5%',
                            fontFamily: "fangsong",
                            fontSize: "20px",
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
                            fontWeight: 'bold',
                        }}
                    >
                        <h1>YOUR TRUSTED PARTNER IN</h1>
                        <div className="rotating-container">
                            {/* ใช้ key สำหรับการ re-render */}
                            <div
                                className="rotating-word"
                                key={currentWord} // เพิ่ม key เพื่อให้ React render ใหม่ทุกครั้ง
                            >
                                {words[currentWord]}
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            zIndex: 2,
                            position: 'absolute',
                            right: 'calc(52% + 30px)',
                            top: 'calc(45% - 20px)',
                            width: "37%",
                            height: "45%",
                            border: '3px solid green',
                            overflow: "hidden",
                            borderRadius: "5%",
                        }}
                    >
                        <img
                            src={myImage.src}
                            alt="Logo"
                            style={{
                                width: "auto",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>

                    <div
                        style={{
                            fontSize: "clamp(8px, 2vw, 16px)",
                            zIndex: 2,
                            position: 'absolute',
                            right: rightValue,
                            top: 'calc(50vh - 20px)',
                            width: "auto",
                            transform: 'translateY(-50%)',
                        }}
                    >
                        <h1>Welcome to Our Website!</h1>
                        <p>Discover innovative products and solutions.</p>
                    </div>

                    <div
                        className="fixed-element"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            left: leftValueSpiner,
                            top: topValueSpiner
                        }}
                    >
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                position: "absolute",
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 2,
                                transformOrigin: 'center center',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    animation: 'spinText 10s linear infinite',
                                    transformOrigin: 'center center',
                                }}
                            >
                                {TextValuesLoop.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            position: 'absolute',
                                            transform: `rotate(${(index * 360) / TextValuesLoop.length}deg) translateY(-30px)`,
                                            transformOrigin: 'center center',
                                            fontSize: '8px',
                                            fontWeight: 'bold',
                                            color: 'yellow',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <span
                            style={{
                                position: 'absolute',
                                fontSize: '12px',
                                fontWeight: 'bold',
                                color: 'yellow',
                                zIndex: 3,
                            }}
                        >
                            <ArrowRightOutlined style={{ fontSize: '17px', fontWeight: "bolder", transform: 'scaleX(1.5)', cursor: "pointer" }} />
                        </span>
                    </div>

                </div>
                <FooterPage scrollPosition={scrollPosition} />

                <LineStyle />

                <AboutPage />
                <ContactPage />
            </Content>
        </>
    );
}
