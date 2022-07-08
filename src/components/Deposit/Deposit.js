import React from "react";
import "./Deposit.scss";
import {
  desposit___banner,
  signIn__tutorial,
  reCharge__tutorial01,
  reCharge__tutorial02,
  reCharge__tutorial03,
  reCharge__tutorial04,
  reCharge__tutorial05,
  reCharge__tutorial06,
} from "../../assets/images/index";

function Deposit() {
  return (
    <>
      <div className="container deposit">
        <header className="deposit__herder">
          <div className="banner__content">
            <img src={desposit___banner}></img>
          </div>
        </header>
        <section className="deposit__content">
          <div
            className="deposit__tutorial"
            style={{ backgroundColor: "white" }}
          >
            <h3>1.Đăng kí tài khoản</h3>
          </div>
          <div className="deposit__tutorial--hr">
            <hr style={{ height: "2px" }} />
          </div>
          <div className="deposit__tutorial--content">
            <p>
              Tại giao diện Wellcom chọn Sign Up và điền đầy đủ thông tin và bấm
              chọn Sign Up để đăng ký tài khoản mới. Đăng ký xong nhập Mail và
              Password nhấn chọn Sign In..
            </p>
            <div className="deposit__tutorial--img">
              <img src={signIn__tutorial} />
            </div>
          </div>
        </section>
        <section className="deposit__content">
          <div
            className="deposit__tutorial deposit__reChange--content"
            style={{ backgroundColor: "white" }}
          >
            <h3>2.Cách nạp tiền vào tài khoản</h3>
          </div>
          <div className="deposit__tutorial--hr">
            <hr style={{ height: "2px" }} />
          </div>
          <div className="deposit__tutorial--content">
            <p>
              Chọn Deposit –-&gt; Creaet New–&gt; Nhập số tiền muốn nạp –&gt;
              Chọn Select a Bank –&gt; Nhấn chọn Submit
            </p>
            <div className="deposit__tutorial--img">
              <img src={reCharge__tutorial01} />
              <img src={reCharge__tutorial02} />
              <img src={reCharge__tutorial03} />
            </div>
          </div>
          <div className="deposit__tutorial--content">
            <p>
              Chọn “Pick an image from camera roll”–-&gt;Chọn hình và kéo chỉnh
              sau đó chọn “Cắt”–-&gt; Nhấn chọn Submit .
            </p>
            <div className="deposit__tutorial--img">
              <img src={reCharge__tutorial04} />
              <img src={reCharge__tutorial05} />
              <img src={reCharge__tutorial06} />
            </div>
          </div>
        </section>
        <section className=""></section>
      </div>
    </>
  );
}

export default Deposit;
