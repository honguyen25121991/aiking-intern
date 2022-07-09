import React from "react";
import Footer from "../Footer/Footer";
import FooterCopyRight from "../FooterCopyRight/Footer";

import ValidatedLoginForm from "../ValidateLoginFrom/ValidatedLoginForm";

import "./SignupPage.scss";

function SignupPage() {
  return (
    <div className="SignupPage__content" style={{ backgroundColor: "#f3f4f6" }}>
      <div className=" d-flex align-items-center justify-content-center mt-20">
        <div style={{ width: "450px", marginTop: "30px" }}>
          <ValidatedLoginForm />
          <div className="m-4">
            <p className="text-center">
              Already have an account? &nbsp;
              <a href="login" style={{ color: "blue" }}>
                Login
              </a>
            </p>
          </div>

          <div className="privacy__content d-flex fw-light align-items-center justify-content-evenly">
            <a href="#">Privacy Notice</a>
            <a href="#">Cookies Notice</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
      <Footer />
      <FooterCopyRight />
    </div>
  );
}

export default SignupPage;
