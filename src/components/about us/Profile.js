import React from 'react'
import { CardPanel } from '../consultation/Faq'
import { Row, Col, Card } from 'antd'

const items = [
    {
      key: '1',
      image: 'rayhan',
      title: 'Rayhan Syahrizal',
      describe: 'sebagai Product Manejemen'
    },
    {
      key: '2',
      image: 'imel',
      title: 'Imelda Fransisca',
      describe: 'sebagai Product Desainer'
    },
    {
      key: '3',
      image: 'hani',
      title: 'Maharani Fawwaz',
      describe: 'sebagai Front End'
    },
    {
        key: '4',
        image: 'adit',
        title: 'Aditya Rizky',
        describe: 'sebagai Back End'
      },
  ]

export const AppProfile = () => {
  return (
    <div className='block profile'>
        <div className='container-fluid'>
            <CardPanel>
                <Card style={{width:1160}}>
                <h2>Mari bertemu dengan tim kami</h2>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                    return (
                        <Col span={4} key={item.key} style={{marginLeft:75}}>
                        <center><div className='content'>
                            <img src={require('../../assets/' + item.image + '.png')}/>
                            <h5>{item.title}</h5>
                            <center><p style={{width:200}}>{item.describe}</p></center>
                        </div></center>
                        </Col>
                        );
                    })}
                </Row>
                </Card>
            </CardPanel>
        </div>
    </div>
  )
}
