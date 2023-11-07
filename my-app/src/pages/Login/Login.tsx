import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

const LoginForm: React.FC = () => {
  return (
    <Form name="login-form">
      <Form.Item
        label={"general.login.username"}
        name="username"
        rules={[
          { required: true, message: "general.login.usernamePlaceholder" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={"general.login.password"}
        name="password"
        rules={[
          { required: true, message: "general.login.passwordPlaceholder" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <p>
            Or <Link to="/register"> register now!</Link>
          </p>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
