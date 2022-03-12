import { Card, Checkbox } from 'antd'
import React from 'react'
import { CardRiwayat } from './Riwayat'
import { AppTable } from '../../common/Table'
import { CheckBoxContainer } from '../../common/Checkbox'

export const AppRiwayatPesanan = () => {
  return (
    <div className='block riwayat'>
        <div style={{display:'flex'}} className='container-fluid'>
            <div style={{height:214}} className='home-panel-content'>
                <h5 style={{color:'#829C5F'}}>Riwayat Pendaftaran</h5>
                <CheckBoxContainer>
                    <Checkbox>Semua</Checkbox>
                    <Checkbox>Sedang Diproses</Checkbox>
                    <Checkbox>Selesai</Checkbox>
                </CheckBoxContainer>
                </div>
            <CardRiwayat>
                <AppTable/>
            </CardRiwayat>
        </div>
    </div>
  )
}
