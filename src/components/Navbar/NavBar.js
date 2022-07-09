import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../About/AboutUs";
import Contact from "../Contact/ContactUs";
import Home from "../Home/Home";
import Deposit from "../Deposit/Deposit";
import Blog from "../Blog/Blog";
import LoginPage from "../Login/LoginPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { logo } from "../../assets/images/index";
import "./NavBar.scss";
import SignupPage from "../SignupPage/SignupPage";

const Navigation = () => {
  return (
    <Router>
      <div className=" container-fluid">
        <Navbar expand="lg">
          <div className=" navbar__content">
            <Container className="nav__container">
              <Navbar.Brand as={Link} to={"/"}>
                <img src={logo} alt="Shopcoin" className="logo" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav-item">
                  <Nav.Link as={Link} to={"/"}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/deposit"}>
                    Deposit-withdraw
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/blog"}>
                    Blog
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/about"}>
                    About us
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/contact"}>
                    Contact us
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>

              <Nav>
                <Nav.Link as={Link} to={"/login"}>
                  <div className="login-btn">
                    <span>Login</span>
                  </div>
                </Nav.Link>
              </Nav>
            </Container>
          </div>
        </Navbar>
        <div>
          <Routes>
            <Route path="/deposit" element={<Deposit />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>

            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Navigation;
