import { Col, Row} from 'antd'
import React from 'react'

const items1 = [
    {
      key: '1',
      image: 'konsultasi1',
      title: 'Konsultasi',
      describe: 'Kami membantu Anda menemukan layanan konsultasi kesehatan hewan disekitar mu. Terdapat dua pilihan layanan yaitu konsultasi ke klinik atau konsultasi ke rumah'
    },
    {
      key: '2',
      image: 'konsultasi2',
      title: 'Komunitas',
      describe: 'Temukan komunitas penyayang hewan peliharaan yang sesuai. Jadikan komunitas ini sebagai wadah untuk semakin menyayangi hewan peliharaaanmu!'
    },
    {
      key: '3',
      image: 'konsultasi3',
      title: 'Artikel',
      describe: 'Membaca artikel dapat menambah pengetahuan kamu tentang cara merawat hewan peliharan dengan baik dan benar'
    },
  ]

export const AppService = () => {
  return (
    <div id='service' className='service'>
        <div className='container-fluid'>
        <div className='service-content'>
          <h2>Layanan kami</h2>
          <p>Kami sadar bahwa hewan peliharaan sangat berperan besar bagi kehidupan pemiliknya. Untuk itu kami hadir memberikan fitur  yang terbaik bagi hewan peliharaan kesayanganmu</p>
          <Row gutter={[16, 16]}>
            {items1.map(item => {
              return (
                <Col span={6} key={item.key} style={{margin:'0 auto'}}>
                  <center><div className='content'>
                    <img src={require('../../assets/' + item.image + '.png')}/>
                    <h4>{item.title}</h4>
                    <p style={{width:347}}>{item.describe}</p>
                  </div></center>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  )
}
