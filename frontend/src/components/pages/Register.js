import React from 'react';
import axios from '../../config/axios';
import { Form, Input, Button, Row, Col, notification } from 'antd';

import { withRouter } from 'react-router-dom';
import '../css/Form.css';
import WebLayoutGuest from './WebLayoutGuest';




const layout = {
    labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
    wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};
function Register(props) {
    
        /*axios.get('https://covid19.ddc.moph.go.th/api/open/today').then(
            (res) => {
                console.log(res);
            }
        );*/

    const onFinish = values => {
        //console.log('Received values of form: ', values);
        const body = {
            email: values.email,
            password: values.password,
            name: values.nickname,
            phone: values.phone,
        }
        axios.post("/users/register", body)
            .then(res => {
                notification.success({
                    message: `คุณ ${values.nickname} ได้สมัครสมาชิกเรียบร้อยแล้ว`,
                })
                props.history.push("/login")
            })
            .catch(err => {
                notification.error({
                    message: `การสมัครสมาชิกล้มเหลวหรือมีผู้ใช้emailนี้แล้ว`,
                })
            })
    };

    return (
        <WebLayoutGuest contentName='Register'
            content={
                <Row justify="center" >

                    <div style={{ height: '30vh', width: '100%', backgroundImage: 'url(/images/img01.jpg)', backgroundSize: 'auto 100%', backgroundPosition: 'center' }} />


                    <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
                        <div
                            className="Form"
                        >
                            <div style={{ fontSize: '2rem', color: 'white', }}>Register</div><br />

                            <Form
                                {...layout}
                                onFinish={onFinish}
                                style={{ width: "100%" }}
                            >
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'The input is not valid E-mail!',
                                        },
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    hasFeedback
                                    dependencies={["password"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject("Confirm password ต้องตรงกับ password");
                                            }
                                        })
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="nickname"
                                    label={<span>ชื่อของคุณ&nbsp;</span>}
                                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    label="เบอร์โทรศัพท์"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Row justify='center' style={{}}>
                                    <Button style={{ textAlign: "center" }} type="primary" htmlType="submit">
                                        Register
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            }
        />
    );
}

export default withRouter(Register);