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
    Upload
  } from 'antd';
import { CardPanel } from './Faq';
import styled from 'styled-components'
import formClinic from '../../assets/form.png'
import { TimePicker } from 'antd';
import moment from 'moment';
import {ButtonContainer} from '../home/Hero'
import { HashLink as Link } from 'react-router-hash-link';
import LogoBCA from '../../assets/Logo BCA.png'
import { UploadOutlined } from '@ant-design/icons';

const format = 'HH:mm';

const { Step } = Steps;
const { Option } = Select;
const { TextArea } = Input;

//buat upload foto
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
//

function onChange(value) {
    console.log(`selected ${value}`);
  }

const steps = [
    {
      title: 'Isi Data Hewan',
      content: 
      <div className='booking-section'>
          <div className='clinic-card booking-img'>
            <img style={{width:250}} src={formClinic}/>
            <h6>Andista Animal Care</h6>
            <p style={{marginBottom:0}}>Jl. Kamboja No.2C, Jakarta Barat</p>
            <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>09.00 - 24.00 WIB</p>
            <ButtonContainer>
                <Button style={{width:250, marginTop:65}}>
                    <Link to="/consultation/detailclinic">
                        Lihat Kembali Jadwal Praktik
                    </Link>
                </Button>
            </ButtonContainer>
        </div>
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
                    <h6>Tanggal Konsultasi</h6>
                    <Space direction="vertical">
                        <DatePicker style={{width:300}} onChange={onChange} placeholder="Pilih Tanggal Konsultasi"/>
                    </Space>
                </Col>

                <Col span={12}>
                    <h6>Ras</h6>
                    <Input style={{width:300, required: true}} placeholder="Ras (contoh : pomeranian)"/>
                </Col>
                <Col span={12}>
                    <h6>Waktu</h6>
                    <TimePicker style={{width:300}} defaultValue={moment('12:08', format)} format={format} placeholder="Pilih Waktu"/>
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
                    <h6>Jenis Layanan</h6>
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

                <Col span={12}>
                    <h6>Berat Badan</h6>
                    <Input style={{width:300}} placeholder="Berat Badan (contoh : 3,2 kg) "/>
                    <h6 style={{marginTop:5}}>Umur</h6>
                    <Input style={{width:300}} placeholder="Umur (contoh : 1 tahun 2 bulan) "/>
                </Col>
                <Col span={12}>
                    <h6>Keluhan</h6>
                    <TextArea style={{width:300}} rows={4} placeholder="Tuliskan Keluhan" />
                </Col>
            </Row>
        </div>
    </div>
    },
    {
      title: 'Lakukan Pembayaran',
      content:
      <div className='payment-section'>
      <Row gutter={[16, 16]}>
        <Col span={8}>
                <div className='clinic-card payment-img'>
                    <h6>Ringkasan Pemesanan</h6>
                    <img style={{width:250}} src={formClinic}/>
                    <h6 style={{marginTop:10, marginBottom:15}}>Layanan ke Rumah</h6>
                    <p style={{color: '#829C5F', fontWeight:'800'}}>Rp. 150.0000</p>
                </div>
        </Col>
        <Col span={8}>
            <center><div className='payment payment-upload'>
                <p>
                    Silahkan lakukan pembayaran ke nomor rekening dibawah ini paling lambat <span style={{fontWeight:900}} className='identity'>2 jam</span> sebelum jadwal konsultasi yang andah pilih
                </p>
                <div className='payment-method'>
                    <i style={{marginTop:20}} class="fa-solid fa-building-columns fa-2xl"></i>
                    <p style={{fontWeight:600}}>
                        BCA : 123 456 7890 
                        <br/>
                        (PT PetMate Sejahtera)
                    </p>
                </div>
                <ButtonContainer>
                    <Button style={{width:215, marginTop:25}} type="primary">
                        Unggah Bukti Pembayaran
                    </Button>
                </ButtonContainer>
            </div></center>
        </Col>
        <Col span={8}>
            <div className='payment payment-upload'>
            <Upload {...props}>
                <Button style={{marginTop:75}} icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            <ButtonContainer>
                <Button style={{width:215, marginTop:105}}>
                    Konfirmasi Pembayaran
                </Button>
            </ButtonContainer>
            </div>
        </Col>
      </Row>
      </div>
    },
    {
      title: 'Last',
      content: 
      <div className='payment process'>
          <p style={{fontSize:20, color: '#829C5F', fontWeight:'bold'}}>Pendaftaran Anda sedang diproses</p>
          <i style={{marginTop:40, marginBottom:40, color: '829C5F'}} class="fa-solid fa-clock fa-5x"></i>
          <center><p style={{fontSize:18, width: 370, height: 48, marginBottom: 25}}>Silahkan tunggu verifikasi pendaftaran yang akan kami kirimkan melalui whatsapp</p></center>
          <ButtonContainer style={{display:'flex'}}>
            <Button style={{ width:249 }} type="primary" size="large" onClick={() => message.success('Processing complete!')}><Link to='/consultation/listclinic/detailclinic/booking/riwayatpesanan'>Lihat Riwayat Pendaftaran</Link></Button>
            <Button style={{ width:249 }}>Kembali ke Halaman Utama</Button>
          </ButtonContainer>
      </div>,
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
                <ButtonContainer>
                <div className="steps-action">
                    {/* {current > 0 && (
                    <Button style={{width:250, marginTop:0, fontWeight:600 }} onClick={() => prev()}>
                        Lihat Kembali Jadwal Praktik
                    </Button>
                    )} */}
                    {/* {current === steps.length - 1 && (
                    <Button type="primary">
                        Done
                    </Button>
                    )} */}
                    {current < steps.length - 1 && (
                    <ButtonContainer>
                        <Button style={{marginLeft:750, marginTop:15, width:215, fontWeight:600}} type="primary" onClick={() => next()}>
                            Lanjutkan ke Pembayaran
                        </Button>
                    </ButtonContainer>
                    )}
                </div>
                </ButtonContainer>
                </Card>
            </CardPanel>
        </div>
    </div>
  )
}
