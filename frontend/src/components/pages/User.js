import React, { useEffect, useState } from 'react';
import "../css/User.css";
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'antd';
import WebLayoutUser from './WebLayoutUser';
import LocalStorageService from '../../services/localStorageService';
import jwtDecode from 'jwt-decode';
import axios from '../../config/axios';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import UserEdit from './UserEdit';


export default function User(props) {
    const [name, setName] = useState('');
    const [id, setId] = useState(0);
    const [phone, setPhone] = useState('');
    

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole('guest');
    };

    const fetchUser = async () => {
        const httpResponse = await axios.get('/users/info');
        console.log(httpResponse.data);
        setPhone(httpResponse.data.phone);
        setName(httpResponse.data.name);
    };

    useEffect(()=>{
        fetchUser();
        const token = LocalStorageService.getToken();
        if(token){
            const user = jwtDecode(token);
            
            setId(user.id);
            
        }
    },[])

    return (
        <WebLayoutUser contentName='User' setRole={props.setRole}
            content={
                <Row justify='center'>
                    <div style={{ height: '30vh', width: '100%', backgroundImage: 'url(/images/img01.jpg)', backgroundSize: 'auto 100%', backgroundPosition: 'center' }} />
                <Col xs={22} sm={22} md={22} lg={14} xl={14} xxl={10}>
                <div style={{ textAlign: 'center', marginTop: '30px', position: 'relative', top: '-200px', background: 'rgba(60,60,0,0.5)', padding: '30px' }}>
                    <h2 style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Profile
                    </h2>
                    <br />
                    <Avatar size={100} icon={<UserOutlined />} />
                    <br /><br />
                    <Row justify='center'>
                    <div style={{textAlign: 'left'}}>               
                    <div style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <strong>User ID:</strong> {id}
                        <br /><br />
                        <UserEdit id={id} name={name} phone={phone} fetchUser={fetchUser} logout={logout} />
                    </div>
                    </div>
                    </Row>
                    
                      
                    
                </div>
                </Col>
                </Row>
            }
        />
    );
}