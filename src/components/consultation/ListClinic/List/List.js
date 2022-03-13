import React, { useState, useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { dataList } from '../../../../constants/Data';


export const AppList = ({ item: { ID, NameClinic, Address, coverSrc, serviveTime }, }) => {
  const navigate = useNavigate();

  return (
    <div className='listItem-wrap' onClick={() => {if(ID === "1"){navigate('/consultation/detailclinic');}}}>
    <img src={dataList.coverSrc} alt='' />
    <header>
      <h5>{NameClinic}</h5>
    </header>
    <footer>
      <p>
        {}
        <br/>
        <p>{dataList.serviveTime}</p>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{Address}</p>
      </p>
    </footer>
  </div>
  )
}
