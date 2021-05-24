import React, { useEffect, useState } from 'react';
import "../css/User.css";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import WebLayoutUser from './WebLayoutUser';
import LocalStorageService from '../../services/localStorageService';
import jwtDecode from 'jwt-decode';


export default function User(props) {
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

    const logout = () => {
        LocalStorageService.removeToken();
        props.setRole('guest');
    };

    useEffect(()=>{
        const token = LocalStorageService.getToken();
        if(token){
            const user = jwtDecode(token);
            setName(user.name);
            setId(user.id);
        }
    },[])

    return (
        <WebLayoutUser contentName='User' setRole={props.setRole}
            content={
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <h2 style={{ color: 'rgba(255,255,255,0.85)' }}>
                        Profile Page
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <strong>Name:</strong> {name}
                        <br />
                        <strong>User ID:</strong> {id}
                    </p>
                    <Link to="logout">
                        <Button onClick={logout} className="Button" type="primary" htmlType="submit" style={{ fontSize: '18px', background: 'orange', border: 'none', lineHeight: '0px' }}>
                            logout
                        </Button>
                    </Link>
                </div>
            }
        />
    );
}