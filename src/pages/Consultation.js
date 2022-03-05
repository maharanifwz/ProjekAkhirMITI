import '../App.css';
import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppConsultation } from '../views/Consultation';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

export const Consultation = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppConsultation/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>   
    </div>
  )
}
