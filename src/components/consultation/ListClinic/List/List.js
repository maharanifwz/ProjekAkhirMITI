import React from 'react'
import './styles.css'

export const AppList = ({ item: { coverSrc, title, serviceTime, address }, }) => {
  return (
    <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h5>{title}</h5>
    </header>
    <footer>
      <p>
        {address}
        <br/>
        <p style={{color: '#4F692F', fontSize:12, fontWeight:'bold'}}>{serviceTime}</p>
      </p>
    </footer>
  </div>
  )
}
