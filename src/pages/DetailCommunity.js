import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { DetailKomunitas } from '../components/community/detailCommunity';

const { Header, Content } = Layout;


export const DetailCommunity = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <DetailKomunitas/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>  
    </div>
  )
}
