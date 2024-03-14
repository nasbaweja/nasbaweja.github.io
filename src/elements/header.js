import SourceImg from "../images/vappu.jpg";
import ProfileImg from "../images/nimer-singh.jpg";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HeaderJS() {
  return (
    <header className="header-section position-relative" style={{ backgroundImage: `url(${SourceImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
      <Container>
        <Row>
          <Col>
            <div className="about-me">
              <img
                  src={ProfileImg}
                  alt="Your Name"
                  className="img-fluid rounded-circle"
                  style={{ width:"150%", maxHeight:"15vh", objectFit: "cover", objectPosition: "center top", position: "relative", zIndex: 1, borderRadius: "50%"}}
                />
              <div className="about-me-content" style={{ position: "relative", zIndex: 1, color: "#fff" }}> {/* Set text color to white */}
                <h2>About Me</h2>
                <p>Your description goes here.</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="additional-content" style={{ position: "relative", zIndex: 1, color: "#fff" }}> {/* Set text color to white */}
              <h2>Additional Content</h2>
              <p>Some content about you can go here.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default HeaderJS;