import React from 'react'
import { Form, Input, Button } from 'antd';
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

export const Signin = () => {
  return (
    <div className='block signin height'>
       <div className='container-fluid'> 
            <FormSignIn>   
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    style={{width: 325}}
                    >
                    <Form.Item><h2>Masuk</h2></Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Mohon inputkan username Anda!' }]}
                    >Username
                        <Input placeholder="ex: maharanifwz@gmail.com" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mohon inputkan password Anda!' }]}
                    >Password
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="">
                        Forgot password?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <ButtonContainer>
                            <Button style={{width:300}} type="primary" htmlType="submit" className="login-form-button">
                            Masuk
                            </Button>
                        </ButtonContainer>
                    </Form.Item>

                    <Form.Item>
                        <center>Belum memiliki akun? <a><Link to='/signup' className='identity'>Daftar disini.</Link></a></center>
                    </Form.Item>
                </Form>
            </FormSignIn>
        
        </div>
    </div>
  )
}
