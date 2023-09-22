import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';

function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState
    (
        {
            name:"", email:"", contactno:0, password:""
        }
    )

    const submitData = async(e) => {
        const {name, email, contactno, password} = user;
        const res = await fetch("", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, contactno, password
            })
        });

        const data = await res.json();

        if(data.status===500 || !data){
            console.log("Unsuccessful");
            toast("Register Unsuccessful!!");
        }
        else{
            console.log("Successful");
            toast("Register Successful!!");
            navigate("/login");
        }
    };

    let n1, value;

    const changed = async(e) => {
        n1 = e.target.name;
        value = e.target.value;
        setUser({...user, [n1]:value});
    }

    return (
        <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>Register</h1>
                <Form method="POST" layout='vertical' onFinish={submitData}>
                    <Form.Item label='Name' >
                        <Input name='name' placeholder='Name' value={user.name} onChange={changed} />
                    </Form.Item>
                    <Form.Item label='Email'>
                        <Input name='email' placeholder='Email' value={user.email} onChange={changed} />
                    </Form.Item>
                    <Form.Item label='Contactno' >
                        <Input name='contactno' placeholder='contactno' value={user.contactno} onChange={changed} />
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input name='password' placeholder='Password' type='password' value={user.password} onChange={changed} />
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>REGISTER</Button>
                    <a href='/login' className='anchor'>Click Here to Login</a>
                </Form>
                
            </div>
        </div>
    )
}

export default Register;
