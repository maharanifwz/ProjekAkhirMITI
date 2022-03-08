import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

const items = [
  {
    key: '1',
    image: 'assets1',
    title: 'Meisya',
    content: 'PetMate membuat saya merasa tidak khawatir untuk memesan layanan konsultasi di kala pandemi.',
  },
  {
    key: '2',
    image: 'assets2',
    title: 'Andrew',
    content: 'PetMate menyediakan layanan terbaik untuk merawat hewan peliharaan saya.',
  },
  {
    key: '3',
    image: 'assets3',
    title: 'Hanan',
    content: 'Temukan komunitas pada PetMate mempertemukan saya dengan penyayang hewan peliharaan lain.',
  },
  {
    key: '4',
    image: 'assets1',
    title: 'Santa',
    content: 'PetMate membuat saya merasa tidak khawatir untuk memesan layanan konsultasi di kala pandemi.',

  },
  {
    key: '5',
    image: 'assets2',
    title: 'Alex',
    content: 'PetMate menyediakan layanan terbaik untuk merawat hewan peliharaan saya.',

  },
  {
    key: '6',
    image: 'assets3',
    title: 'Hani',
    content: 'Temukan komunitas pada PetMate mempertemukan saya dengan penyayang hewan peliharaan lain.',
  },
]

export const AppReview = () => {
  return (
    <div className='block aboutReview'>
      <div className='container-fluid'>
        <div className='titleHolder'>
          <h2>Apa kata mereka?</h2>
        </div>
        <p className='color'>Beberapa testimonial dari para pelanggan yang telah menggunakan layanan pada website PetMate</p>
        <Carousel arrows nextArrow={<RightOutlined />} prevArrow={<LeftOutlined />} slidesToShow={3}  dots={false} centerMode>
            {items.map((item) => {
              return (
                <Col key={item.key}>
                  <div className="content">
                    <img src={require('../../assets/' + item.image + '.png')}/>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
          </Carousel>
      </div>
    </div> 
  )
}
