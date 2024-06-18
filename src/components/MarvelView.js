import React from "react";
import { Container, Row, Col } from "reactstrap";

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source
          src={`${process.env.PUBLIC_URL}/images/MARVEL_INTRO.mp4`}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

const MarvelView = () => {
  return (
    <Container style={{ height: "100vh", width: "100vw" }}>
      <Row>
        <Col md="12">
          <div style={{ position: "relative", height: "100vh" }}>
            <BackgroundVideo />
            <div
              className="vertical-center horizontal-center"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{ marginBottom: 10, marginTop: -150, color: "white" }}
              >
                <h1>Marvel Universe</h1>
                <p>Welcome to the Marvel Universe!</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MarvelView;