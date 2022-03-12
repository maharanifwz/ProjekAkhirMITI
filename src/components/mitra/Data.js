import { Button, Row, Col, Input, Form } from 'antd'
import React from 'react'
import mitra2 from '../../assets/mitra2.png'
import { AppForm } from '../common/Form'
import { ButtonContainer } from '../home/Hero'
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

export const Data = () => {
  const [collapsed, setCollapsed] = useState(false);
  toggleCollapsed = () => {
    setCollapsed(false);
  }
  return (
    <div>

      <h5>Selamat Datang Kembali, Andista Animal Care</h5>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <img src={mitra2}/>
          <ButtonContainer>
            <Button>Unggah Foto Klinik</Button>
          </ButtonContainer>
        </Col>
        <Col span={12}>
        <div className='mitra' style={{height:'100vh'}}>
        <AppForm
          title=''
          input1='Nama Klinik'
          input2='Kontak'
          klik='Masuk'
          desc=''
          span=''
          path=''
          link=''
        >
          <Form.Item
              name="username"
              rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
            >Username
              <Input/>
          </Form.Item>
                  <Form.Item
                    name="alamat"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >Alamat
                        <Input/>
                    </Form.Item>
          </AppForm>
        </div>
        </Col>
      </Row>
    </div>
  )
}
