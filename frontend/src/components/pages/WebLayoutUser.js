import React from 'react';

import '../css/WebLayout.css'

import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorageService';


const { Header, Content, Footer } = Layout;





function WebLayoutUser(props) {
    let colorLinkProfile = 'rgba(255,255,255,0.45)';
    let colorLinkBook = 'rgba(255,255,255,0.45)';
    let colorLinkStatus = 'rgba(255,255,255,0.45)';
    if(props.contentName === 'User'){colorLinkProfile = 'rgba(255,255,255,0.85)'};
    if(props.contentName === 'Book'){colorLinkBook = 'rgba(255,255,255,0.85)'};
    if(props.contentName === 'Status'){colorLinkStatus = 'rgba(255,255,255,0.85)'};

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole('guest');
    };

    return (
        

            <div>





                <Layout className="layout" style={{minWidth: '350px',minHeight: '100vh',background: 'rgb(40,40,40)'}}>

                    <Row justify='space-around' align='bottom' style={{textAlign:'left',height:'100px',paddingBottom:'10px'}}>
                        <Col >
                            <p className='pHeader' style={{color:'rgba(255,255,255,0.65)',marginBottom:'5px'}}>เปิดทุกวัน: 05:00am-11:00am</p>
                            <p className='pHeader' style={{color:'rgba(255,255,255,0.65)',marginBottom:'5px'}}>วันเทศกาลตรุษจีน สาร์ทจีน เปิดทุกเวลา</p>
                        </Col>
                        <Col >
                            <div style={{ height:'8vh',width: '16vh', backgroundImage: 'url(images/pngLogo.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center',backgroundRepeat:'no-repeat'}} />
                        </Col>
                        
                        <Col >
                            <p className='pHeader' style={{color:'rgba(255,255,255,0.65)',marginBottom:'5px'}}>ตลาดสามพราน แผงที่xx-xx</p>
                            <p className='pHeader' style={{color:'rgba(255,255,255,0.65)',marginBottom:'5px'}}>TEL: +661-234-56789</p>                            
                        </Col>
                        
                    </Row>

                    <Header  style={{padding: '0 30px',background: 'rgb(40,40,40)',  position: '-webkit-sticky',position: 'sticky',top: 0}} className='header'>

                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} style={{width: '300px',background:'none'}} >
                            <Menu.Item key="1"><Link to="/">หน้าแรก</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="register">สมัครสมาชิก</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="login" onClick={logout}>Logout</Link></Menu.Item>
                        </Menu>
                    </Header>

                    <Content style={{ padding: '0 0px' }}>
                        <Breadcrumb style={{ margin: '16px 0', textAlign: "center", fontSize: '1rem' }}>
                            <Breadcrumb.Item><Link to="user" style={{color: colorLinkProfile}}>Profile</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to="book"  style={{color: colorLinkBook}}>จองสินค้าที่นี่</Link></Breadcrumb.Item>
                            <Breadcrumb.Item><Link to="status" style={{color: colorLinkStatus}}>สถานะการสั่งจอง</Link></Breadcrumb.Item>
                        </Breadcrumb>

                       {props.content}

                    </Content>
                    <Footer style={{ textAlign: 'center',background: 'rgba(129,34,35,1)',color: 'rgba(255,255,255,0.85)' }}>ข้าวมันไก่เตี่ยเค้ง ©2021 Created by Pavaris</Footer>
                </Layout>
            </div>


        
    )
}

export default WebLayoutUser;