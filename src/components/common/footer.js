import React from 'react'
import { Row, Col } from 'antd'
import { Input, Button } from 'antd'
import styled from 'styled-components'
import logoPetMate from '../../assets/Logo paw.png'

const InputContainer = styled.div`
  .ant-input,
  .ant-btn-primary{
    border-color: #829C5F;
    border-radius: 10px 0px 0px 10px;
    color: #FFFF; 
  }

  .ant-btn-primary {
    background: #829C5F; 
    border-radius: 0px 10px 10px 0px;
  }
`

export const AppFooter = () => {
  return (
    <div className='container-fluid'>
        <div className='footer'>
          <hr/>
        <Row gutter={[16, 16]}>
            <Col span={8}>
            <h4>Mari Terhubung</h4>
            <ul className='socials'>
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-whatsapp-square fa-2x"></i></a></li>
            <li><a href="https://www.instagram.com/petmate_id/"><i class="fa-brands fa-instagram-square fa-2x"></i></a></li>
            <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin fa-2x"></i></a></li>
            <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-square fa-2x"></i></a></li>
        </ul>
            </Col>
            <Col span={8}>
              <h4>Informasi Website</h4>
              <ul>
                <li>Konsultasi</li>
                <li>Layanan Grooming</li>
                <li>Komunitas</li>
                <li>Blog</li>
                <li>Tentang Kami</li>
              </ul>
            </Col>
            <Col span={8}>
              <div className="logo">
                <img src={logoPetMate}/>
                <a className="logo">Pet<span className="identity">Mate</span></a>
              </div>
              <p>Dapatkan informasi terbaru tentang layanan dan promo dari  Pet Mate</p>
              <InputContainer>
                <Input style={{ width: 'calc(100% - 200px)'}} placeholder="Email Anda" />
                <Button type="primary">Submit</Button>
              </InputContainer>
            </Col>
        </Row>
        </div>
    </div>
  )
}
