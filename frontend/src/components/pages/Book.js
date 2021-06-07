import React, { useState } from 'react';
import { Form, DatePicker, TimePicker, Button, Row, notification } from 'antd';
import axios from '../../config/axios';
import { withRouter } from 'react-router-dom';

import '../css/BookImg.css'
import WebLayoutUser from './WebLayoutUser';

let oneDaysFromNow = new Date();
oneDaysFromNow.setDate(oneDaysFromNow.getDate() + 1);
//oneDaysFromNow.setHours(7, 0, 0, 0);
//console.log(oneDaysFromNow);

const Book = (props) => {
  const [countSmallChicken1, setCountSmallChicken1] = useState(0);
  const [countBigChicken2, setCountBigChicken2] = useState(0);
  const [countDuck3, setCountDuck3] = useState(0);
  const [countPork4, setCountPork4] = useState(0);

  const [price, setPrice] = useState(0);
 
  function addCountSmallChick1() {
    if (countSmallChicken1 === 99) return setCountSmallChicken1(99);
    setCountSmallChicken1(countSmallChicken1 + 1);
    setPrice(price + 200);
  };
  function subCountSmallChick1() {
    if (countSmallChicken1 === 0) return setCountSmallChicken1(0);
    setCountSmallChicken1(countSmallChicken1 - 1);
    setPrice(price - 200);
  };

  function addCountBigChick2() {
    if (countBigChicken2 === 99) return setCountBigChicken2(99);
    setCountBigChicken2(countBigChicken2 + 1);
    setPrice(price + 300);
  };
  function subCountBigChick2() {
    if (countBigChicken2 === 0) return setCountBigChicken2(0);
    setCountBigChicken2(countBigChicken2 - 1);
    setPrice(price - 300);
  };

  function addCountDuck3() {
    if (countDuck3 === 99) return setCountDuck3(99);
    setCountDuck3(countDuck3 + 1);
    setPrice(price + 350);
  };
  function subCountDuck3() {
    if (countDuck3 === 0) return setCountDuck3(0);
    setCountDuck3(countDuck3 - 1);
    setPrice(price - 350);
  };

  function addCountPork4() {
    if (countPork4 === 99) return setCountPork4(99);
    setCountPork4(countPork4 + 1);
    setPrice(price + 120);
  };
  function subCountPork4() {
    if (countPork4 === 0) return setCountPork4(0);
    setCountPork4(countPork4 - 1);
    setPrice(price - 120);
  };

  const onFinish = (fieldsValue) => {
    if (countSmallChicken1 === 0 && countBigChicken2 === 0 && countDuck3 === 0 && countPork4 === 0) return alert('กรุณาเลือกสินค้าอย่างน้อย 1 ชิ้น');
    let confirmed = window.confirm('***เมื่อสั่งจองแล้วจะไม่สามารถแก้ไข หรือยกเลิกรายการได้');
    if (confirmed) {
      const body = {
        //...fieldsValue,
        small_chicken1: countSmallChicken1,
        big_chicken2: countBigChicken2,
        duck3: countDuck3,
        pork4: countPork4,
        price: price,
        date: fieldsValue['date-picker'].format('YYYY-MM-DD'),
        time: fieldsValue['time-picker'].format('HH:mm'),
        //test2: new Date(Date.parse(fieldsValue['date-picker'].format('YYYY-MM-DD') + 'T' + fieldsValue['time-picker'].format('HH:mm'))),
      };
      //console.log('Received values of form: ', body);
      axios.post('/users/order', body)
        .then(res => {

          notification.success({
            message: 'สั่งจองสินค้าเรียบร้อยแล้ว',
          });
          props.history.replace('/status');
        })
        .catch(err => {
          notification.error({
            message: `สั่งจองสินค้าล้มเหลว`,
          })
        });
    }
  };
  return (
    <WebLayoutUser contentName='Book' setRole={props.setRole}
      content={
        <Form name="bookForm" onFinish={onFinish}>
        
          <div style={{ textAlign: 'center' }}>

            <div style={{ display: 'inline-block' }} className="bigCard">
              <div style={{ textAlign: 'center', marginBottom: 0 }} className="picCard" >
                <div className="bgPic">
                  <img src="images/pngChicken2.png" className="bookImg" />
                </div>
                <div className="bgText">
                  <h1 style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)' }}>ไก่เนื้อต้ม</h1><p style={{ marginBottom: '7px' }}>200บาท/ตัว</p>
                </div>
              </div>
              <div className="cardBottom" >
                <div onClick={subCountSmallChick1} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                  -
                </div>
                <div style={{ display: 'inline-block', fontSize: '32px', color: 'white', width: '35px', height: '35px', margin: '0 15px' }}>
                  {countSmallChicken1}
                </div>
                <div onClick={addCountSmallChick1} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                  +
                </div>
              </div>
            </div>

            <div style={{ display: 'inline-block' }} className="bigCard">
              <div style={{ textAlign: 'center', marginBottom: 0 }} className="picCard" >
                <div className="bgPic">
                  <img src="images/pngChicken.png" className="bookImg" />
                </div>
                <div className="bgText">
                  <h1 style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)' }}>ไก่แม่พันธุ์ต้ม</h1><p style={{ marginBottom: '7px' }}>300บาท/ตัว</p>
                </div>
              </div>
              <div className="cardBottom">
                <div onClick={subCountBigChick2} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                  -
                </div>
                <div style={{ display: 'inline-block', fontSize: '32px', color: 'white', width: '35px', height: '35px', margin: '0 15px' }}>
                  {countBigChicken2}
                </div>
                <div onClick={addCountBigChick2} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                  +
                </div>
              </div>
            </div>
            <div style={{ display: 'inline-block' }}>
              <div style={{ display: 'inline-block' }} className="bigCard duckCard">
                <div style={{ textAlign: 'center', marginBottom: 0 }} className="picCard" >
                  <div className="bgPic">
                    <img src="images/pngDuck.png" className="bookImg" />
                  </div>
                  <div className="bgText">
                    <h1 style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)' }}>เป็ดต้มพะโล้</h1><p style={{ marginBottom: '7px' }}>350บาท/ตัว</p>
                  </div>
                </div>
                <div className="cardBottom">
                  <div onClick={subCountDuck3} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                    -
                  </div>
                  <div style={{ display: 'inline-block', fontSize: '32px', color: 'white', width: '35px', height: '35px', margin: '0 15px' }}>
                    {countDuck3}
                  </div>
                  <div onClick={addCountDuck3} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                    +
                  </div>
                </div>
              </div>

              <div style={{ display: 'inline-block' }} className="bigCard">
                <div style={{ textAlign: 'center', marginBottom: 0 }} className="picCard" >
                  <div className="bgPic">
                    <img src="images/pngPork.png" className="bookImg" />
                  </div>
                  <div className="bgText">
                    <h1 style={{ marginBottom: 0, color: 'rgba(255,255,255,0.85)' }}>หมูสามชั้นต้ม</h1><p style={{ marginBottom: '7px' }}>120บาท/ชิ้น</p>
                  </div>
                </div>
                <div className="cardBottom">
                  <div onClick={subCountPork4} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                    -
                  </div>
                  <div style={{ display: 'inline-block', fontSize: '32px', color: 'white', width: '35px', height: '35px', margin: '0 15px' }}>
                    {countPork4}
                  </div>
                  <div onClick={addCountPork4} className="buttonO" style={{ display: 'inline-block', fontSize: '32px', width: '35px', height: '35px', lineHeight: '28px', borderRadius: '100%', cursor: 'pointer' }}>
                    +
                  </div>
                </div>
              </div>
            </div>


            <div style={{ marginTop: '50px' }}>
              <div style={{ fontSize: '20px', color: 'rgba(255,255,255,0.65)', textAlign: 'center', display: 'inline-block' }}>

                <Row>ไก่เนื้อต้ม {countSmallChicken1} ตัว</Row><Row>ไก่แม่พันธ์ุต้ม {countBigChicken2} ตัว</Row><Row>เป็ดต้มพะโล้ {countDuck3} ตัว</Row><Row>หมูสามชั้น {countPork4} ชิ้น</Row>

              </div>

              <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: 'rgba(255,255,255,0.85)' }}>รวมราคาทั้งหมด {price} บาท</h1>
            </div>

          </div>

          <div style={{ textAlign: 'center' }}>
            <Form.Item
              name="date-picker"
              label="เลือกวันเวลาที่มารับสินค้า"
              style={{ display: 'inline-block' }}
              rules={[
                {
                  required: true,
                  message: 'กรุณาระบุวันที่มารับสินค้าถัดจากวันนี้ 1 วันขึ้นไป',
                  validator(rule, value) {
                    if ((new Date(value)) >= oneDaysFromNow) {
                      return Promise.resolve();
                    }
                    return Promise.reject("กรุณาระบุวันที่มารับสินค้าถัดจากวันนี้ 1 วันขึ้นไป");
                  }
                }
              ]}
            >
              
              <DatePicker style={{ display: 'inline-block',width: '130px' }} />
              
            </Form.Item>
            <Form.Item
              name='time-picker'
              rules={[
                {
                  required: true,
                  message: 'กรุณาระบุเวลา'
                }
              ]}
            >
              <TimePicker format='HH:mm' style={{ display: 'inline-block',width: '130px' }} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                สั่งจองเลย!
              </Button>
            </Form.Item>
          </div>
        </Form>
      }
    />
  );
};

export default withRouter(Book);

