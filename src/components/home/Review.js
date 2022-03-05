import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const items = [
  {
    key: '1',
    icon: <i className="fas fa-chart-pie"></i>,
    title: 'Alea Malika',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Toby Park',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Ungi Juseo',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '4',
    icon: <i className="fas fa-database"></i>,
    title: 'Ungi Juseo',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '5',
    icon: <i className="fas fa-database"></i>,
    title: 'Ungi Juseo',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
  {
    key: '6',
    icon: <i className="fas fa-database"></i>,
    title: 'Ungi Juseo',
    content: 'cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
  },
]

export const AppReview = () => {
  return (
    <div className='block aboutReview'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>What our customer say?</h2>
        </div>
        <Carousel arrows nextArrow={<RightOutlined />} prevArrow={<LeftOutlined />} slidesToShow={3} centerMode>
            {items.map((item) => {
              return (
                <Col key={item.key}>
                  <div className="content">
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
          </Carousel>
        <h2 className='quotesReview'>They motivate us to play, love, seek adventure,</h2>
        <h2 className='authorReview'>and be loyal." - Tom Hayden</h2>
      </div>
    </div>



   
  )
}
