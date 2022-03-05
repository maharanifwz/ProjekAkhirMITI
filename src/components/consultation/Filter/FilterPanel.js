import React from 'react'
import { CheckboxButton } from '../../common/Checkbox'
import './styles.css'

//props yang dari checkbutton
export const FilterPanel = ({ locations, changeChecked}) => {
  return (
    <div>
       <div className='input-group'>
        {locations.map((location) => (
        <CheckboxButton
          key={location.id}
          location={location}
          changeChecked={changeChecked}
        />
      ))}
      </div> 
    </div>
  )
}
