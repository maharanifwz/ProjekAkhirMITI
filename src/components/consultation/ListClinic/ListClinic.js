import React from 'react'
import { AppList } from './List/List'
import './styles.css'
import { dataList } from '../../../constants/Data'


export const AppClinic = ({list}) => {

  return (
    <div className='list-wrap'>
      {dataList.map(item => <AppList key={item.id} {...item} />)}
    </div>
  )
}
