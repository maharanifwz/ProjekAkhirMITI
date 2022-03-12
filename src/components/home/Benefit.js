import { Card } from 'antd'
import React from 'react'

export const AppBenefit = () => {
  return (
    <div className='block benefit'>
        <div className='container-fluid'>
            <div className='benefit-section'>
                <h2>Mengapa harus memilih kami?</h2>
                <p className='center'>Sebagai penyedia layanan terbaik untuk hewan peliharaan, tentunya kami memiliki keunggulan yang membedakan kamu dengan produk lain </p>
                <div className='services'>
                  <i class="fa-solid fa-paw"></i>
                  <p>Pesan layanan konsultasi dengan mudah</p>
                </div>
                <div className='services'>
                  <i class="fa-solid fa-paw"></i>
                  <p>Harga layanan terjangkau</p>
                </div>
                <div className='services'>
                  <i class="fa-solid fa-paw"></i>
                  <p>Transaksi pembayaran yang aman dan terpercaya</p>
                </div>
            </div>
            <Card style={{height:200, width:1000}}>
                <h3 className='quotes1'>They motivate us to play, love, seek adventure,</h3>
                <h3 className='quotes2'>and be loyal." - Tom Hayden</h3>
            </Card>
        </div>
    </div>
  )
}
