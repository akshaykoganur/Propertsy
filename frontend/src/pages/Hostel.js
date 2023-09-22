import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import "../index.css";
import HostelCard from "./HostelCard";
import LoadingSpinner from './LoadingSpinner';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Hostel() {
  const navigate = useNavigate();
  
  const [dat, setMyArray] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const email = localStorage.getItem("userEmail");
  if (!email) {
    toast('Kindly log in to your account', { autoClose: 4000 }, {toastId: 'warn1',});
    setTimeout(function() {navigate('../login')}, 5000);
    //return <Navigate replace to="/login" />;
  }

  async function submitData() {
    try {
      setIsLoading(true);
      let url = "";
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city,
          type
        })
      });
      let data = await res.json();
      console.log(data);
      setMyArray(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const typeChanged = (value) => {
    //let houseType = e.target.value;
    setType(value);
  }

  const changed = async (e) => {
    let value = e.target.value;
    let value1 = value.toLowerCase();
    let value2 = capitalizeFirstLetter(value1);
    setCity(value2);
  }

  const houseTypes = ['Individual Room', 'Twin Room (2 people sharing)', 'Triple Room (3 people sharing)', 'Quad Room (4 people sharing)'];


  return (
    <>
      <ToastContainer limit={1}/>
      <Form method="POST" layout='vertical' onFinish={submitData} className="custom-form">
        <div className="input-group">
        <Form.Item label='Locality' className="input-item mx-3">
            <Input name='locality' placeholder='Enter Locality' className="input-field" />
          </Form.Item>
          <Form.Item label='City' className="input-item mx-3">
            <Input name='city' placeholder='Enter city' value={city} onChange={changed} className="input-field" />
          </Form.Item>
          <Form.Item label='Type' className="input-item mx-3">
            <Select
              name='type'
              placeholder='Select house type'
              value={type}
              onChange={typeChanged}
            >
              {houseTypes.map((houseType) => (
                <Select.Option key={houseType} value={houseType}>
                  {houseType}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <Form.Item>
          <Button className='primary-button' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <div className="container buy mb-3 fs-3 d-flex flex-wrap justify-content-center">
      {isLoading ? <LoadingSpinner /> : dat.length > 0 ? (
          dat.map((data, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <HostelCard hostelProperties={data} />
            </div>
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
            No Properties available in given city
          </div>
        )}
      </div>

    </>
  );
}

export default Hostel;
