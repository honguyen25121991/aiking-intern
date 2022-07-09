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
  buyCoin01,
  buyCoin02,
  cashOut01,
  cashOut02,
  cashOut03,
  cashOut04,
} from "../../assets/images/index";
import { ScrollToTop } from "../../components";
import FooterCopyRight from "../FooterCopyRight/Footer";
function Deposit() {
  return (
    <>
      <div className="container deposit">
        <header className="deposit__herder">
          <div className="banner__content">
            <img src={desposit___banner} alt="desposit___banner" />
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
              <img src={signIn__tutorial} alt="signIn__tutorial" />
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
              <img src={reCharge__tutorial01} alt="reCharge__tutorial01" />
              <img src={reCharge__tutorial02} alt="reCharge__tutorial02" />
              <img src={reCharge__tutorial03} alt="reCharge__tutorial03" />
            </div>
          </div>
          <div className="deposit__tutorial--content">
            <p>
              Chọn “Pick an image from camera roll”–-&gt;Chọn hình và kéo chỉnh
              sau đó chọn “Cắt”–-&gt; Nhấn chọn Submit .
            </p>
            <div className="deposit__tutorial--img">
              <img src={reCharge__tutorial04} alt="reCharge__tutorial04" />
              <img src={reCharge__tutorial05} alt="reCharge__tutorial05" />
              <img src={reCharge__tutorial06} alt="reCharge__tutorial06" />
            </div>
          </div>
        </section>
        <section className="deposit__content">
          <div className="border-bottom ">
            <h3>Hướng dẫn bán coin</h3>
            <hr className="hr__content" />
          </div>

          <div className="deposit__tutorial--content">
            <p>
              Ở giao diện “Home” chọn “Buy”–&gt;Nhập số lượng Coin muốn
              mua–&gt;Nhấn “Buy”, vào “My Coin” để xem Coin mình đang có.
            </p>
            <div className="deposit__tutorial--img">
              <img src={buyCoin01} alt="buyCoin01" />
              <img src={buyCoin02} alt="buyCoin02" />
            </div>
          </div>
        </section>
        <section className="deposit__content">
          <div className="border-bottom ">
            <h3>Hướng dẫn rút tiền</h3>
            <hr className="hr__content" />
          </div>

          <div className="deposit__tutorial--content">
            <p>
              Vào “Profile” chọn “Upload Document”–&gt;Tải CCCD hoặc CMND lên
              nhấn chọn “Change your Document” <br />
              Vào “Withdraw” chọn “Click here”–&gt; Điền thông tin tài khoản và
              nhấn “Submit”.
            </p>
            <div className="deposit__tutorial--img">
              <img src={cashOut01} alt="cashOut01" />
              <img src={cashOut02} alt="cashOut02" />
              <img src={cashOut03} alt="cashOut03" />
              <img src={cashOut04} alt="cashOut04" />
            </div>
          </div>
          <FooterCopyRight />
        </section>
      </div>

      <ScrollToTop />
    </>
  );
}

export default Deposit;
