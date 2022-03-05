import '../App.css';
import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppHome } from '../views/Home';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

export const Homepage = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppHome/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>   
    </div>
  )
}
