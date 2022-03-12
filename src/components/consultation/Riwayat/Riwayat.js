import React from 'react'
import styled from 'styled-components'
import riwayat from '../../../assets/riwayat.png'

export const CardRiwayat = styled.div`
  width: 861px;
  height: 219px;
  background: #FFFFFF;
  border: 1px solid rgba(37, 42, 49, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 6px 4px rgba(37, 42, 49, 0.16);
  border-radius: 10px;
  margin: 0 auto;
`

export const AppRiwayat = () => {
  return (
    <div className='block riwayat'>
        <div className='container-fluid'>
            <CardRiwayat>
                <p>Anda belum pernah memesan layanan konsultasi</p>
                <img src={riwayat}/>
            </CardRiwayat>
        </div>
    </div>
  )
}
