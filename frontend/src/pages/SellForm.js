import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SellForm() {

  const [credentials, setCredentials] = useState({ name: "", type: "", image: "", price: "", age: "", street: "", locality: "", city: "", ownerName: "", ownerContact: "", ownerEmail: "" });


  const navigate = useNavigate();
  const onFinish = async () => {
    try {
      console.log(credentials);
      const response = await axios.post("", credentials);
      //console.log(values);
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

  const onChange = async (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      const dataArray = new FormData();
      dataArray.append("file", file);
      dataArray.append("upload_preset", "");
      dataArray.append("cloud_name", "");
      try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/{}/image/upload`, {
          method: 'POST',
          body: dataArray
        });

        if (response.ok) {
          const data = await response.json();
          setCredentials({ ...credentials, image: data.url })
          console.log('Image uploaded successfully:', data);
        } else {
          console.error('Error uploading image:', response.statusText);
        }
      } catch (error) {
        console.error('An error occurred during the image upload:', error);
      }
    }
    else {
      setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

  }


  return (

    <div className="card p-3">
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" name='name' value={credentials.name} onChange={onChange} />
        </Form.Item>
        <Form.Item label="Type" name="type">
          <Input placeholder="Type" name='type' value={credentials.type} onChange={onChange} />
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



      </Form>
    </div>

  )
}

export default SellForm;


