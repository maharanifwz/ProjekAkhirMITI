import React from 'react'
import { Button } from 'antd'
import { Card } from 'antd'
import {ButtonContainer} from './Hero.js'

export const AppPartner = () => {
  return (
    <div className='block'>
        <div className='container-fluid'>
          <div className='partner'> 
            <Card style={{width: 900, height:348}}>
                <h2>Mari bergabung dengan kami!</h2>
                <p>Kami mengajak seluruh klinik hewan di Indonesia untuk bergabung dengan kami dan memberikan layanan kesehatan terbaik!</p>
                <ButtonContainer>
                  <Button type="primary" size="large">Daftar</Button>
                </ButtonContainer>
            </Card>
          </div>
        </div>
    </div>
  )
}
