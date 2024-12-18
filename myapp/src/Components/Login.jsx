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
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      message.success("Successfully Logged In!");
      setLoading(false);
    }, 1000);
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f0f2f5" }}
    >
      <Col lg={8}>
        <div
          style={{
            padding: "30px",
            background: "#fff",
            borderRadius: "2px",
          }}
        >
          <Title level={2} style={{ textAlign: "center", color:"#4D96FF" }}>
            Log In
          </Title>
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true, message: "Please enter your password!" }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Checkbox name="remember" defaultChecked>
                  Remember me
                </Checkbox>
                <Link href="/forgot-password">Forgot Password?</Link>
              </div>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                Log In
              </Button>
            </Form.Item>
          </Form>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Text>Don't have an account? </Text>
            <Link href="/signup">Sign up</Link>
          </div>
        </div>
      </Col>
      <Col  lg={8} style={{ textAlign: "center" }}>
        <img
          src="login.png" 
          alt="Login"
          style={{ width: "100%", height: "408px", borderRadius: "2px" }}
        />
      </Col>
    </Row>
  );
};
export default Login;
