import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-bg"></div>
      <div
        className="home-icon"
        onClick={() => {
          window.location.href = "https://buyaladdin.com/";
        }}
      >
        <img src="/assets/image/Home-btn.png" />
      </div>
      <div className="home-inner">
        <div className="home-content">
          <div className="content-logo">
            <img src="/assets/image/logo.png" alt="Logo" />
          </div>
          <h3>
            Find a luxury <br />
            goods appraisal <br />
            service near you{" "}
          </h3>
          <p>
            Download the Buyaladdin app now, and don’t <br />
            miss out on the new standard of live commerce.
          </p>
        </div>
        <div className="home-bottom">
          <span
            onClick={() => {
              navigate("/list");
            }}
          >
            Let's Get Started <LuArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
