import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import '../App.css';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { AppGrooming } from '../views/Grooming';


const { Header, Content } = Layout;

export const Grooming = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppGrooming/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>   
    </div>
  )
}
