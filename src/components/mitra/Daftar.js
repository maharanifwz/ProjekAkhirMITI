import React from 'react'
import { AppForm } from '../common/Form'
import { Input, Form } from 'antd'

export const Daftar = () => {
  return (
    <div className='mitra'>
        <AppForm
        title='Daftar Sebagai Mitra Kami'
        input1='Nama Klinik'
        input2='Kontak'
        klik='Selanjutnya'
        desc='Sudah memiliki akun?'
        span='Masuk disini'
        link='/daftarmitra/daftarmitra2'
        path='/daftarmitra/masukmitra'>
          <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >Username
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="alamat"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >Alamat
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >Password
                        <Input.Password/>
                    </Form.Item>
        </AppForm>
    </div>
  )
}
