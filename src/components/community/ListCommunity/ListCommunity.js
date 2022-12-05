import React from 'react'
import { AppList } from './List/List'
import '../../consultation/ListClinic/styles.css'
import { communityList } from '../../../constants/Data'


export const AppCommunity = ({list}) => {

  return (
    <div className='list-wrap'>
      {communityList.map(item => <AppList key={item.id} item={item}/>)}
    </div>
  )
}
