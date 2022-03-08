import React from 'react'
import { AppHero } from '../components/home/Hero'
import { AppReview } from '../components/home/Review'
import { AppPartner } from '../components/home/Partner'
import { AppService } from '../components/home/Service'
import { AppBenefit } from '../components/home/Benefit'

export const AppHome = () => {
  return (
    <div className='main'>
        <AppHero/>
        <AppService/>
        <AppBenefit/>
        <AppReview/>
        <AppPartner/>
    </div>
  )
}
