import React from 'react'
import { AppList } from './List/List'
import './styles.css'

export const AppClinic = ({list}) => {
  return (
    <div className='list-wrap'>
      {list.map(item => <AppList key={item.id} item={item}/>)}
    </div>
  )
}
