import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import '../index.css';

function HostelForm() {

    const [credentials, setCredentials] = useState({ name: "", type: "", image: "", rent: "", deposit: "", age: "", street: "", locality: "", city: "", ownerName: "", ownerContact: "", ownerEmail: "", members: [] });
    //const [members, setMembers] = useState([]);
    const onFinish = async () => {
        try {
            //console.log(credentials);
            
            const res = await axios.post("", credentials);
            //console.log(values);
            if (res.data.success) {
                toast("Succeesful");
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    const onChange = async (e) => {
        if (e.target.name === 'image') {
            const file = e.target.files[0];
            const base64 = await convertToBase64(file);
            console.log(base64)
            //console.log(e.target.value)
            setCredentials({ ...credentials, image: base64 })
        }
        else if (e.target.name !== 'member'){
            //console.log(e.target.value)
            setCredentials({ ...credentials, [e.target.name]: e.target.value })
        }
        //console.log(credentials.image)
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
                <Form.Item label="Rent" name="rent">
                    <Input placeholder="Rent" name='rent' value={credentials.rent} onChange={onChange} />
                </Form.Item>
                <Form.Item label="Deposit" name="deposit">
                    <Input placeholder="Deposit" name='deposit' value={credentials.deposit} onChange={onChange} />
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
                <Form.Item label="member" name="member">
                    <Input placeholder="member" name='member' value={credentials.member} onChange={onChange} />
                </Form.Item>

                <Button className="primary-button my-2 full-width-button" htmlType="submit">
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default HostelForm;
