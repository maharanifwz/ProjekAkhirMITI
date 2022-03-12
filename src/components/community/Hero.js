import React from 'react'
import { Hero } from '../common/Hero'

export const AppHero = () => {
  return (
    <div className='communityBlock'>
      <Hero 
      title="Komunitas" 
      description="Temukan komunitas penyayang hewan peliharaan yang sesuai dan dekat denganmu. Jadikan komunitas ini sebagai jalan untuk semakin menyayangi hewan peliharaaanmu!"
      klik="Temukan Komunitas" path="/community/listcommunity"/>
    </div>
  )
}
