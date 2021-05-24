import React, { useEffect, useState } from 'react';
import WebLayoutAdmin from './WebLayoutAdmin';
import { Col, Row, Table, List, Button } from 'antd';
import '../css/Status.css';
import axios from '../../config/axios';
import AddCount from './AddCount';
import { EditFilled } from '@ant-design/icons';




export default function ManageItems(props) {
    const [Items, setItems] = useState([]);
    const [ItemRemain, setRemain] = useState([]);
    const [Order, setOrder] = useState([]);



    const fetchItems = async () => {
        const httpResponse = await axios.get('/controllItems/items');
        setItems(httpResponse.data);
        //console.log(httpResponse.data);

        const httpResponse1 = await axios.get('/controllItems/remain/1');
        httpResponse1.data.id = 1;
        const httpResponse2 = await axios.get('/controllItems/remain/2');
        httpResponse2.data.id = 2;
        const httpResponse3 = await axios.get('/controllItems/remain/3');
        httpResponse3.data.id = 3;
        const httpResponse4 = await axios.get('/controllItems/remain/4');
        httpResponse4.data.id = 4;
        setRemain([httpResponse1.data, httpResponse2.data, httpResponse3.data, httpResponse4.data]);
        //console.log([httpResponse1.data,httpResponse2.data,httpResponse3.data,httpResponse4.data]);

        const httpResponseOrder = await axios.get('/controllItems/order');
        setOrder(httpResponseOrder.data);
        //console.log(httpResponseOrder.data);


    };




    useEffect(() => {
        fetchItems();

    }, []);



    const columnsRemain = [
        {
            title: 'type',
            render: (value) => {

                if (value.id === 1) return 'ไก่เนื้อ';
                if (value.id === 2) return 'ไก่แม่พันธุ์';
                if (value.id === 3) return 'เป็ด';
                if (value.id === 4) return 'หมูสามชั้น';
            }
        },
        {
            title: 'total_count',
            dataIndex: 'value_total',
        },
        {
            title: 'order_count',
            dataIndex: 'value_order',
            render: (value) => {
                if (value === null) return 0;
                return value;
            }
        },
        {
            title: 'sold_count',
            dataIndex: 'value_sold',
            render: (value) => {
                if (value === null) return 0;
                return value;
            }
        },
        {
            title: 'remain',
            render: (value) => {
                return value = value.value_total - value.value_order - value.value_sold;
            }
        }
    ];

    function compare(a, b) {
        if (a.date + a.time < b.date + b.time) {
            return -1;
        }
        if (a.date + a.time > b.date + b.time) {
            return 1;
        }
        return 0;
    };

    const updateOrder = async (id) => {
        const confirm = window.confirm(`order_id: ${id} ได้รับสินค้าแล้ว?`);
        if (confirm) {
            await axios.put(`/controllItems/putOrder/${id}`);
            fetchItems();
        }
    };

    const deleteOrder = async (id) => {
        await axios.delete(`/controllItems/delOrder/${id}`);
        fetchItems();
    };

    const columnsOrder = [
        {
            title: 'isRecieved',
            
            render: (value) => {
                
                if (value.isRecieved === false) return <p style={{ color: 'rgb(218,28,30)' }}>ยังไม่ได้รับสินค้า<EditFilled onClick={() => updateOrder(value.id)} style={{ cursor: 'pointer' }} /></p>;
                if (value.isRecieved === true) return <p style={{ color: 'DarkGreen' }}>ได้รับสินค้าแล้ว</p>;
            }
        },
        {
            title: 'เบอร์โทร',
            render: (value) => {
                return <a href={`tel:+66${value.User.phone}`}>{value.User.phone}</a>;
            }
        },
        {
            title: 'date',
            dataIndex: 'date',
            sorter: compare
        },
        {
            title: 'time',
            dataIndex: 'time',

        },
        {
            title: 'name',
            render: (value) => {
                return value.User.name;
            }
        },
        {
            title: 'ไก่เนื้อ',
            render: (value) => {
                for (let x = 0; x < value.OrderItems.length; x++) {
                    if (value.OrderItems[x].item_id === 1) return value.OrderItems[x].order_count;
                }
                return '-';
            }
        },
        {
            title: 'ไก่แม่พันธุ์',
            render: (value) => {
                for (let x = 0; x < value.OrderItems.length; x++) {
                    if (value.OrderItems[x].item_id === 2) return value.OrderItems[x].order_count;
                }
                return '-';
            }
        },
        {
            title: 'เป็ด',
            render: (value) => {
                for (let x = 0; x < value.OrderItems.length; x++) {
                    if (value.OrderItems[x].item_id === 3) return value.OrderItems[x].order_count;
                }
                return '-';
            }
        },
        {
            title: 'หมูสามชั้น',
            render: (value) => {
                for (let x = 0; x < value.OrderItems.length; x++) {
                    if (value.OrderItems[x].item_id === 4) return value.OrderItems[x].order_count;
                }
                return '-';
            }
        },
        {
            title: 'price',
            dataIndex: 'price',
        },
        {
            title: 'ลบรายการ',
            render: (value) => {
                return <><Button type='danger' onClick={() => deleteOrder(value.id)}>delete</Button></>;
            }
        },

    ];


    return (
        <WebLayoutAdmin setRole={props.setRole} contentName='ManageItems'
            content={
                <div>
                    <Row justify='space-around' >
                        <Col xs={22} xl={10}>
                            <h1 style={{ color: 'white' }}>Items table</h1>

                            <List
                                style={{ background: 'white', overflow: 'auto' }}

                                bordered
                                dataSource={Items}
                                renderItem={item => (
                                    <List.Item >

                                        <AddCount item={item} fetchData={fetchItems} />

                                    </List.Item>
                                )}
                            />



                        </Col>

                        <Col xs={22} xl={10}>
                            <h1 style={{ color: 'white' }}>Count table</h1>
                            <Table columns={columnsRemain} dataSource={ItemRemain} rowKey={(value) => value.id} size="small" className='statusTable' />


                        </Col>
                    </Row>
                    <Row justify='center'>
                        <Col span={22}>
                            <h1 style={{ color: 'white' }}>AllOrder Table</h1>
                            <Table columns={columnsOrder} dataSource={Order} rowKey={(value) => value.id} size="small" className='statusTable' />
                        </Col>
                    </Row>
                </div>
            }
        />
    )
}
