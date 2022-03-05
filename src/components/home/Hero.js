import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export const ButtonContainer = styled.div`
.ant-btn {
  border-color: #829C5F;
  border-radius: 10px;
  color: #829C5F; 
  width: 175px;
  height: 47px;
}  


.ant-btn-primary {
  color: white;
  margin-right: 15px;
  background: #829C5F;
  border-color: #829C5F;
  width: 138px;
  }
`;

export const AppHero = () => {
  return (
    <div className='heroBlock'>
      <h1>Layanan terbaik untuk hewan peliharaan kesayanganmu</h1>
      <p>
        Temukan layanan terbaik dan terdekat untuk hewan peliharaan kesayanganmu dalam <span className='identity'>satu tempat</span>
      </p>
      <ButtonContainer>
        <Button type="primary" size="large">Mulai</Button>
        <Button>Pelajari Selengkapnya</Button>
      </ButtonContainer>
    </div>
  )
}
