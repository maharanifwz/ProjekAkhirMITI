import React from 'react'
import { Button } from 'antd'
import { Card } from 'antd'
import {ButtonContainer} from './Hero.js'

export const AppPartner = () => {
  return (
    <div className='block'>
        <div className='container-fluid'>
            <Card style={{width: 900}}>
            <div className='partner'>
                <h2>Mari bergabung dengan kami!</h2>
                <p>Kami mengajak seluruh klinik hewan di Indonesia untuk bergabung dengan kami dan memberikan layanan kesehatan terbaik!</p>
                <ButtonContainer>
                  <Button type="primary" size="large">Daftar</Button>
                </ButtonContainer>
            </div>
            </Card>
        </div>
    </div>
  )
}
