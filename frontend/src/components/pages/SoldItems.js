import React, { useEffect, useState } from 'react';
import WebLayoutAdmin from './WebLayoutAdmin';
import { Col, Row, Table, Input, Button } from 'antd';
import '../css/Status.css';
import axios from '../../config/axios';


export default function SoldItems(props) {
    const [soldItems, setSoldItems] = useState([]);
    const [inputField1, setInputField1] = useState(0);
    const [inputField2, setInputField2] = useState(0);
    const [inputField3, setInputField3] = useState(0);
    const [inputField4, setInputField4] = useState(0);


    const fetchSold = async () => {
        const httpResponse = await axios.get('/controllItems/soldItem');
        setSoldItems(httpResponse.data);
        //console.log(httpResponse.data);
    };

    const deleteSold = async (id) => {
        await axios.delete(`/controllItems/delSold/${id}`);
        fetchSold();
    };

    useEffect(() => {
        fetchSold();
    }, []);


    const columnSold = [
    
        {
            title: 'type',
            dataIndex: 'item_id',
            render: (value) => {
                if (value === 1) return 'ไก่เนื้อ';
                if (value === 2) return 'ไก่แม่พันธุ์';
                if (value === 3) return 'เป็ด';
                if (value === 4) return 'หมูสามชั้น';
            }
        },
        {
            title: 'sold_count',
            dataIndex: 'sold_count',
        },
        {
            title: 'วันที่ขาย',

            render: (value) => {
               let date = String(new Date(value.createdAt));
               return date[4]+date[5]+date[6]+date[7]+date[8]+date[9]+date[10]+date[11]+date[12]+date[13]+date[14]
            }
        },
        {
            title: 'เวลาที่ขาย',
            render: (value) => {
                let time = String(new Date(value.createdAt));
                
                
                return time[16]+time[17]+time[18]+time[19]+time[20]
               
            }
        },
        {
            title: 'ลบรายการ',
            render: (value) => {
                return <><Button type='danger' onClick={() => deleteSold(value.id)}>delete</Button></>;
            }
        },

    ]



    const addSold1 = async () => {
        if (Number(inputField1) > 0 && Number(inputField1) !== NaN) {
            await axios.post('/controllItems/soldItem', { item_id: 1, sold_count: inputField1 })
            
            setInputField1(0);
            fetchSold();
        }else{
            setInputField1(0);
        }
    };
    const addSold2 = async () => {
        if (Number(inputField2) > 0 && Number(inputField2) !== NaN) {
            await axios.post('/controllItems/soldItem', { item_id: 2, sold_count: inputField2 })
            
            setInputField2(0);
            fetchSold();
        }else{
            setInputField2(0);
        }
    };
    const addSold3 = async () => {
        if (Number(inputField3) > 0 && Number(inputField3) !== NaN) {
            await axios.post('/controllItems/soldItem', { item_id: 3, sold_count: inputField3 })
            
            setInputField3(0);
            fetchSold();
        }else{
            setInputField3(0);
        }
    };
    const addSold4 = async () => {
        if (Number(inputField4) > 0 && Number(inputField4) !== NaN) {
            await axios.post('/controllItems/soldItem', { item_id: 4, sold_count: inputField4 })
            
            setInputField4(0);
            fetchSold();
        }else{
            setInputField4(0);
        }
    };

    return (
        <WebLayoutAdmin setRole={props.setRole} contentName='SoldItems'
            content={
                <div>
                    <Row justify='center'>
                        <Col><h1 style={{ color: 'white' }}>post sold</h1></Col>
                    </Row>
                    <Row justify='center' style={{marginBottom:'10px'}} >
                        <Col>
                            <h3 style={{ color: 'white', marginRight: '20px', background:'none', paddingRight:'40px' }}>ไก่เนื้อ</h3>
                        </Col>
                        <Col>
                            <Input style={{ width: '60px' }} value={inputField1} onChange={e => setInputField1(e.target.value)} />
                        </Col>
                        <Col>
                            <Button onClick={addSold1} style={{ marginLeft: '20px' }}>Add</Button>
                        </Col>
                    </Row>
                    
                    <Row justify='center' style={{marginBottom:'10px'}}>
                        <Col>
                            <h3 style={{ color: 'white', marginRight: '20px', background:'none', paddingRight:'15px' }}>ไก่แม่พันธุ์</h3>
                        </Col>
                        <Col>
                            <Input style={{ width: '60px' }} value={inputField2} onChange={e => setInputField2(e.target.value)} />
                        </Col>
                        <Col>
                            <Button onClick={addSold2} style={{ marginLeft: '20px' }}>Add</Button>
                        </Col>
                    </Row>
                    
                    <Row justify='center' style={{marginBottom:'10px'}}>
                        <Col>
                            <h3 style={{ color: 'white', marginRight: '20px', background:'none', paddingRight:'58px' }}>เป็ด</h3>
                        </Col>
                        <Col>
                            <Input style={{ width: '60px' }} value={inputField3} onChange={e => setInputField3(e.target.value)} />
                        </Col>
                        <Col>
                            <Button onClick={addSold3} style={{ marginLeft: '20px' }}>Add</Button>
                        </Col>
                    </Row>

                    <Row justify='center' style={{marginBottom:'10px'}}>
                        <Col>
                            <h3 style={{ color: 'white', marginRight: '20px', background:'none', paddingRight:'15px' }}>หมูสามชั้น</h3>
                        </Col>
                        <Col>
                            <Input style={{ width: '60px' }} value={inputField4} onChange={e => setInputField4(e.target.value)} />
                        </Col>
                        <Col>
                            <Button onClick={addSold4} style={{ marginLeft: '20px' }}>Add</Button>
                        </Col>
                    </Row>

                    <Row justify='center'>
                        <Col xs={22} xl={10}>
                            <h1 style={{ color: 'white' }}>AllSold Table</h1>
                            <Table columns={columnSold} dataSource={soldItems} rowKey={(value) => value.id} size="small" className='statusTable' />
                        </Col>
                    </Row>
                
                </div>
            }
        />
    )
}
