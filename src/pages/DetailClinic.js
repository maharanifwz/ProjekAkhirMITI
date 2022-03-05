import React from 'react'
import { AppDetail } from '../components/consultation/DetailClinic'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;


export const DetailClinic = () => {
  return (
    <div id='#detail'>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppDetail/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>  
    </div>
  )
}
