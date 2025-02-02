"use client";
import "./assest/styles/Home.modul.css";
import React, { useEffect, useState } from "react";
import myImage from "./assest/image/ImageLandingpage.png";
import myImage2 from "./assest/image/Property.png";
import styled from "styled-components";
import { Button, Flex, Layout } from "antd";
import AboutPage from "./contents/About";
import FooterPage from "./contents/FooterPage";
import ImageGroup from "./assest/image/Group482133.png";
import ImageCoin from "./assest/image/Mask group.png";
import ImageStrategicBG from "./assest/image/bg-strategic.png";
import ImageBgBR from "./assest/image/Group 1.png";
import ImageObject from "./assest/image/OBJECTS.png";
// import homePageVideo from "@/app/assest/video/homePageVideo.mp4";

const LineStyle = styled("div")`
  height: 13px;
  background-color: rgba(207, 152, 44, 1);
`;

export default function Home() {
  const { Content, Footer } = Layout;
  const [scrollPosition, setScrollPosition] = useState(0);
  const TextValuesLoop = "JJ JIRA S LIBRARY";
  const words = [
    "FINANCIAL IPO",
    "M&A",
    "FINANCIAL RESTRUCTURING",
    "FINANCIAL CONSULTING",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  //----------------------------------Text-------------------------------------
  let [rightValue, setRightValue] = useState("calc(5% + 6%)");
  let [topValue, setTopValue] = useState("calc(75px + 50%)");

  //----------------------------------Spinner-----------------------------------
  let [topValueSpiner, setTopValueSpiner] = useState("calc(75px + 71%)");
  let [rightValueSpiner, setRightValueSpiner] = useState("calc(254px + 6%)");

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 380) {
        // iPhone
        setRightValue("calc(-6% + 30px)");
        setTopValue("calc(75px + 50%)");
      } else if (screenWidth <= 768) {
        // Tablet
        setRightValue("calc(0% + 30px)");
        setTopValue("calc(75px + 50%)");
      } else {
        // Desktop
        // setRightValue('calc(5% + 6%)');
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // เรียกใช้ handleResize ทันทีเมื่อ component โหลด

    return () => {
      window.removeEventListener("scroll", handleScroll); // ลบ scroll listener
      window.removeEventListener("resize", handleResize); // ลบ resize listener
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Content>
        <div
          id="home"
          style={{
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            position: "relative",
            minHeight: "100vh",
          }}
        >
          {/* vido Background */}
          <video
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 1,
              background: "white",
              opacity: 1,
              // pointerEvents: "none",
            }}
            autoPlay
            muted
            loop
            preload="auto"
          >
            <source
              src="/mainVideo.mp4"
              type="video/mp4"
            />
          </video>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(143deg, #c67d1d -2%, rgb(7 52 7) 23%, rgb(7 52 7) 86%, rgb(7 52 7) 80%, #c67d1d 112%)",
              opacity: 0.9,
              zIndex: 1,
            }}
          />

          <div
            style={{
              zIndex: 2,
              position: "absolute",
              top: "calc(15% - 20px)",
              width: "81%",
              overflow: "hidden",
              borderRadius: "5%",
              fontFamily: "fangsong",
              color: "white",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              fontWeight: "bold",
            }}
          >
            <div className="text-container">
              <h1 className="text_titel" style={{ fontSize: "48px" }}>
                YOUR TRUSTED PARTNER IN
                <br />
                <div className="rotating-container">
                  <span className="rotating-word" key={currentWord}>
                    {words[currentWord]}
                  </span>
                </div>
              </h1>
            </div>
          </div>

          <div
            style={{
              zIndex: 2,
              position: "absolute",
              right: "calc(34% + 30px)",
              top: "calc(46% - 20px)",
              width: "55%",
              height: "50.6%",
              overflow: "hidden",
              borderRadius: "14.16px",
            }}
          >
            {/* Background color */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(to right, rgba(2, 43, 13, 1) 50%, rgb(34 113 56 / 47%) 50%)",
                borderRadius: "14.16px",
                zIndex: 3,
                opacity: 0.5,
              }}
            ></div>

            <img
              src={myImage.src}
              alt="Logo"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: 2,
              }}
            />
          </div>

          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: "clamp(8px, 2vw, 16px)",
              zIndex: 2,
              position: "absolute",
              right: rightValue,
              top: topValue,
              width: "277px",
              fontWeight: 400,
              transform: "translateY(-50%)",
            }}
          >
            <p style={{ fontSize: "18px", color: "#B9B8B0" }}>
              Jay Capital Advisory is dedicated to{" "}
              <span style={{ fontWeight: "bolder", color: "white" }}>
                {" "}
                delivering expert guidance{" "}
              </span>{" "}
              and customized solutions. With unwavering integrity, we help
              clients navigate complex financial landscapes and achieve
              sustainable growth.
            </p>
          </div>

          <div
            style={{
              zIndex: 2,
              position: "absolute",
              right: rightValueSpiner,
              top: topValueSpiner,
              fontWeight: 400,
              transform: "translateY(-50%)",
            }}
          >
            <img
              src={myImage2.src}
              alt="photo"
              style={{ width: "96.57px", height: "96.81px" }}
            />
          </div>
        </div>
        <FooterPage scrollPosition={scrollPosition} />

        <LineStyle />

        <AboutPage />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <img src="/X-Logo.png" width={48} height={48} />
            </div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div
          style={{
            background: "none",
            marginBottom: "20px",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              height: "440px",
              borderRadius: "20px",
              background:
                "linear-gradient(150deg,rgba(174,189,166,1) -100%,rgb(14, 52, 30)) ",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="content_left">
                <h2
                  style={{
                    color: "rgba(248, 246, 241, 1)",
                    fontFamily: "DM Sans",
                  }}
                >
                  Execution excellence with utmost integrity to drive business
                  and society sustainably
                </h2>
                <p style={{ maxWidth: "450px" }}>
                  <span
                    style={{
                      color: "rgba(248, 246, 241, 1)",
                      fontFamily: "DM Sans",
                    }}
                  >
                    Strategic and financial consulting group
                  </span>
                  <br />
                  <span
                    style={{
                      color: "rgba(181, 190, 184, 1)",
                      fontFamily: "DM Sans",
                    }}
                  >
                    Jay Capital Advisory Limited is an SEC-approved financial
                    advisory firm based in Bangkok, Thailand. We have been
                    providing financial consulting services to our clients for
                    more than 20 years.
                  </span>
                </p>
              </div>

              <div className="content_right">
                <img
                  style={{ width: "561px", height: "200px", margin: "30px" }}
                  src={ImageGroup.src}
                />
              </div>
            </div>

            <div className="services">
              <div className="service" onClick={"content_financial"}>
                Financial Advisory (FA)
              </div>
              <div className="service">Strategic Solutions</div>
              <div className="service">Business Reorientation</div>
              <div className="service">Knowledge Sharing</div>
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* Financial */}
        <div
          style={{
            background: "none",
            marginBottom: "20px",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              height: "707px",
              borderRadius: "20px",
              background:
                "linear-gradient(28deg, rgba(174,189,166,1) 0%, rgba(80,112,83,1) 37%, rgba(43,77,48,1) 63%, rgba(31,61,36,1) 84%)",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <div className="content_financial">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="title">
                  <p>
                    Financial
                    <br />
                    Advisory
                  </p>
                </div>
                <div className="description">
                  <p>
                    Our Financial Solutions cover essential services, including
                    Mergers &amp; Acquisitions (M&amp;A), Share Valuation &amp;
                    Feasibility Studies, and Independent Financial Advisory
                    (IFA). We guide clients through Initial Public Offerings
                    (IPOs) and Private Placements (PP), and provide Financial
                    Restructuring strategies.
                  </p>
                </div>
              </div>
              <div className="services_financial">
                <div className="services_financial_up">
                  <div className="service-item">
                    <span>Initial Public Offerings (IPOs)</span>
                  </div>
                  <div className="service-item">
                    <span>Initial Public Offerings & Private Placements</span>
                  </div>
                </div>
                <div className="services_financial_down">
                  <div className="service-item">
                    <span>Mergers & Acquisitions</span>
                  </div>
                  <div className="service-item_1">
                    <span>Independent Financial Advisory</span>
                  </div>
                  <div className="service-item">
                    <span>Financial Restructuring</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "none",
                  background: "none",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "end",
                  marginRight: "5px",
                }}
              >
                <img src="./arrow-white.png" color="white"></img>
              </div>
            </div>
            <div className="background">
              <img src={ImageCoin.src} alt="Coins" />
              <div className="gradient-overlay"></div>
            </div>
          </div>
        </div>
        {/* End Financial */}
        <br />
        <br />
        {/* Strategic Solutions */}
        <div
          style={{
            background: "none",
            marginBottom: "90px",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              height: "700px",
              borderRadius: "20px",
              background: "#fffff",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <div className="content_strategic">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <div className="services_strategic">
                  <div className="service-item-strategic">
                    <Button>Consulting</Button>
                    <Button>Business Partnerships</Button>
                    <Button>Business Divestment Strategies</Button>
                    <Button>Environmental, Social, and Governance (ESG)</Button>
                  </div>
                </div>
              </div>
              <div className="title-strategic">
                <p>Strategic Solutions</p>
                <div className="des-strategic">
                  <p>
                    Our Strategic Solutions empower clients to build and enhance
                    their business foundations. We facilitate Business
                    Partnerships and develop Business Divestment Strategies that
                    align with growth objectives. Additionally, we provide
                    Environmental, Social, and Governance (ESG) Consulting to
                    help businesses adopt sustainable practices.
                  </p>
                </div>
                <div>
                  <img src="/arrow-right.png"></img>
                </div>
              </div>
            </div>

            <div className="bg-strategic">
              <img src={ImageStrategicBG.src} alt="Chess-table" />
            </div>
          </div>
        </div>

        <br />
        <br />
        {/* Business Reorientation */}
        <div
          style={{
            background: "none",
            marginBottom: "160px",
            padding: "0 50px",
          }}
        >
          <div
            style={{
              height: "890px",
              borderRadius: "20px",
              background: "#fffff",
              position: "relative",
              zIndex: 1,
              overflow: "hidden",
            }}
          >
            <div className="content_business">
              <div style={{ display: "flex", justifyContent: "space-between" ,gap:"60px"}}>
                <div className="title-business">
                  <p>Business
                    <br />
                    Reorientation</p>
                </div>
                <div className="des-business">
                  <p>
                    Our Financial Solutions cover essential services,
                    including Mergers & Acquisitions (M&A),
                    Share Valuation & Feasibility Studies,
                    and Independent Financial Advisory (IFA).
                    We guide clients through Initial Public Offerings (IPOs)
                    and Private Placements (PP), and provide Financial Restructuring strategies.
                  </p>
                </div>
              </div>
              <div className="services_business">
                  <div className="service-item-business">
                    <Button>ESG consulting</Button>
                    <Button>SDG consulting</Button>
                    <Button>Digital Transformation</Button>
                  </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",marginRight:"5px"}}>
                  <img src={ImageObject.src} alt="BGBr"></img></div>
              <div>
                  <img src="/arrow-right.png" ></img>
                </div>
            </div>

            <div className="bg-business">
              <img src={ImageBgBR.src} alt="BGBr-table" />
            </div>
          </div>
        </div>

        <LineStyle />
      </Content>
    </>
  );
}
