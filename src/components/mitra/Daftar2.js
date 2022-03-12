import React from 'react'
import { AppForm } from '../common/Form'

export const Daftar2 = () => {
  return (
    <div className='mitra'>
        <AppForm
        title='Satu langkah lagi untuk menjadi mitra kami'
        input1='Nomor Rekening'
        input2='Jadwal Klinik Hewan (Link Spreadsheet)'
        klik='Daftar'
        desc='Sudah memiliki akun?'
        span='Daftar disini'
        path='/datapendaftar'
        link='/daftarmitra/daftarmitra2/datamitra'
        >
        <h5>Petunjuk</h5>
        <div style={{display:'flex', marginTop:25}}>
            <i class="fa-solid fa-paw"></i>
            <p style={{width:400, marginLeft:15}}>Anda hanya dapat menggunakan satu nomor rekening untuk transaksi</p>
        </div>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <i class="fa-solid fa-paw"></i>
            <p style={{width:400, marginLeft:15}}>Harap memperbaharui link spreadsheet yang Anda inputkan sesuai jadwal terbaru, berikan akses lihat saja untuk semua orang</p>
        </div>
        </AppForm>
    </div>
  )
}
