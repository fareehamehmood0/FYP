import React from "react";
import { Typography, Button, Space } from "antd";

const { Title, Paragraph } = Typography;

const LandingPage = () => {
  const styles = {
    landingPage: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      height: "100vh",
      background: `url("landingpg.png") no-repeat center center/cover`,
      position: "relative",
    },
    textContainer: {
      maxWidth: "500px",
      marginRight: "50px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor:"white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
      textAlign: "Left",
      position: "absolute",
      right: "50px",
    },
    title: {
      color: "#4D96FF",
      fontSize: "40px",
      marginTop:"50px",
    },
    paragraph: {
      color: "#4D96FF",
      fontSize: "18px",
    },
    buttonGroup: {
      marginTop: "10px",
      marginBottom:"50px",
    },
  };

  return (
    <div style={styles.landingPage}>
      <div style={styles.textContainer}>
        <Title className="css" level={1} style={styles.title}>
          <b>Welcome to Collabora</b>
        </Title>
        
        <Paragraph className="css" style={styles.paragraph}>
          Hi, there come to manage your projects effectively. Join us to
          streamline your workflow and achieve your goals.
        </Paragraph>
        <Paragraph className="css" style={styles.paragraph}>
          If you are an Admin then Signup otherwise just Login.
        </Paragraph>
    
        <Space style={styles.buttonGroup}>
          <Button
          className="css"
            style={{
              backgroundColor: "#4D96FF",
              borderColor: "#34368A",
              color: "#fff",
              fontSize:"20px",
              
            }}
            type="primary"
            size="large"
          >
            Sign Up
          </Button>
          <Button
          className="css"
            style={{
              backgroundColor: "#4D96FF",
              borderColor: "#34368A",
              color: "#fff",
              fontSize:"20px",
            }}
            size="large"
          >
            Log In
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default LandingPage;
