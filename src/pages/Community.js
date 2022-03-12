import React from 'react'
import { Layout } from 'antd';
import '../App.css';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { AppHeader } from '../components/common/header';
import { AppCommunity } from '../views/Community'

const { Header, Content } = Layout;

export const Community = () => {
  return (
    <div>
    <Layout className="mainLayout">
    <Header>
      <AppHeader/>
    </Header>
    <Content>
      <AppCommunity/>
    </Content>
    <Footer>
      <AppFooter/>
    </Footer>
  </Layout>   
</div>
  )
}
