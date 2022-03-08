import React from 'react'
import { Collapse } from 'antd';
import { Card } from 'antd';
import styled from 'styled-components'

export const CardPanel = styled.div`
  .ant-card {
    margin: 0 auto;
    background: #F6EDD9;
    border-radius: 10px;
    padding: 60px 0;
  }
`

const { Panel } = Collapse;

export const AppFaq = () => {
  return (
    <div className='block'>
        <div className='container-fluid'>
        <CardPanel>
          <Card style={{width: 900}}>
            <div className='titleHolder'>
                <h2>Frequently Asked Questions</h2>
            </div>
             <Collapse style={{width:800}} defaultActiveKey={['1']}>
          <Panel header="Bagaimana tata cara memesan layanan konsultasi ?" key="1">
            <p>Kamu bisa memilih klinik sesuai dengan tempat tinggalmu, isi form pendaftaran dan pilih jenis layanannya. Lalu, jangan lupa untuk melakukan pembayaran dan menggunggah bukti pembayarannya agar pesananmu bisa terdaftar!</p>
          </Panel>
          <Panel header="Bagaimana proses layanan konsultasi ke klinik ?" key="2">
            <p>Setelah pembayaran diverifikasi, kamu akan mendapat estimasi waktu untuk layanan yang sudah kamu pesan. Pastikan untuk datang tepat waktu ya!</p>
          </Panel>
          <Panel header="Bagaimana proses layanan konsultasi ke rumah ?" key="3">
            <p>Setelah pembayaran diverifikasi, kamu akan mendapatkan waktu untuk pihak klinik hewan tiba di rumahmu. Pastikan tetap di rumah saja ya!</p>
          </Panel>
        </Collapse>
        </Card>
      </CardPanel>
      </div>
    </div>
  )
}
