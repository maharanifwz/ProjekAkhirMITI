import React from 'react'
import { AppListClinic } from '../views/ListClinic/ListClinic'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Content } = Layout;

export const ListClinic = () => {
  return (
    <div> 
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppListClinic/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout> 
    </div>
  )
}
