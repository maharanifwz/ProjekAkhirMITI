import React from 'react'
import { AppForm } from '../common/Form'

export const Masuk = () => {
  return (
    <div className='mitra' style={{height:'100vh'}}>
        <AppForm
        title='Masuk'
        input1='Username'
        input2='Password'
        klik='Masuk'
        desc='Belum memiliki akun?'
        span='Daftar disini'
        path='/datapendaftar'
        link='/'
        />
    </div>
  )
}
