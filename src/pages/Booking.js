import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { AppBooking } from '../components/consultation/Booking';

const { Header, Content } = Layout;

export const Booking = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppBooking/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout> 
    </div>
  )
}
