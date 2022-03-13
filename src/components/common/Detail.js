import React from 'react'
import { Card, Col, Row, Button} from 'antd'
import detailClinic from '../../assets/Mask group.png'
import { ButtonContainer } from '../home/Hero'
import { HashLink as Link } from 'react-router-hash-link'
import {CardPanel} from '../consultation/Faq'
import { Navigate } from 'react-router-dom'

export const Detail = props => {
  return (
    <div className='block detailClinic'>
      <div className='container-fluid'>
      <CardPanel>
      <Card style={{marginTop:100, width:1050}}>
        <h2>{props.title}</h2>
        <p className='identity'>
         {props.description}
        </p>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img src={props.image}/>
            <article>
              <p>{props.article1}</p>
              <p>{props.article2}</p>
              <p>{props.article3}</p>
            </article>
          </Col>
          <Col span={12}>
            <section className='btn-detailClinic'>
              <ButtonContainer>
               <Button style={{width:296, marginBottom:25}} type="primary" size="large"><a href={props.link}>{props.klik}</a></Button>
                <Button style={{width:296}}><a href={props.link2}>{props.klik2}</a></Button>
              </ButtonContainer>
              {props.children}
              <div className='desc-detailClinic section2'>
                <h5>{props.service}</h5>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc1}</p>
                </div>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc2}</p>
                </div>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc3}</p>
                </div>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc4}</p>
                </div>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc5}</p>
                </div>
                <div className='description'>
                  <i class="fa-solid fa-paw"></i>
                  <p>{props.desc6}</p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Card>
      </CardPanel>
      </div> 
    </div>
  )
}
