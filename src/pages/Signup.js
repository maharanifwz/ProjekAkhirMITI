import React from 'react'
import { Form, Input, Button } from 'antd';
import { ButtonContainer } from '../components/home/Hero';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../config/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export const Signup = () => {
    const {  setAndGetTokens } = useAuth();
	const [forms, setForms] = useState({
        Nama: '',
		Kontak: '',
		Username: '',
		Alamat: '',
		Password: '',
	});

	const [isError, setIsError] = useState({ status: false, message: '' });

	let navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		// register usernya
		try {
			const registerResponse = await Axios.post('/user/register', {
				...forms,
			});

			// jika sukses
			if (registerResponse.data.success) {
				delete forms.name;
				delete forms.handle;
				// post data buat login
				try {
					const loginResponse = await Axios.post('/user/login', {
						...forms,
					});
					//jika sukses
					if (loginResponse.data.success) {
						const token = loginResponse.data.data.token;
						setAndGetTokens(token);
						navigate('/', { replace: true });
						console.log(loginResponse, token, 'tokenton');
					}
				} catch (error) {
					setIsError((isError) => ({
						status: true,
						message: 'Error while try to logged in',
					}));
					console.log(error, 'in login');
				}
			}
		} catch (error) {
			setIsError((isError) => ({
				status: true,
				message: 'Error while try to sign up',
			}));
			console.log(error);
		}
	};
  return (
    <div className='block signin'>
       <div className='container-fluid'> 
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
                        <Input
                        onChange={(e) =>
							setForms((forms) => ({
								...forms,
								Nama: e.target.value,
							}))
						}/>
                    </Form.Item>
                    <Form.Item
                        name="kontak"
                        rules={[{ required: true, message: 'Mohon inputkan kontak Anda!' }]}
                    >Kontak
                        <Input
                        onChange={(e) =>
							setForms((forms) => ({
								...forms,
								Kontak: e.target.value,
							}))
						}/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Mohon inputkan username Anda!' }]}
                    >Username
                        <Input
                        onChange={(e) =>
							setForms((forms) => ({
								...forms,
								Username: e.target.value,
							}))
						}/>
                    </Form.Item>
                    <Form.Item
                        name="alamat"
                        rules={[{ required: true, message: 'Mohon inputkan alamat Anda!' }]}
                    >Alamat
                        <Input
                        onChange={(e) =>
							setForms((forms) => ({
								...forms,
								Alamat: e.target.value,
							}))
						}/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Mohon inputkan password Anda!' }]}
                    >Password
                        <Input.Password
                        onChange={(e) =>
							setForms((forms) => ({
								...forms,
								Password: e.target.value,
							}))
						}/>
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
        </div>
    </div>
  )
}