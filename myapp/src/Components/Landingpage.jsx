import React from "react";
import { Button, Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <div style={styles.landingPage}>
      <Row gutter={16} style={styles.landingRow}>
        {/* Left side image */}
        <Col xs={24} md={12} style={styles.landingImage}>
          <img
            src="landing.webp"
            height="100"
            alt="Landing"
            style={styles.image}
          />
        </Col>

        {/* Right side text and buttons */}

        <Col xs={24} md={12} style={styles.landingContent}>
          <Title level={2}>
            Welcome to Final Year Project Management System
          </Title>
          <Paragraph>
            "Collabora" is a solution time problem that occur in FYP. It is a
            dream for us coming true as such system do not exist in our IT
            industry.
          </Paragraph>
          <Paragraph>If you are admin then signup otherwise just login.</Paragraph>
          <div style={styles.buttonGroup}>
            <Button type="primary" size="large" style={{ marginRight: "10px" }}>
              Sign Up
            </Button>
            <Button size="large">Login</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// Inline CSS styles
const styles = {
  landingPage: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f5f5f5",
  },
  landingRow: {
    width: "100%",
    maxWidth: "1200px",
  },
  landingImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
  },
  landingContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
  },
  buttonGroup: {
    marginTop: "20px",
  },
};

export default LandingPage;
