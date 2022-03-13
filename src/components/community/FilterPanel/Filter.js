import React from 'react'
import { CheckboxButton } from '../Checkbox'
import './styles.css'


export const Filter = ({animals, changeChecked}) => {
  return (
    <div>
      <div className='input-group'>
        {animals.map((animal) => (
        <CheckboxButton
          key={animal.id}
          animal={animal}
          changeChecked={changeChecked}
        />
      ))}
      </div>
    </div>
  )
}
