import React, { useState } from 'react'
import '../css/WebLayout.css'

import { Layout, Menu, Breadcrumb, Row, Col, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorageService';
import { ClockCircleOutlined, EnvironmentOutlined, MenuOutlined, UserOutlined } from '@ant-design/icons';



const { Header, Content, Footer } = Layout;





export default function WebLayoutAdmin(props) {
    let colorLinkManageItems = 'rgba(255,255,255,0.45)';
    let colorLinkSoldItems = 'rgba(255,255,255,0.45)';

    if (props.contentName === 'ManageItems') { colorLinkManageItems = 'rgba(255,255,255,0.85)' };
    if (props.contentName === 'SoldItems') { colorLinkSoldItems = 'rgba(255,255,255,0.85)' };


    const logout = () => {
        LocalStorageService.removeTokenAdmin();
        props.setRole('guest');
    };

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
  
    const DrawerMenu = (
      <Drawer
        
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        <div className="drawer-menu">
          <Link to="/">หน้าแรก</Link>
        </div>
        <div className="drawer-menu">
          <Link to="register">สมัครสมาชิก</Link>
        </div>
        <div className="drawer-menu">
          <Link to="#">เกี่ยวกับเรา</Link>
        </div>
        <div className="drawer-menu">
          <Link to="#">ติดต่อเรา</Link>
        </div>
        <div className="drawer-menu">
          <Link to="login" onClick={logout} ><UserOutlined />Logout</Link>
        </div>
      </Drawer>
    );

    return (


        <div>





            <Layout className="layout" style={{ minWidth: '350px', minHeight: '100vh', background: 'rgb(40,40,40)' }}>

                <div className='toggleHeader'>
                    <Row justify='space-around' align='bottom' style={{ textAlign: 'left', height: '80px', paddingBottom: '10px', background: 'rgb(60,10,10)' }}>
                        <Col >
                            <Row>
                                <ClockCircleOutlined style={{ color: 'rgba(255,255,255,0.65)', fontSize: '20px', margin: '15px 15px 0 0' }} />
                                <div style={{ display: 'inline-block' }}>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '5px' }}>เปิดทุกวัน: 05:00am-11:00am</p>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '5px' }}>วันเทศกาลตรุษจีน สาร์ทจีน เปิดทุกเวลา</p>
                                </div>
                            </Row>

                        </Col>

                        <Col>

                        </Col>

                        <Col >
                            <Row>
                                <EnvironmentOutlined style={{ color: 'rgba(255,255,255,0.65)', fontSize: '20px', margin: '15px 15px 0 0' }} />
                                <div style={{ display: 'inline-block' }}>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '5px' }}>ตลาดสามพราน แผงที่xx-xx</p>
                                    <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '5px' }}>TEL: +661-234-56789</p>
                                </div>
                            </Row>
                        </Col>

                    </Row>
                </div>

                <Header style={{ position: '-webkit-sticky', position: 'sticky', top: 0 }} className='header'>
                    <Row justify='space-between'>

                        <Link to="/"><div style={{ height: '45px', width: '100px', backgroundImage: 'url(images/pngLogo.png)', backgroundSize: 'auto 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', marginTop: '7px' }} /></Link>

                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} style={{ width: '400px', background: 'none' }} >

                            <Menu.Item key="1"><Link to="/">หน้าแรก</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="register">สมัครสมาชิก</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="#">เกี่ยวกับเรา</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="#">ติดต่อเรา</Link></Menu.Item>

                        </Menu>


                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']} style={{ width: '130px', background: 'none' }} >

                            <Menu.Item key="3"><Link to="login" onClick={logout} ><UserOutlined />Logout</Link></Menu.Item>

                        </Menu>


                        <div className="menuButton" onClick={showDrawer}>
                            <MenuOutlined />
                        </div>


                    </Row>
                </Header>

                {DrawerMenu}

                <Content style={{ padding: '0 0px' }}>
                    <Breadcrumb style={{ margin: '16px 0', textAlign: "center", fontSize: '1rem' }}>
                        <Breadcrumb.Item><Link to="manageItems" style={{ color: colorLinkManageItems }}>จัดการออเดอร์และสินค้า</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to="soldItems" style={{ color: colorLinkSoldItems }}>ขายหน้าร้าน</Link></Breadcrumb.Item>

                    </Breadcrumb>

                    {props.content}

                </Content>
                <Footer style={{ textAlign: 'center', background: 'rgba(129,34,35,1)', color: 'rgba(255,255,255,0.85)' }}>ข้าวมันไก่เตี่ยเค้ง ©2021 Created by Pavaris</Footer>
            </Layout>
        </div>



    )
}


