import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

export const ButtonContainer = styled.div`
.ant-btn {
  border-color: #829C5F;
  border-radius: 10px;
  color: #829C5F; 
  width: 175px;
  height: 47px;
  background: none;
  font-weight:600;
}  

.ant-btn-primary {
  color: white;
  margin-right: 15px;
  background: #829C5F;
  border-color: #829C5F;
  }
`;

export const AppHero = () => {
  const navigate = useNavigate();

  return (
    <div className='block heroBlock'>
      <h1>Layanan terbaik untuk hewan peliharaan kesayanganmu</h1>
      <p>
        Temukan layanan terbaik dan terdekat untuk hewan peliharaan kesayanganmu dalam <span className='identity'>satu tempat</span>
      </p>
      <ButtonContainer>
        <Button type="primary" size="large" onClick={() => {navigate('/signin');}}>Mulai</Button>
        <Button>Pelajari Selengkapnya</Button>
      </ButtonContainer>
    </div>
  )
}
