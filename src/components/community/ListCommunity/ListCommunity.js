import React from 'react'
import { AppList } from './List/List'
import '../../consultation/ListClinic/styles.css'


export const AppCommunity = ({list}) => {

  return (
    <div className='list-wrap'>
      {list.map(item => <AppList key={item.id} item={item}/>)}
    </div>
  )
}
