import React from "react";
import { background, button } from "../../assets/images/index";
import FooterCopyRight from "../FooterCopyRight/Footer";
import "./Home.scss";

function Content() {
  return (
    <div className="container-content">
      <div className="Content__img">
        <img src={background} alt="background-home" />
      </div>
      <div className="Home__content--text">
        <h3>
          Download Shop Coin USA
          <br />
          <span>App</span>
        </h3>
        <p>Manage crypto assets at your fingertips</p>
        <div className="button">
          <img src={button} alt="banner-home" />
        </div>
        <br />
        <div className="Home__content--android">
          <i> For Androi</i>
        </div>
      </div>
      <FooterCopyRight />
    </div>
  );
}

export default Content;
