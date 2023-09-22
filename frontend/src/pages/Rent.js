import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import "../index.css";
import RentCard from "./RentCard";

function Rent() {
  const [dat, setMyArray] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  async function submitData() {
    try {
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
    } catch (err) {
      console.error(err);
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

  const houseTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', 'Penthouse', 'Villa', 'Bungalow'];


  return (
    <>

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
        {dat.length > 0 ? (
          dat.map((data, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center">
              <RentCard rentProperties={data} />
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

export default Rent;
