"use client";
import { Button, Checkbox, Form, Input, Alert } from "antd";
import { useState } from "react";

export default function Home() {
  const [login, setLogin] = useState(false);
  const onFinish = (values) => {
    if (values.email && values.password) {
      setLogin(true);
    }
    console.log("Success:", values, login);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <main className="container flex justify-center min-h-screen items-center">
      <div>
        <h1 className="text-center my-6 text-3xl">Login</h1>
        <div className="border-1 border-gray-100">
          <Form
            name="basic"
            layout="vertical"
            // labelCol={{
            //   span: 16,
            // }}
            // wrapperCol={{
            //   span: 16,
            // }}
            style={{
              maxWidth: 800,
              minWidth: 300,
              border: "1px solid gray",
              padding: 8,
              borderRadius: 3,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              type="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              // wrapperCol={{
              //   offset: 8,
              //   span: 16,
              // }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            // wrapperCol={{
            //   offset: 8,
            //   span: 16,
            // }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
        {login && (
          <Alert className="mt-4" message="Successfully login" type="success" />
        )}
      </div>
    </main>
  );
}
