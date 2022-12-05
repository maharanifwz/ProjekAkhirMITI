import React, { useContext } from "react";
import { Form, Input, Button } from "antd";
import styled from "styled-components";
import { ButtonContainer } from "../components/home/Hero";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from "../config/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import { accountContext } from "../App";

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
  const { setAndGetTokens } = useAuth();
  const [isError, setIsError] = useState({ status: false, message: "" });
  const [Loading, setLoading] = useState(false);
  const {account,setAccount} = useContext(accountContext)
  const navigate = useNavigate();


  const handleLogin2 = () => {
    console.log('masok')
    setAccount(true);
    navigate('/')
    }

  return (
    <div className="block signin height">
      <div className="container-fluid">
        <FormSignIn>
          <Form
            onFinish={handleLogin2}
            name="normal_login"
            className="login-form"
            style={{ width: 325 }}
          >
            <Form.Item>
              <h2>Masuk</h2>
            </Form.Item>
            <p>Username</p>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Mohon inputkan username Anda!" },
              ]}
            >
              <Input placeholder="ex: maharanifwz@gmail.com" />
            </Form.Item>
            <p>Password</p>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Mohon inputkan password Anda!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <a className="login-form-forgot" href="">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <ButtonContainer>
                <Button
                  style={{ width: 300 }}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  loading={Loading}
                >
                  Masuk
                </Button>
              </ButtonContainer>
            </Form.Item>

            <Form.Item>
              <center>
                Belum memiliki akun?{" "}
                <a>
                  <Link to="/signup" className="identity">
                    Daftar disini.
                  </Link>
                </a>
              </center>
            </Form.Item>
          </Form>
        </FormSignIn>
        {isError.status && <ErrorMessage>{isError.message}</ErrorMessage>}
      </div>
    </div>
  );
};