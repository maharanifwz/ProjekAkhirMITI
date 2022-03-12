import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../../components/common/header'
import { AppFooter } from '../../components/common/footer'
import { Footer } from 'antd/lib/layout/layout';
import { AppRiwayatPesanan } from '../../components/consultation/Riwayat/RiwayatPesanan'

const { Header, Content } = Layout;

export const RiwayatPesanan = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppRiwayatPesanan/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout> 
    </div>
  )
}
