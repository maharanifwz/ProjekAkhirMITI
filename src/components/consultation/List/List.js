import React from 'react'
import { ListClinic } from './ListClinic/ListClinic'
import './styles.css'

//list clinicnya udah jadi bentuk props
export const List = ({ list }) => {
  return (
    <div className='list-wrap'>
      {list.map(item => <ListClinic key={item.id} item={item}/>)}
    </div>
  )
}
