import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../../components/common/header'
import { AppFooter } from '../../components/common/footer'
import { Footer } from 'antd/lib/layout/layout';
import { AppRiwayat } from '../../components/consultation/Riwayat/Riwayat'

const { Header, Content } = Layout;

export const Riwayat = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppRiwayat/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout> 
    </div>
  )
}
