// import { Button, Row, Col, Input, Form } from 'antd'
// import useState
// import React from 'react'
// import mitra2 from '../../assets/mitra2.png'
// import { AppForm } from '../common/Form'
// import { ButtonContainer } from '../home/Hero'
// import { Menu } from 'antd';
// import {
//   AppstoreOutlined,
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   PieChartOutlined,
//   DesktopOutlined,
//   ContainerOutlined,
//   MailOutlined,
// } from '@ant-design/icons';

// const { SubMenu } = Menu;

// export const Data = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   toggleCollapsed = () => {
//     setCollapsed(false);
//   }
//   return (
//     <div style={{ width: 256 }}>
//     <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
//       {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
//     </Button>
//     <Menu
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       theme="dark"
//       inlineCollapsed={this.state.collapsed}
//     >
//       <Menu.Item key="1" icon={<PieChartOutlined />}>
//         Option 1
//       </Menu.Item>
//       <Menu.Item key="2" icon={<DesktopOutlined />}>
//         Option 2
//       </Menu.Item>
//       <Menu.Item key="3" icon={<ContainerOutlined />}>
//         Option 3
//       </Menu.Item>
//       <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
//         <Menu.Item key="5">Option 5</Menu.Item>
//         <Menu.Item key="6">Option 6</Menu.Item>
//         <Menu.Item key="7">Option 7</Menu.Item>
//         <Menu.Item key="8">Option 8</Menu.Item>
//       </SubMenu>
//       <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//         <Menu.Item key="9">Option 9</Menu.Item>
//         <Menu.Item key="10">Option 10</Menu.Item>
//         <SubMenu key="sub3" title="Submenu">
//           <Menu.Item key="11">Option 11</Menu.Item>
//           <Menu.Item key="12">Option 12</Menu.Item>
//         </SubMenu>
//       </SubMenu>
//     </Menu>
//   </div>

//       <h5>Selamat Datang Kembali, Andista Animal Care</h5>
//       <Row gutter={[16, 16]}>
//         <Col span={12}>
//           <img src={mitra2}/>
//           <ButtonContainer>
//             <Button>Unggah Foto Klinik</Button>
//           </ButtonContainer>
//         </Col>
//         <Col span={12}>
//         <div className='mitra' style={{height:'100vh'}}>
//         <AppForm
//           title=''
//           input1='Nama Klinik'
//           input2='Kontak'
//           klik='Masuk'
//           desc=''
//           span=''
//           path=''
//           link=''
//         >
//           <Form.Item
//               name="username"
//               rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
//             >Username
//               <Input/>
//           </Form.Item>
//                   <Form.Item
//                     name="alamat"
//                         rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
//                     >Alamat
//                         <Input/>
//                     </Form.Item>
//           </AppForm>
//         </div>
//         </Col>
//       </Row>
//       </
//   )
// }
