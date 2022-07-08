import React from "react";
import { background, button } from "../../assets/images/index";
import Footer from "./Footer";

import "./Home.scss";

function Content() {
  return (
    <>
      <div style={{ position: "relative" }} className="container-content">
        <div>
          <img src={background} style={{ width: "100%", height: "50vh" }} />
        </div>
        <div style={{ position: "absolute", top: "10%", right: "0" }}>
          <h3>
            Download Shop Coin USA
            <br />
            <span>App</span>
          </h3>
          <p>Manage crypto assets at your fingertips</p>
          <img src={button} className="button" style={{ width: "50%" }} />
          <br />
          <div style={{ textAlign: "center", width: "400px" }}>
            <i> For Androi</i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Content;
