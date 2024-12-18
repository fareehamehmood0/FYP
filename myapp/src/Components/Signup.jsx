import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Typography,
  Row,
  Col,
  message,
} from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success("Successfully Signed Up!");
      setLoading(false);
    }, 1000);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f0f2f5" }}
    >
      <Col  lg={8} style={{ textAlign: "center" }}>
        <img
          src="signup1.jpg"
          alt="Signup"
          style={{ width: "100%", height: "485px", borderRadius: "2px" }}
        />
      </Col>
      <Col lg={8}>
        <div
          style={{
            padding: "10px",
            background: "#fff",
            borderRadius: "2px",
          }}
        >
          <Title level={2} style={{ textAlign: "center", color:"#4D96FF" }}>
            Sign Up
          </Title>
          <Form
            name="signup"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="name"
              label="Name fo student"
              hasFeedback
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              hasFeedback
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              hasFeedback
              rules={[
                { required: true, message: "Please enter your password!" },
                { min: 6, message: "Password must be at least 6 characters!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Confirm Password"
              />
            </Form.Item>


            <Form.Item
              style={{
                marginTop: "-10px",
              }}
            >
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                loading={loading}
                block
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Text>Already have an account? </Text>
            <Link size="large" href="/login">
              Log in
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
