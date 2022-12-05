import React, { useState, useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';

export const AppList = ({ id, NameClinic, address, coverSrc, serviceTime }) => {
  const navigate = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => {if(id === 1){navigate('/consultation/detailclinic');}}}>
    <img src={coverSrc} alt='' />
      <h5>{NameClinic}</h5>
      <p>
        {}
        <br/>
        <p>{serviceTime}</p>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{address}</p>
      </p>
  </div>
  )
}
