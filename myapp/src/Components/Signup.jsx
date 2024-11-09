import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
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
      <Col xs={0} sm={12} md={10} lg={8} style={{ textAlign: "center" }}>
        <img
          src="landing.webp" // Replace with your image URL
          alt="Signup"
          style={{ width: "100%", height: "560px", borderRadius: "4px" }}
        />
      </Col>
      <Col xs={24} sm={12} md={10} lg={8}>
        <div
          style={{
            padding: "30px",
            background: "#fff",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title level={3} style={{ textAlign: "center" }}>
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
              name="username"
              label="Username"
              hasFeedback
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
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
              name="agree"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            "You must agree to the terms and conditions!"
                          )
                        ),
                },
              ]}
            >
              <Checkbox>I agree to the terms and conditions</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Text>Already have an account? </Text>
            <Link href="/login">Log in</Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
