import React from 'react'
import { Button } from 'antd'
import { ButtonContainer } from '../home/Hero'
import { HashLink as Link } from 'react-router-hash-link';

export const AppHero = () => {
  return (
    <div className='consultationBlock'>
      <h1>Konsultasi</h1>
      <p>
      Pilih jenis (ke klinik atau ke rumah) dan jadwal konsultasi sesuai keinginanmu. Sekarang, pesan konsultasi untuk hewan peliharaanmu jadi lebih mudah dengan PetMate. Ingat, segera pesan layanan konsultasi untuk <span className='identity'>hewan peliharaan</span> kesayanganmu ya!
      </p>
      <ButtonContainer>
        <Button type="primary" size="large"><Link to="/consultation/detailclinic">Temukan Klinik</Link></Button>
      </ButtonContainer>
    </div>
  )
}
