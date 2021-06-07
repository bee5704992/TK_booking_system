import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Table } from 'antd';
import '../css/Status.css';
import WebLayoutUser from './WebLayoutUser';
import axios from '../../config/axios';


export default function Status(props) {
    const [data,setData2] = useState([]);
    
    let now = new Date();
    //console.log(now);

    //let oneMinutesfromNow = now.setMinutes(now.getMinutes() + 1);
    //console.log(Date.parse(now));
    //console.log(new Date(oneMinutesfromNow));
    
    const fetchStatus = async () => {
        const httpResponse = await axios.get('/users/order');
        setData2(httpResponse.data);
        //console.log(httpResponse.data);        
    };
 
    const deleteOrder = async (id) => {
        await axios.delete(`/users/order/${id}`);
        fetchStatus();
    };

    useEffect(()=>{
        fetchStatus();
        const interval = setInterval(() => {
            fetchStatus();
            console.log('This will run every 30seconds!');
          }, 30000);
          return () => clearInterval(interval);
    },[]);

    function compare( a, b ) {
        if ( a.date+a.time < b.date+b.time ){
          return -1;
        }
        if ( a.date+a.time > b.date+b.time ){
          return 1;
        }
        return 0;
    };

    
    
    const columns = [
        {
            title: 'สถานะการรับสินค้า',
            dataIndex: 'isRecieved',            
            render:(value)=>{
                if(value === false) return <p style={{color:'rgb(218,28,30)'}}>ยังไม่ได้รับสินค้า</p>;
                if(value === true) return <p style={{ color: 'DarkGreen' }}>ได้รับสินค้าแล้ว</p>;
            }
            
        },
        {
            title: 'รับสินค้าวันที่',
            dataIndex: 'date',
            sorter: compare
           
        },
        {
            title: 'รับสินค้าเวลา',
            dataIndex: 'time',
            
            
        },
        {
            title: 'ไก่เนื้อต้ม(ตัว)',
            render:(value)=>{
                for (let x=0; x < value.OrderItems.length; x++){
                    if(value.OrderItems[x].item_id === 1) return value.OrderItems[x].order_count;
                } 
                return '-';   
            }
            
        },
        {
            title: 'ไก่แม่พันธุ์ต้ม(ตัว)',
            render:(value)=>{
                for (let x=0; x < value.OrderItems.length; x++){
                    if(value.OrderItems[x].item_id === 2) return value.OrderItems[x].order_count;
                }
                return '-';    
            }
           
        },
        {
            title: 'เป็ดต้มพะโล้(ตัว)',
            render:(value)=>{
                for (let x=0; x < value.OrderItems.length; x++){
                    if(value.OrderItems[x].item_id === 3) return value.OrderItems[x].order_count;
                }
                return '-';    
            }
            
           
        },
        {
            title: 'หมูสามชั้นต้ม(ชิ้น)',
            render:(value)=>{
                for (let x=0; x < value.OrderItems.length; x++){
                    if(value.OrderItems[x].item_id === 4) return value.OrderItems[x].order_count;
                }
                return '-';    
            }
            
        },
        {
            title: 'รวมเป็นเงิน(บาท)',
            dataIndex: 'price',
            
            
        },
        {
            title: '',
            render:(value)=>{
                //console.log(new Date(Date.parse(value.createdAt)+60000));
                if(value.isRecieved === true) return '';
                if(now > new Date(Date.parse(value.createdAt)+60000)) return '';
                if(now < new Date(Date.parse(value.createdAt)+60000)) return <><Button type='danger' onClick={() => deleteOrder(value.id)}>ยกเลิกออเดอร์</Button></>;
                
            }
        },
    ];




    return (
        <WebLayoutUser contentName='Status' setRole={props.setRole}
            content={
                <div >
                    <div style={{ height: '30vh', width: '100%', backgroundImage: 'url(/images/img01.jpg)', backgroundSize: 'auto 100%', backgroundPosition: 'center' }} />
                    <Row justify='center' style={{position: 'relative', top: '-100px'}}>
                        <Col xs={24} xxl={20} >
                            <Table columns={columns} dataSource={data} rowKey={value => value.id}  size="small" className='statusTable' >
   
                            </Table>
                        </Col>
                    </Row>

                </div>
            }
        />
    )
}
