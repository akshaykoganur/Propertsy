import { Button, Form, Input } from "antd";
import React from "react";
//import { Link } from "react-router-dom";

function Signin() {

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical">
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <a href="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </a>
         
        </Form>
      </div>
    </div>
  );
}

export default Signin