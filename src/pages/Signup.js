import React from 'react'
import { AppForm } from '../components/common/Form'
import { Input, Form } from 'antd'

export const Signup = () => {
  return (
      <div>
    <AppForm
        title='Daftar'
        input1='Nama'
        input2='Kontak'
        klik='Daftar'
        desc='Sudah memiliki akun?'
        span='Masuk disini'>
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
