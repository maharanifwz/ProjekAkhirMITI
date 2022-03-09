import React from 'react'
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { ButtonContainer } from '../components/home/Hero';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../config/Auth';
import { tweetAPI } from '../config/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const ErrorMessage = styled.p`
	color: red;
	font-size: 1.5rem;
	margin-bottom: 1rem;
	padding: 0 2rem;
	text-align: center;
`;

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
    const {setAndGetTokens} = useAuth();
    const [forms, setForms] = useState({ username: '', password: '' });
    const [isError, setIsError] = useState({ status: false, message: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(forms)

    try {
        //tweetAPI bisa dilihat di file api.js
        const loginResponse = await tweetAPI.post('/user/login', {
            ...forms,
        });

        //jika loginnya sukses
        if (loginResponse.data.success) {
            //ambil tokennya
            /*data yg pertama itu data dari loginResponsenya, 
            data yang kedua data hasi keluaran dari responnya 
            coba cek link yg ada di api.js*/
            const token = loginResponse.data.data.token;
            //ambil id user yang udh sempet dia register
            const currUser = await tweetAPI.get('/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            //ambil id usernya
            const id = currUser.data.data.id;

            //parameternya diisi sesuai dgn parameter yg ada di app.js
            //set ke local storage
            setAndGetTokens(token, id);

            //redirect ke homepage
            navigate('/', { replace: true });
        }
    }
        catch(error) {
            setIsError((isError) => ({
                status: true,
                message: "Error while try to log in",
            }));
        }
    };

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
                        <Input 
                        placeholder="ex: maharanifwz@gmail.com" 
                        onChange={(e) => {
                            setForms(() => ({
                                ...forms,
                                username: e.target.value
                            }))
                        }}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mohon inputkan password Anda!' }]}
                    >Password
                        <Input.Password
                        onChange={(e) => {
                            setForms(() => ({
                                ...forms,
                                password: e.target.value
                            }))
                        }}/>
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
            {isError.status && (
                        <ErrorMessage>{isError.message}</ErrorMessage>
                    )}
        </div>
    </div>
  )
}
