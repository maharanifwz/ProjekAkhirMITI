import React from 'react'
import { ButtonContainer } from '../home/Hero'
import { Button } from 'antd'
import { HashLink as Link } from 'react-router-hash-link'

export const Hero = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <ButtonContainer>
        <Button type="primary" size="large"><Link to={props.path}>{props.klik}</Link></Button>
      </ButtonContainer>
   </div>
  )
}
