import React from 'react'
import { Hero } from '../common/Hero';

export const AppHero = () => {
  return (
    <div className='block consultation'>
      <Hero title="Konsultasi" description="Temukan klinik hewan di sekitarmu dan pilih jenis layanan (ke klinik atau ke rumah) dengan jadwal konsultasi yang sesuai dengan keinginanmu. Sekarang, pesan konsultasi untuk hewan peliharaanmu jadi lebih mudah dengan PetMate. Ingat, segera pesan layanan konsultasi untuk hewan peliharaan kesayanganmu ya!"
      klik="Temukan Klinik" path="/consultation/listclinic"/>
    </div>
  )
}
