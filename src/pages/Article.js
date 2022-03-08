import React from 'react'
import { Layout } from 'antd';
import { AppHeader } from '../components/common/header';
import '../App.css';
import { AppFooter } from '../components/common/footer';
import { Footer } from 'antd/lib/layout/layout';
import { AppArticle } from '../views/Article';


const { Header, Content } = Layout;

export const Article = () => {
  return (
    <div>
        <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppArticle/>
        </Content>
        <Footer>
          <AppFooter/>
        </Footer>
      </Layout>   
    </div>
  )
}
