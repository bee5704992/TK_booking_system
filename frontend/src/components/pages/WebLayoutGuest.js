import React, {useState} from 'react';

import '../css/WebLayout.css'

import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Drawer } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, ClockCircleOutlined, EnvironmentOutlined, MenuOutlined } from '@ant-design/icons';




const { Header, Content, Footer } = Layout;





function WebLayoutGuest(props) {
  let colorLinkHome = 'rgba(255,255,255,0.45)';
  let colorLinkRegister = 'rgba(255,255,255,0.45)';
  let colorLinkLogin = 'rgba(255,255,255,0.45)';
  let numKey;
  if (props.contentName === 'Home') { colorLinkHome = 'rgba(255,255,255,0.85)'; numKey = '1' };
  if (props.contentName === 'Register') { colorLinkRegister = 'rgba(255,255,255,0.85)'; numKey = '2' };
  if (props.contentName === 'Login') { colorLinkLogin = 'rgba(255,255,255,0.85)'; numKey = '3' };

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
        <Link to="login"><UserOutlined />เข้าสู่ระบบ</Link>
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

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[numKey]} style={{ width: '400px', background: 'none' }} >

              <Menu.Item key="1"><Link to="/">หน้าแรก</Link></Menu.Item>
              <Menu.Item key="2"><Link to="register">สมัครสมาชิก</Link></Menu.Item>
              <Menu.Item key="4"><Link to="#">เกี่ยวกับเรา</Link></Menu.Item>
              <Menu.Item key="5"><Link to="#">ติดต่อเรา</Link></Menu.Item>

            </Menu>


            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[numKey]} style={{ width: '130px', background: 'none' }} >

              <Menu.Item key="3"><Link to="login"><UserOutlined />เข้าสู่ระบบ</Link></Menu.Item>

            </Menu>


            <div className="menuButton" onClick={showDrawer}>
              <MenuOutlined />
            </div>


          </Row>
        </Header>

        {DrawerMenu}

        <Content style={{ padding: '0 0px', marginTop: '50px' }}>


          {props.content}

        </Content>
        <Footer style={{ textAlign: 'center', backgroundImage: 'linear-gradient(to bottom , rgb(133, 23, 25), rgb(63,13,15))', color: 'rgba(255,255,255,0.85)' }}>ข้าวมันไก่เตี่ยเค้ง ©2021 Created by Pavaris</Footer>
      </Layout>
    </div>



  )
}

export default WebLayoutGuest;