import React from 'react'
import {CardPanel} from '../consultation/Faq'
import { Collapse, Card } from 'antd';

const { Panel } = Collapse;

export const AppReason = () => {
  return (
    <div className='block'>
        <div className='container-fluid'>
        <CardPanel>
          <Card style={{width: 900}}>
            <div className='titleHolder'>
                <h2>Mengapa harus bergabung dengan komunitas ?</h2>
            </div>
             <Collapse style={{width:800}} defaultActiveKey={['1']}>
          <Panel header="Kamu akan menemukan banyak penyayang hewan peliharaan yang sama denganmu" key="1">
            <p>Karena memiliki hobi yang sama, kamu bisa saling sharing terkait kendala yang kamu hadapi selama memelihara hewan. Saling bertukar cerita tentu dapat meningkatkan informasi yang kita miliki, sehingga bsia merawat hewan dengan lebih baik</p>
          </Panel>
          <Panel header="Komunitas menyediakan berbagai macam acara yang sangat menarik" key="2">
            <p>Kamu </p>
          </Panel>
          <Panel header="Kamu akan mendapatkan berbagai macam ilmu seputar perawatan untuk hewan peliharaanmu" key="3">
            <p>Setelah pembayaran diverifikasi, kamu akan mendapatkan waktu untuk pihak klinik hewan tiba di rumahmu. Pastikan tetap di rumah saja ya!</p>
          </Panel>
        </Collapse>
        </Card>
      </CardPanel>
      </div>
    </div>
  )
}
