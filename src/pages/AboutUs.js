import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { AppAboutUs } from '../views/About Us';

const { Header, Content } = Layout;

export const AboutUs = () => {
  return (
    <div>
    <Layout className="mainLayout">
    <Header>
      <AppHeader/>
    </Header>
    <Content>
      <AppAboutUs/>
    </Content>
    <Footer>
      <AppFooter/>
    </Footer>
  </Layout>   
</div>
  )
}
