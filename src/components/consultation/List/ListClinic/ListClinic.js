import React from 'react'
import './styles.css'

export const ListClinic = ({ item: { coverSrc, title, address, serviceTime }, }) => {
  return (
    <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
    </header>
    <footer>
      <p>
        <b>{address}</b>
        <br></br>
        {serviceTime}
      </p>
      <p>
        <button type='submit'>Book Now</button>
      </p>
    </footer>
  </div>
  )
}
