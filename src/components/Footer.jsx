import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5">
        <Row className="align-items-center">          
          <Col size={12} sm={6}>
            <h1 className="text-white">Pheez</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pheeraphat-dherachaisuphakij-33718b250/" target={"_blank"}><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/pheeraphat.dherachaisuphakij" target={"_blank"}><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/phx_pd/" target={"_blank"}><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved by "Pheeraphat Dherachaisuphakij"</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
