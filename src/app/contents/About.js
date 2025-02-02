import React from "react";
import "../assest/styles/About.css";
// import ImageArrow from "../assest/image/Component 18.png"

export default function AboutPage() {
  return (
    <div class="container">
      <div class="container_header">
        <div class="group_left_header">
          <div class="group_left">
            <button> About Us</button>
            <p>
              WE ARE TRUSTED ADVISORS <br />
              COMMITTED TO EXCELLENCE
            </p>
          </div>

          <div class="group_right">
            <div class="text">
              <p>
                Jay Capital Advisory Limited <br /> is a{" "}
                <span>SEC-approved </span> boutique <br /> financial advisory
                firm based <br />
                in Bangkok, Thailand.{" "}
              </p>

              <div>
                <img src="/arrow-right.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
