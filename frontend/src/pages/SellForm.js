
import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:5000/upload"

function SellForm() {

  const [credentials, setCredentials] = useState({ name: "", image: "", price: "", age: "", street: "", locality: "", city: "", ownerName: "", ownerContact: "", ownerEmail: "" });


  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log(values);
      const response = await axios.post("http://localhost:5000/api/sell", values);
      console.log(values);
      if (response.data.success) {
        navigate("/profile");
        toast("Succeesful");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const onChange = async(e) => {
    if(e.target.name === 'image'){
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      console.log(base64)
      setCredentials({ ...credentials, image: base64 })
    }
    else{
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  }

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (
    <div className="App">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" name='name' value={credentials.name} onChange={onChange} />
        </Form.Item>
        <Form.Item label="Image" name="image">
          <Input
            type="file"
            name="image"
            id='file-upload'
            accept='.jpeg, .png, .jpg'
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item label="Price" name="price">
          <Input placeholder="Price" name='price' value={credentials.price} onChange={onChange} />
        </Form.Item>
        <Form.Item label="Age" name="age">
          <Input placeholder="Age" name='age' value={credentials.age} onChange={onChange} />
        </Form.Item>
        <Form.Item label="Street" name="street">
          <Input placeholder="Street" name='street' value={credentials.street} onChange={onChange} />
        </Form.Item>
        <Form.Item label="Locality" name="locality">
          <Input placeholder="Locality" name='locality' value={credentials.locality} onChange={onChange} />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input placeholder="City" name='city' value={credentials.city} onChange={onChange} />
        </Form.Item>
        <Form.Item label="OwnerName" name="ownerName">
          <Input placeholder="OwnerName" name='ownerName' value={credentials.ownerName} onChange={onChange} />
        </Form.Item>
        <Form.Item label="OwnerContact" name="ownerContact">
          <Input placeholder="OwnerContact" name='ownerContact' value={credentials.ownerContact} onChange={onChange} />
        </Form.Item>
        <Form.Item label="OwnerEmail" name="ownerEmail">
          <Input placeholder="OwnerEmail" name='ownerEmail' value={credentials.ownerEmail} onChange={onChange} />
        </Form.Item>

        <Button className="primary-button my-2 full-width-button" htmlType="submit">
          Submit
        </Button>

        <Link to="/register" className="anchor mt-2">
          CLICK HERE TO REGISTER
        </Link>

      </Form>

    </div>
  )
}

export default SellForm;


