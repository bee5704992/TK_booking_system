import React, { useState } from 'react';
import { Button, Row, Col, Input } from 'antd';
import axios from 'axios';

export default function AddCount(props) {
    const [changeInput, setChangeInput] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    const updateItem = async (id) => {
        await axios.put(`/controllItems/items/plus/${id}`, { total_count: changeInput });
        props.fetchData();
        setChangeInput(0);
        setIsEdit(false);
    };

    const toggleEdit = () => {

        setIsEdit(true);

    }

    let contents = (
        <Row style={{ width: '100%' }}>
            <Col span={7}><Row justify='start'>{props.item.type}</Row></Col>
  
            <Col span={8}>จำนวนทั้งหมด: {props.item.total_count}</Col>
            <Col span={4}>
                <Input value={changeInput} onChange={(e) => setChangeInput(e.target.value)} />
            </Col>
            <Col span={4}>
                <Button type="primary" onClick={() => updateItem(props.item.id)}>Done</Button>
            </Col>
        </Row>
    );

    if (!isEdit) {
        contents = (
            <Row style={{ width: '100%' }}>
                <Col span={8}><Row justify='start'>{props.item.type}</Row></Col>
                <Col span={4}>ราคา: {props.item.price}</Col>
                <Col span={6}>จำนวนทั้งหมด: {props.item.total_count}</Col>
                <Col span={6}><Button style={{ background: 'orange', color: 'white' }} onClick={() => toggleEdit()}>+ Count</Button></Col>
            </Row>
        );
    }

    return (
        <div style={{ width: '100%' }}>

            {contents}

        </div>
    )
}
