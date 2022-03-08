import React from 'react'
import { AppHero } from '../components/community/Hero'
import { AppReason } from '../components/community/Reason'


export const AppCommunity = () => {
  return (
    <div className='main'>
        <AppHero/>
        <AppReason/>
    </div>
  )
}
