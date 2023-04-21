import React from 'react';
import { Form, Input, Button } from 'antd';
//import Link from 'react-router-dom';

function Register() {
    return (
        <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>Register</h1>
                <Form method="POST" layout='vertical'>
                    <Form.Item label='Name' >
                        <Input name='name' placeholder='Name'/>
                    </Form.Item>
                    <Form.Item label='Email'>
                        <Input name='email' placeholder='Email'/>
                    </Form.Item>
                    <Form.Item label='Contactno' >
                        <Input name='contactno' placeholder='contactno'/>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input name='password' placeholder='Password' type='password'/>
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>REGISTER</Button>
                    <a href='/login' className='anchor'>Click Here to Login</a>
                </Form>
                
            </div>
        </div>
    )
}

export default Register;