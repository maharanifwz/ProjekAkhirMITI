import React from 'react'
import { AppForm } from '../common/Form'

export const Langkah = () => {
  return (
    <div>
        <AppForm
        title='Satu langkah lagi untuk menjadi mitra kami'
        input1='Nomor Rekening'
        input2='Jadwal Klining Hewan(Link Spreadsheet)'
        klik='Daftar'
        desc='Sudah memiliki akun?'
        span='Masuk disini'
        path='/daftarmitra/langkahmitra'>
            <p style={{fontSize:18}}>Petunjuk</p>
            <div className='services'>
                <i class="fa-solid fa-paw"></i>
                <p>Anda hanya dapat menggunakan satu nomor rekening untuk transaksi</p>
            </div>
            <div className='services'>
                <i class="fa-solid fa-paw"></i>
                <p>Harap memperbaharui link spreadsheet yang Anda inputkan sesuai jadwal terbaru, berikan akses lihat saja untuk semua orang</p>
            </div>
        </AppForm>
    </div>
  )
}
