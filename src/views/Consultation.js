import React from 'react'
import { AppHero } from '../components/consultation/Hero'
import { AppFaq } from '../components/consultation/Faq'
import { AppDetail } from '../components/consultation/DetailClinic'


export const AppConsultation = () => {
  return (
    <div className='main'>
        <AppHero/>
        <AppFaq/>
    </div>
  )
}
