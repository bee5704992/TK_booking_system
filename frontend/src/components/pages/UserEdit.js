import React, { useState } from 'react';
import { EditFilled } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import axios from '../../config/axios';

function UserEdit(props) {
    const [isEdit, setIsEdit] = useState(false);
    const [changeInputName, setChangeInputName] = useState('');
    const [changeInputPhone, setChangeInputPhone] = useState('');


    const updateProfile = async (id) => {
        await axios.put(`/users/updateById/${id}`, {name: changeInputName, phone: changeInputPhone});
        props.fetchUser();

        setIsEdit(false);
    };

    const toggleEdit = () => {
        setIsEdit(true);
        setChangeInputName(props.name);
        setChangeInputPhone(props.phone);
    }

    let contents = (
        <>
            <strong>Name:</strong> <Input value={changeInputName} onChange={(e) => setChangeInputName(e.target.value)} />
            <br/><br/>
            <strong>TEL:</strong> <Input value={changeInputPhone} onChange={(e) => setChangeInputPhone(e.target.value)} />
            <br/><br />
            <Row justify='center'>
            <Button type="primary" onClick={() => updateProfile(props.id)}>Done</Button>
            </Row>
        </>
    );

    if (!isEdit) {
        contents = (
            <>
                <strong>Name:</strong> {props.name} 
                <br /><br />
                <strong>TEL:</strong> {props.phone} 
                <br /><br />
                <Row justify='center'>
                <Col style={{marginRight:'20px'}}>
                    <Button type="primary" onClick={() => toggleEdit()}><EditFilled /> Edit Profile</Button>
                </Col>
                <Col>
                <Button onClick={props.logout} className="Button" type="primary" htmlType="submit" style={{ fontSize: '18px', background: 'orange', border: 'none', lineHeight: '0px' }}>
                    logout
                </Button>
                </Col>
                </Row>
            </>
        );
    };

    return (
        <>
            {contents}
        </>
    )
}

export default UserEdit
