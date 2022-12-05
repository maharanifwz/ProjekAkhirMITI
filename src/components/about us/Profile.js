import React from 'react'
import { CardPanel } from '../consultation/Faq'
import { Row, Col, Card } from 'antd'

const items = [
    {
      key: '1',
      image: 'zidan',
      title: 'Maulana Zidhan',
      describe: 'sebagai Marketing'
    },
    {
      key: '2',
      image: 'alvaro',
      title: 'Archangela Muhammad',
      describe: 'sebagai Marketing'
    },
    {
      key: '3',
      image: 'hani',
      title: 'Maharani Fawwaz',
      describe: 'sebagai CEO'
    },
    {
        key: '4',
        image: 'azfar',
        title: 'Azfar Risla Alkhowarizmi',
        describe: 'sebagai CTO'
      },
      {
        key: '5',
        image: 'stefanus',
        title: 'Stefanus Fabiano',
        describe: 'sebagai Product'
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
                        <Col span={3} key={item.key} style={{marginLeft:75}}>
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
