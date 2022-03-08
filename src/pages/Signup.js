import React from 'react'
import { Form, Input, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ButtonContainer } from '../components/home/Hero';
import { HashLink as Link } from 'react-router-hash-link';

const FormSignIn = styled.div`
    .ant-input-affix-wrapper" {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px;
    }
    .ant-col ant-form-item-control {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px;
        background: orange;
    
    }
    .ant-form-item-control-input {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px; 
        background:#829C5F;
    }
`;

export const Signup = () => {
  return (
    <div className='block signin'>
       <div className='container-fluid'> 
            <FormSignIn>   
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    style={{width: 325}}
                    >
                    <Form.Item><h2>Daftar</h2></Form.Item>
                    <Form.Item
                        name="nama"
                        rules={[{ required: true, message: 'Mohon inputkan nama Anda!' }]}
                    >Nama
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="kontak"
                        rules={[{ required: true, message: 'Mohon inputkan kontak Anda!' }]}
                    >Kontak
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Mohon inputkan username Anda!' }]}
                    >Username
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="alamat"
                        rules={[{ required: true, message: 'Mohon inputkan alamat Anda!' }]}
                    >Alamat
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mohon inputkan password Anda' }]}
                    >Password
                        <Input
                        prefix={<EyeOutlined style={{marginLeft:285, color:'#AFAFAF'}} className="site-form-item-icon" />}
                        type="password"
                        placeholder=""
                        />
                    </Form.Item>

                    <Form.Item>
                        <ButtonContainer>
                            <Button style={{width:300}} type="primary" htmlType="submit" className="login-form-button">
                            Daftar
                            </Button>
                        </ButtonContainer>
                    </Form.Item>

                    <Form.Item>
                        <center>Sudah memiliki akun? <a><Link to='/signin' className='identity'>Masuk disini.</Link></a></center>
                    </Form.Item>
                </Form>
            </FormSignIn>
        
        </div>
    </div>
  )
}
