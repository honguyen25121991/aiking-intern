import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <>
      <div className="container d-flex justify-content-evenly footer__content fs-6 footer">
        <div>
          <h5>Products</h5>
          <ul>
            <li>
              <a href="#">Blockchain Explorer</a>
            </li>
            <li>
              <a href="#">Crypto API</a>
            </li>
            <li>
              <a href="#">Crypto Indices</a>
            </li>
            <li>
              <a href="#">Interest</a>
            </li>
            <li>
              <a href="#">Jobs Board</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Methodology</a>
            </li>
            <li>
              <a href="#">CareersWe’re hiring!</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>
              <a href="#">Request Form</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Glossary</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Socials</h5>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Interactive Chat</a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Footer;
