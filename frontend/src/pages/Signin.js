import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("", values);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        localStorage.setItem("userEmail", credentials.email);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" name='email' value={credentials.email} onChange={onChange}/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" name='password' value={credentials.password} onChange={onChange}/>
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
         
        </Form>
      </div>
    </div>
  );
}

export default Signin;
