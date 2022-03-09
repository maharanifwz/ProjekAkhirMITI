import React from 'react'
import { AppForm } from '../common/Form'
import { Input, Form } from 'antd'

export const Daftar = () => {
  return (
    <div>
        <AppForm
        title='Daftar'
        input1='Nama'
        input2='Kontak'
        klik='Daftar'
        desc='Sudah memiliki akun?'
        span='Masuk disini'>
        </AppForm>
    </div>
  )
}
