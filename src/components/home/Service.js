import { Col, Row} from 'antd'
import React from 'react'

const items1 = [
    {
      key: '1',
      icon: <i class="fa-solid fa-image"></i>,
      title: 'Consultation',
    },
    {
      key: '2',
      icon: <i class="fa-solid fa-image"></i>,
      title: 'Grooming',
    },
  ]

  const items2 = [
    {
      key: '1',
      icon: <i class="fa-solid fa-image"></i>,
      title: 'Community',
    },
    {
      key: '2',
      icon: <i class="fa-solid fa-image"></i>,
      title: 'Education',
    },
  ]



export const AppService = () => {
  return (
    <div className='block service'>
        <div className='container-fluid'>
        <div className='service-content'>
        <Row gutter={[16, 16]}>
            {items1.map(item => {
              return (
                <Col span={8} key={item.key}>
                  <div className='content' style={{backgroundColor: item.key == '2'? '#829C5F' : ''}}>
                    <div className='icon'>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
        </Row>
        <div className='desc-service'>
          <h2>Layanan Kami</h2>
          <p>
          Kami hadir untuk memberikan layanan terbaik bagi hewan peliharaan kesayanganmu, 
          mulai dari pesan layanan konsultasi langsung ke klinik hewan atau ke rumah, layanan 
          grooming hingga temukan komunitas pemilik hewan terdekat.
          </p>
        </div>
        </div>
        <div className='service-content'>
        <Row gutter={[16, 16]}>
            {items2.map(item => {
              return (
                <Col span={8} key={item.key}>
                  <div className='anotherContent' style={{backgroundColor: item.key == '2'? '#F6FBEE' : ''}}>
                    <div className='icon'>
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                </Col>
              );
            })}
        </Row>
        <div className='desc-anotherService'>
          <h3>Mengapa harus kami?</h3>
          <ul>
            <li>Pesan layanan konsultasi dengan mudah</li>
            <li>Layanan grooming di pet care terdekat</li>
            <li>Temukan komunitas pemilik hewan terdeka</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
  )
}
