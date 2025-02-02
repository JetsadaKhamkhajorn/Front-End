"use client";
import { Layout } from "antd";
import React, { useState, useEffect } from "react";

export default function FooterPage({ scrollPosition }) {
  const { Footer } = Layout;
  return (
    <Footer
      style={{
        backgroundColor: "#0E341E",
        color: "white",
        padding: "20px",
        textAlign: "center",
        marginTop: "auto",
        zIndex: 2,
        width: "100%",
        boxSizing: "border-box",
        height: "148px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          fontFamily: "DM Sans",
          fontSize: "18px",
          marginRight: "10px",
          width: "20%",
          flexShrink: 0,
        }}
      >
        <p>
          Trusted by <br /> hundreds of <br /> companies
        </p>
      </div>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          alignItems: "center",
          whiteSpace: "nowrap",
          justifyContent: "flex-start",
          flexGrow: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            animation: "moveLeft 10s linear infinite",
          }}
        >
          <div
            style={{
              marginRight: "10px",
              width: "100%",
              height: "70px",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/airbnb.png"
              alt="Vector"
              style={{ width: "128px", height: "40" }}
              viewBox="0 0 128 40"
              fill="none"
            />
            
          </div>
          <div
            style={{
              marginRight: "10px",
              width: "100%",
              height: "70px",
              color: "black",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/amazon.png"
              alt="Vector"
              style={{ width: "128px", height: "40" }}
              viewBox="0 0 128 40"
              fill="none"
            />
          </div>
          <div
            style={{
              marginRight: "10px",
              width: "100%",
              height: "70px",
              color: "black",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/Tesla.png"
              alt="Vector"
              style={{ width: "183px", height: "40" }}
              viewBox="0 0 128 40"
              fill="none"
            />
          </div>
          <div
            style={{
              marginRight: "10px",
              width: "100%",
              height: "70px",
              color: "black",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/slack.png"
              alt="Vector"
              style={{ width: "128px", height: "40" }}
              viewBox="0 0 128 40"
              fill="none"
            />
          </div>
          <div
            style={{
              marginRight: "10px",
              width: "100%",
              height: "70px",
              color: "black",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/stripe.png"
              alt="Vector"
              style={{ width: "80px", height: "48" }}
              viewBox="0 0 80 48"
              fill="none"
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes moveLeft {
            0% {
              transform: translateX(100%); /* Start from the right */
            }
            100% {
              transform: translateX(-100%); /* Move to the left */
            }
          }
        `}</style>
      </div>
    </Footer>
  );
}
