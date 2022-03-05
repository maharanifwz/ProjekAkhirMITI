import React from 'react'
import { Row, Col } from 'antd'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { ButtonContainer } from '../components/home/Hero';

const FormSignIn = styled.div`
    .ant-input-affix-wrapper" {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px;
    }
    .ant-col ant-form-item-control {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px;
    
    }
    .ant-form-item-control-input-content {
        border-color: #829C5F;
        border-radius: 10px 0px 0px 10px; 
    }
`;

export const Signin = () => {
  return (
    <div className='block signin'>
        <div className='container-fluid'>
            <div className='content'>
             <FormSignIn>   
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    style={{width: 300}}
                    >
                    <Form.Item>
                        <div className='titleHolde'>
                            <h2>Sign in</h2>
                        </div>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >Email/Username
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ex: maharanifwz@gmail.com" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >Password
                        <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder=""
                        />
                    </Form.Item>
                    <Form.Item>
                        <a className="login-form-forgot" href="">
                        Forgot password?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <ButtonContainer style={{width: 110}}>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            Sign in
                            </Button>
                        </ButtonContainer>
                    </Form.Item>

                    <Form.Item>
                        Not registered yet? <a href="account">Create account.</a>
                    </Form.Item>
                </Form>
            </FormSignIn>
            </div>
        </div>
    </div>
  )
}
