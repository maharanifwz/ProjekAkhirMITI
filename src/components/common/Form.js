import React from 'react'
import { Form, Input, Button } from 'antd';
import { ButtonContainer } from '../home/Hero';
import { HashLink as Link } from 'react-router-hash-link';

export const AppForm = props => {
  return (
    <div className='block'>
       <div className='container-fluid'>    
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    style={{width: 325}}
                    >
                    <h2>{props.title}</h2>
                    <Form.Item
                        name="nama"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >{props.input1}
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="kontak"
                        rules={[{ required: true, message: 'Mohon inputkan terlebih dahulu!' }]}
                    >{props.input2}
                        <Input/>
                    </Form.Item>
                    {props.children}

                    <Form.Item>
                        <ButtonContainer>
                            <Button style={{width:300}} type="primary" htmlType="submit" className="login-form-button">
                            <Link to={props.link}>
                                {props.klik}
                            </Link>
                            </Button>
                        </ButtonContainer>
                    </Form.Item>

                    <Form.Item>
                        <center>{props.desc} <a><Link to={props.path} className='identity'>{props.span}</Link></a></center>
                    </Form.Item>
                </Form>
        </div>
    </div>
  )
}
