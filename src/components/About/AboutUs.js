import React from "react";
import Footer from "../Footer/Footer";
import "./AboutUs.scss";
import { banner } from "../../assets/images/index";
import { ScrollToTop } from "../../components";

function AboutUs() {
  return (
    <div className="container">
      <div className="About__content">
        <div>
          <img src={banner} />
        </div>
        <div>
          <div className="About__content--text">
            <h1>
              SHOP COIN GROUP NƠI ĐÁNG TIN CẬY, AN TOÀN CHO MỌI GIAO DỊCH TIỀN
              ĐIỆN TỬ.
            </h1>
          </div>
          <div className="About__content--text">
            <div className="About__content--intro">
              <p>I: Giới Thiệu Về SHOP COIN GROUP</p>
            </div>
            <ul>
              <li>
                Vào năm 2020 SHOP COIN GROUP được COINBASE hợp tác làm đại diện
                liên kết cấp cao tại Việt Nam.
              </li>
              <li>COINBASE Được cấp phép hoạt động bởi:</li>
              <li>Cơ quan quản lý tài chính Anh (FCA).</li>
              <li>Cơ quan Giám sát Tài chính Liên bang Đức.</li>
              <li>
                Công ty được dẫn dắt bởi các chuyên gia trong lĩnh vực công
                nghệ, đầu tư tài chính với hơn 10 năm kinh nghiệm.
              </li>
            </ul>
            <p>
              <strong>1: Tầm nhìn</strong>
            </p>
            <p className="content--text ">
              Trở thành biểu tượng uy tín hàng đầu Việt Nam về cung cấp dịch vụ
              trong lĩnh vực tiền điện tử.
            </p>
            <p>
              <strong>2: Sứ Mệnh</strong>
            </p>
            <p className="content--text ">
              ShopCoinUSA cam kết không ngừng nâng cao, chất lượng dịch vụ để
              mang đến lợi ích tốt nhất cho khách hàng.
            </p>
            <p>
              <strong>3: Giá Trị Cốt Lõi</strong>
            </p>
            <p className="content--text ">
              <strong> Uy tín:</strong> Luôn đặt chữ tín lên hàng đầu không
              ngừng hoàn thiện để đáp ứng đúng và cao hơn những cam kết.
            </p>
            <p className="content--text ">
              <strong> Trách nhiệm:</strong>ShopCoin Group luôn đặt trách nhiệm
              lên hàng đầu với khách hàng, đối tác và toàn thể nhân viên.
            </p>
            <p className="content--text ">
              <strong> Đoàn kết:</strong> ShopCoin Group xây dựng một tập thể
              gắn kết mọi thành viên và hướng đến lợi ích chung của công ty.
            </p>
            <div className="About__content--intro">
              <p>II. Ứng Dụng App Shop Coin USA</p>
            </div>
            <strong className="content__description">
              1: Mua và Bán Crypto dễ dàng
            </strong>
            <ul>
              <li>Mua và bán tiền điện tử một cách an toàn, nhanh chóng.</li>
              <li>
                Sở hữu tiền điện tử ngay lập tức chỉ cần liên kết tài khoản ngân
                hàng.
              </li>
              <li>
                Các danh mục Coin được sắp xếp tối giản dễ mua, bán, nắm giữ và
                giao dịch Bitcoin và các loại tiền điện tử khác một cách dễ
                dàng.
              </li>
            </ul>
            <strong className="content__description">
              2: Công Cụ Thông Minh Để Trở Thành Chuyên Gia Crypto
            </strong>
            <ul>
              <li>
                Quản lý danh mục đầu tư: Dễ sử dụng và quản lý được lịch sử mua
                và bán
              </li>
              <li>
                Theo dõi giá và xu hướng di chuyển nhiều nhất trong 24h qua của
                Bitcoin và các loại tiền điện tử khác.
              </li>
              <li>
                Trình theo dõi và bảng điều khiển tiền điện tử: Rõ ràng và thân
                thiện với người dùng, giúp bạn xem giá tiền điện tử và giá trị
                tài sản bất cứ lúc nào trong ngày, ở bất kỳ đâu.
              </li>
            </ul>
            <strong className="content__description">
              3: Nạp Rút Tiền Nhanh Chóng Tự Động
            </strong>
            <ul>
              <li>Nạp tiền</li>
              <li>
                Quá trình nạp tiền hệ thống tự động xử lý chưa đến 5 phút sẽ vào
                tài khoản nhà đầu tư.
              </li>
              <li>Rút tiền</li>
              <li>Khách đặt lệnh rút tiền:</li>
              <li>
                Hệ thống tự nhận lệnh và chuyển tiếp tất cả thông tin đến robot
              </li>
              <li>Robot xử lý:</li>
              <li>Tự động tiến hành kiểm tra thông tin chính chủ.</li>
              <li>Tự động kiểm tra số dư trong tài khoản</li>
              <li>Khách nhận được tiền qua tài khoản</li>
              <li>Tất cả quy trình trong 30 phút</li>
              <li>Nhanh và chính xác.</li>
              <li>Rút tiền kể cả thứ 7, chủ nhật kể cả ngày lễ.</li>
            </ul>
            <div className="About__content--intro">
              <p>IV: Đội Hỗ Trợ Chuyên Nghiệp Tại Thị Trường Việt Nam.</p>
            </div>
            <strong className="content__description">
              1: Chuyên Môn Nghiệp Vụ Cao
            </strong>
            <ul>
              <li>Nhân viên được đào tạo chuyên môn về kỹ thuật.</li>
              <li>Đào tạo tâm lý khách hàng.</li>
              <li>Đào tạo về sử dụng robot thông minh.</li>
            </ul>
            <strong className="content__description">
              2: Tốc Độ Xử Lý Vấn Đề Của Khách Hàng
            </strong>
            <ul>
              <li>
                Tốc độ xử lý nhanh do sử dụng robot thông minh cho hệ thống.
              </li>
              <li>Cập nhật hoàn toàn tự động</li>
              <li>Hỗ trợ 24/7 kể cả ngày lễ.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default AboutUs;
