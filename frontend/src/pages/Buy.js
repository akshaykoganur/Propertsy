
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import "../index.css";
import BuyCard from "./BuyCard";

function Buy() {
  const [dat, setMyArray] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  //const clicked = async (e) => {
  //console.log('Hi');
  //}
  async function submitData() {
    try {
      let url = "https://propertsy-backend.onrender.com/api/buyData";
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

  const typeChanged = async(e) => {
    let houseType = e.target.value;
    setType(houseType);
  }

  const changed = async (e) => {
    let value = e.target.value;
    let value1 = value.toLowerCase();
    let value2 = capitalizeFirstLetter(value1);
    setCity(value2);
  }

  return (
    <>
      {/* <div className="container mb-3 fs-3 m-3">
        {dat !== [] ? (
          dat.map((data, idx) => {
            return (
              <div key={idx} className="row">
                <div key={idx} className="col-12 col-md-6 col-lg-3">
                  <BuyCard buyProperties={data} />
                </div>
              </div>
            );
          })
        ) : (
          <div>**</div>
        )}
      </div> */}

      {/*<Form method="POST" layout='vertical' onFinish={submitData}>
                    <Form.Item label='City' >
                        <Input name='city' placeholder='City' value={city} onChange={changed} />
                    </Form.Item>
    <Button className='primary-button mt-2 mb-2' htmlType='submit'>Submit</Button>
                     
    </Form>*/}

      <Form method="POST" layout='vertical' onFinish={submitData} className="custom-form">
        <div className="input-group">
          <Form.Item label='City' className="input-item">
            <Input name='city' placeholder='Enter city' value={city} onChange={changed} className="input-field" />
          </Form.Item>
          <Form.Item label='Type' className="input-item">
            <Input name='type' placeholder='Enter house type' value={type} onChange={typeChanged} className="input-field" />
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
              <BuyCard buyProperties={data} />
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

export default Buy;