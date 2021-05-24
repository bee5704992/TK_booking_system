import React from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';

import '../css/Form.css';
import WebLayoutGuest from './WebLayoutGuest';
import axios from '../../config/axios';
import LocalStorageService from '../../services/localStorageService';


const layout = {
    labelCol: { xs: 24, sm: 5, md: 4, lg: 5, xl: 4, xxl: 3 },
    wrapperCol: { xs: 24, sm: 19, md: 20, lg: 19, xl: 20, xxl: 21 },
};

export default function Login(props) {

    const onFinish = values => {
        const body = {
            email: values.email,
            password: values.password
        };
        axios.post("/users/login", body)
            .then(result => {
                LocalStorageService.setToken(result.data.token);
                props.setRole("user")
            })
            .catch(err => {
                notification.error({
                    message: `การเข้าสู่ระบบล้มเหลว`,
                })
            })
    };

    return (
        <WebLayoutGuest contentName='Login'
            content={
                <Row justify="center">
                    <div style={{height:'30vh',width:'100%',backgroundImage:'url(/images/img01.jpg)',backgroundSize:'auto 100%',backgroundPosition:'center'}}/>

                    <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                        <div className="Form">
                        <div style={{fontSize:'2rem',color:'white',}}>Login</div><br/>

                            <Form
                                className="App"
                                {...layout}
                                onFinish={onFinish}
                                style={{ width: "100%" }}
                            >
                                <Form.Item
                                    label="Username(email)"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Button className="Button" type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            }
        />
    );
}

