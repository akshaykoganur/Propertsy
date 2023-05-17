
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
//import books2 from "./images/books2.jpg";
import "../index.css";
import BuyCard from "./BuyCard";

function Buy() {
  const [dat, setMyArray] = useState([]);
  const [city, setCity] = useState('');
  //const clicked = async (e) => {
  //console.log('Hi');
  //}
  async function submitData() {
    try {
      let url = "http://localhost:5000/api/buyData";
      let res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          city
        })
      });
      let data = await res.json();
      console.log(data);
      setMyArray(data);
    } catch (err) {
      console.error(err);
    }
  }

  const changed = async (e) => {
    let value = e.target.value;
    setCity(value);
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

                <Form method="POST" layout='vertical' onFinish={submitData}>
                    <Form.Item label='City' >
                        <Input name='city' placeholder='City' value={city} onChange={changed} />
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>Submit</Button>
                </Form>
                


      <div className="container buy mb-3 fs-3 d-flex flex-wrap">
        {dat !== [] ? (
          dat.map((data, idx) => {
            return (
              <div key={idx} className="col-12 col-md-6 col-lg-3 mx-5">
                <BuyCard buyProperties={data} />
              </div>
            );
          })
        ) : (
          <div>**</div>
        )}
      </div>

    </>
  );
}

export default Buy;