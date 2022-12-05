import React, { useState } from 'react'
import '../../../consultation/ListClinic/List/styles.css'
import { useNavigate } from 'react-router-dom';
import {communityList} from '../../../../constants/Data'

export const AppList = ({ item: { coverSrc, title, established }, }) => {
  const navigate = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => {if(title === "Komunitas Pecinta Kucing Jakarta"){navigate('/community/detailcommunity');}}}>
    <img src={coverSrc} alt='' />
    <header>
      <h5>{title}</h5>
    </header>
    <footer>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{established}</p>
    </footer>
  </div>
  )
}
