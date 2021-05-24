import React from 'react';
import WebLayoutGuest from './WebLayoutGuest';
import { Col, Row, Divider } from 'antd';
import {CaretRightOutlined} from '@ant-design/icons';
import '../css/Home.css';




function Home() {
    return (

        <WebLayoutGuest contentName='Home'
            content={
                <div>
                    <Row >
                        <div className='imgHome' style={{ width: '100%', backgroundImage: 'url(images/cover00.jpg)', backgroundSize: 'auto 100%', backgroundPosition: 'center' }} />
                    </Row>
                    <Row justify='center'  style={{textAlign:'left',color:'rgba(255,255,255,0.45)',marginTop:'60px'}} >
                       
                        <Col sm={20} lg={6}>
                            <div style={{margin: '30px'}}>
                                <h1 style={{color:'rgba(255,255,255,0.85)',fontSize:'3vh'}}><CaretRightOutlined/>เว็บแอปพลิเคชั่นนี้คืออะไร?</h1>
                                <Divider style={{borderTopColor:'rgb(255, 214, 127)'}}/>
                                <p>
                                    -คือเว็บแอปที่ใช้สำหรับสั่งจองสินค้าออนไลน์และควบคุมสต็อกสินค้าของร้านข้าวมันไก่เตี่ยเค้ง<br />
                                    -สำหรับสั่งเป็ดต้ม ไก่ต้ม และหมูไหว้
                                </p>
                            </div>
                        </Col>
                        

                        <Col sm={20} lg={6}>
                            <div style={{margin: '30px'}}>
                                <h1 style={{color:'rgba(255,255,255,0.85)',fontSize:'3vh'}}><CaretRightOutlined/>ทำไมถึงต้องสั่งจองผ่านเว็บ?</h1>
                                <Divider style={{borderTopColor:'rgb(255, 214, 127)'}}/>
                                <p>
                                    -เพราะตอนช่วงเทศกาลตรุษจีน สาร์ทจีน มีลูกค้าที่ซื้อหน้าร้าน และโทรมาสั่งจองจำนวนมาก<br />
                                    -ส่งผลให้ร้านเกิดความยุ่งวุ่นวาย การนับสินค้าที่เราขายไปแล้วว่ามีจำนวนเท่าไรนั้นเป็นเรื่องที่ยาก<br />
                                    -การสั่งจองผ่านเว็บจะเก็บข้อมูลของผู้สั่งจอง เช่น ชื่อผู้สั่งจอง สั่งจองอะไรบ้าง สั่งจำนวนเท่าไร มารับสินค้าวันเวลาไหน<br />
                                    -เว็บนี้มีระบบที่สามารถดูและควบคุมสินค้าในสต็อกได้<br />
                                    -สามารถเช็คได้ว่ามีคนจองสินค้าเท่าไร ขายหน้าร้านไปแล้วเท่าไร และเหลือสินค้าเท่าไรในสต็อก<br />
                                </p>
                            </div>
                        </Col>
                        <Col sm={20} lg={6}>
                            <div style={{margin: '30px'}}>
                                <h1 style={{color:'rgba(255,255,255,0.85)',fontSize:'3vh'}}><CaretRightOutlined/>เว็บแอปพลิเคชั่นนี้ใช้งานอย่างไร?</h1>
                                <Divider style={{borderTopColor:'rgb(255, 214, 127)'}}/>
                                <p>
                                    -1.สมัครสมาชิกด้วยการใส่อีเมล พาสเวิร์ด และชื่อ (ชื่อที่ใส่จะใช้สำหรับระบุว่าผู้ที่จองสินค้าชื่ออะไร)<br/>
                                    -2.ล็อกอินเข้าสู่ระบบ<br/>
                                    -3.กดสั่งจองสินค้า ระบุวันเวลาที่มารับสินค้า<br/>
                                    -4.กดหน้าสถานะการสั่งซื้อจะแสดงข้อมูลที่ลูกค้าสั่งซื้อและสถานะการรับสินค้า<br/>
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row justify='center'>
                        <div style={{marginTop:'80px',marginBottom:'80px'}}>
                            <h1 style={{color:'rgba(255,255,255,0.85)',fontSize:'4vh'}}>ราคาสินค้าวันนี้</h1>
                            
                            <div style={{height:'300px',width:'300px',backgroundImage:'url(images/pngChicken2.png)',backgroundColor:'rgba(255,255,255,0.05)',borderRadius:'30px',boxShadow:'0 0 20px 1px rgb(255,245,106)',margin:'30px',display:'inline-block',backgroundSize:'auto 100%'}}>
                                <h1 style={{fontSize:'35px',color:'rgba(255,2255,255,0.85)',position:'relative',top:'240px'}}>200</h1>
                            </div>

                            <div style={{height:'300px',width:'300px',backgroundImage:'url(images/pngChicken.png)',backgroundColor:'rgba(255,255,255,0.05)',borderRadius:'30px',boxShadow:'0 0 20px 1px rgb(255,245,106)',margin:'30px',display:'inline-block',backgroundSize:'auto 100%'}}>
                                <h1 style={{fontSize:'35px',color:'rgba(255,2255,255,0.85)',position:'relative',top:'240px'}}>300</h1>
                            </div>
                            
                            <div style={{display:'inline-block'}}>
                            <div style={{height:'300px',width:'300px',backgroundImage:'url(images/pngDuck.png)',backgroundColor:'rgba(255,255,255,0.05)',borderRadius:'30px',boxShadow:'0 0 20px 1px rgb(255,245,106)',margin:'30px',display:'inline-block',backgroundSize:'auto 100%'}}>
                                <h1 style={{fontSize:'35px',color:'rgba(255,2255,255,0.85)',position:'relative',top:'240px'}}>350</h1>
                            </div>

                            <div style={{height:'300px',width:'300px',backgroundImage:'url(images/pngPork.png)',backgroundColor:'rgba(255,255,255,0.05)',borderRadius:'30px',boxShadow:'0 0 20px 1px rgb(255,245,106)',margin:'30px',display:'inline-block',backgroundSize:'auto 100%'}}>
                                <h1 style={{fontSize:'35px',color:'rgba(255,2255,255,0.85)',position:'relative',top:'240px'}}>120</h1>
                            </div>
                            </div>
                        </div>
                    </Row>
                </div>
            }
        />


    )
}

export default Home;


