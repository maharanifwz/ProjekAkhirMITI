import React from 'react'
import { Card, Col, Row, Button} from 'antd'
import detailClinic from '../../assets/Mask group.png'
import styled from 'styled-components'
import { ButtonContainer } from '../home/Hero'

const CardContainer = styled.div`
  .ant-card {
    width: 1050px;
    margin-top: 100px;
  }
`

export const AppDetail = () => {
  return (
    <div className='block detailClinic'>
      <div className='container-fluid'>
      <CardContainer>
      <Card>
        <h2>Andista Animal Care</h2>
        <p className='identity'>
          Jl. Kamboja No.2C, RW.1, Jatipulo, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 
        </p>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <img src={detailClinic}/>
            <article>
              <p>
                Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur pada awalnya adalah sebuah Klinik Hewan yang didirikan tahun 2002. Seiring dengan perkembangan zaman dan kebutuhan masyarakat yang semakin meningkat terhadap layanan kesehatan hewan, maka status Klinik Hewan secara bertahap ditingkatkan menjadi Rumah Sakit Hewan.
              </p>
              <p>
                Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur merupakan kepanjangan fungsi pelayanan dari Bidang Kesehatan Hewan Dinas Peternakan Provinsi Jawa Timur.
              </p>
              <p>
              Dengan terus melakukan peningkatan di segala aspek yang berhubungan dengan pelayanan jasa Medik Veteriner secara berkesinambungan, Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur berkomitmen untuk dapat menjadi Rumah Sakit Hewan Pemerintah yang berkualitas dan terjangkau. Upaya peningkatan kualitas pelayanan antara lain di tempuh melalui pembelajaran berkelanjutan pada tenaga Medik Veteriner contohnya melalui Continuing Profesional Development, seminar, workshop, bimbingan teknis (BIMTEK), yang melibatkan narasumber yang berkompeten di bidangnya. Disamping itu updating (pembaharuan) dan penambahan peralatan pendukung diagnosa juga menjadi agenda tahunan Rumah Sakit Hewan Dinas Peternakan Provinsi Jawa Timur yang ditujukan untuk meningkatkan ketepatan diagnosa.
              </p>
            </article>
          </Col>
          <Col span={12}>
            <section className='desc-detailClinic'>
            <ButtonContainer>
              <Button style={{width:296}} type="primary" size="large">Buat Janji Konsultasi</Button>
              <Button style={{width:296}}>Pelajari Selengkapnya</Button>

            </ButtonContainer>
            </section>
          </Col>
        </Row>
      </Card>
      </CardContainer>
      </div> 
    </div>
  )
}
