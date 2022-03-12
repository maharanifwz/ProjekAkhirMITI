import React from 'react'
import { AppListCommunity } from '../views/List/ListCommunity';
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

export const ListCommunity = () => {
  return (
    <div> 
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppListCommunity/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout> 
    </div>
  )
}
