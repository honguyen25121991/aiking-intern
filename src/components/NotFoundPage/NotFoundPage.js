import React from "react";
import "./NotFoundPage.scss";
import FooterCopyRight from "../FooterCopyRight/Footer";
function NotFoundPage() {
  return (
    <>
      <div className="Header__content container d-flex">
        <div className="Header__content--left">
          <span>404</span>
        </div>
        <div className="Header__content--right">
          <h2>Oops! That page can’t be found.</h2>
          <p>
            It looks like nothing was found at this location. Maybe try one of
            the links below or a search?
            <i class="fa-regular fa-magnifying-glass"></i>
          </p>
          <input
            type="search"
            placeholder="Search..."
            name="search"
            value={null}
          />
        </div>
      </div>
      <FooterCopyRight />
    </>
  );
}

export default NotFoundPage;
