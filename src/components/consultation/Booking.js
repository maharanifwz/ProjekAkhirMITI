import { Card } from 'antd'
import React from 'react'
import { Steps, Button, message } from 'antd';
import {
    Input,
    Col,
    Row,
    Select,
    Space,
    DatePicker,
  } from 'antd';
import { CardPanel } from './Faq';
import styled from 'styled-components'
import formClinic from '../../assets/form.png'
import { TimePicker } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

const InputContainer = styled.div`
  .ant-col {
      margin-bottom: 25px;
  }
`

function onChange(value) {
    console.log(`selected ${value}`);
  }

const steps = [
    {
      title: 'Isi Data Hewan',
      content: 
      <div className='booking-section'>
          <div className='booking-form'>
            <Row gutter={[16, 16]} style={{paddingLeft:30}}>
                <Col span={12}>
                    <h6>Jenis Hewan</h6>
                    <Input.Group compact>
                        <Select
                            style={{width:300}}
                            placeholder="Pilih Jenis Hewan"
                            onChange={onChange}
                        >
                            <Option value="Kucing">Kucing</Option>
                            <Option value="Anjing">Anjing</Option>
                            <Option value="Kelinci">Kelinci</Option>
                            <Option value="Burung">Burung</Option>
                            <Option value="Hamsters">Hamsters</Option>
                        </Select>
                    </Input.Group>
                </Col>
                <Col span={12}>
                    <h6>Ras</h6>
                    <Input style={{width:300}}/>
                </Col>

                <Col span={12}>
                    <h6>Jenis Kelamin</h6>
                    <Input.Group compact>
                        <Select
                            style={{width:300}}
                            placeholder="Pilih Jenis Kelamin"
                            onChange={onChange}
                        >
                            <Option value="Laki-laki">Laki-laki</Option>
                            <Option value="Perempuan">Perempuan</Option>
                        </Select>
                    </Input.Group>
                </Col>
                <Col span={12}>
                    <h6>Umur</h6>
                    <Input style={{width:300}}/>
                </Col>

                <Col span={12}>
                    <h6>Berat Badan</h6>
                    <Input style={{width:300}}/>
                </Col>
                <Col span={12}>
                    <h6>Tanggal Konsultasi</h6>
                    <Space direction="vertical">
                        <DatePicker style={{width:300}} onChange={onChange} placeholder="Pilih tanggal konsultasimu"/>
                    </Space>
                </Col>

                <Col span={12}>
                    <h6>Keluhan</h6>
                    <TextArea style={{width:300}} rows={4} />
                </Col>

                <Col span={12}>
                    <h6>Waktu</h6>
                    <TimePicker style={{width:300}} defaultValue={moment('12:08', format)} format={format} />
                    <h6 style={{marginTop:5}}>Jenis Layanan</h6>
                    <Input.Group compact>
                        <Select
                            style={{width:300}}
                            placeholder="Pilih Jenis Layanan"
                            onChange={onChange}
                        >
                            <Option value="Klinik">Datang ke Klinik</Option>
                            <Option value="RUmah">Datang ke Rumah</Option>
                        </Select>
                    </Input.Group>
                </Col>
            </Row>
        </div>
        <div className='booking-img'>
            <img style={{width:225}} src={formClinic}/>
            <h6>Andista Animal Care</h6>
            <p style={{marginBottom:0}}>Jl. Kamboja No.2C, Jakarta Barat</p>
            <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>09.00 - 24.00 WIB</p>
        </div>
    </div>
    },
    {
      title: 'Lakukan Pembayaran',
      content:
        <div className='booking-section'>
            <div className='payment-desc'>
                <p>Silahkan lakukan pembayaran ke nomor rekening ini paling lambat 2 jam sebelum jadwal konsultasi</p>
                <p>BCA : 123 456 7890 (PT PetMate Sentosa)</p>
            </div>
            <div style={{marginLeft:50, marginTop:0}} className='booking-img'>
                <h6>Ringkasan Pemesanan</h6>
                <img style={{width:225}} src={formClinic}/>
                <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>09.00 - 24.00 WIB</p>
            </div>
        </div>
    },
    {
      title: 'Last',
      content: 'Selesai',
    },
  ];

export const AppBooking = () => {
const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className='block bookingClinic'>
        <div className='container-fluid'>
            <CardPanel style={{marginTop:100,width:1050}}>
                <Card>
                <Steps current={current}>
                    {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
                    {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                    )}
                    {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                    )}
                    {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                    )}
                </div>
                </Card>
            </CardPanel>
        </div>
    </div>
  )
}
