import React from "react";
import { Form, Input, Button } from "antd";
import { ButtonContainer } from "../components/home/Hero";
import { HashLink as Link } from "react-router-hash-link";
import { useAuth } from "../config/Auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

export const Signup = () => {
  const { setAndGetTokens } = useAuth();
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, message: "" });

  let navigate = useNavigate();

  const handleSignup = async (values) => {
    setLoading(true);
    // register usernya
    try {
      const registerResponse = await Axios.post(
        "http://intern-7.eba-27tmcxsh.ap-southeast-1.elasticbeanstalk.com/user/register",
        values
      );

      // jika sukses, simpan token dan ID dari response agar dianggap login 
      console.log(registerResponse);
      if (registerResponse.status === 201) {
        const token = registerResponse.data.data.Token;
        const id = registerResponse.data.data.ID;
        setAndGetTokens(token, id);
        navigate("/");
      }
    } catch (error) {
      setIsError((isError) => ({
        status: true,
        message: "Error while try to sign up",
      }));
      console.log(error);
    }

    setLoading(false);
  };
  return (
    <div className="block signin">
      <div className="container-fluid">
        <Form
          onFinish={handleSignup}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          style={{ width: 325 }}
        >
          <Form.Item>
            <h2>Daftar</h2>
          </Form.Item>

		  <p>Nama</p>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Mohon inputkan nama Anda!" }]}
          >
            <Input />
          </Form.Item>

		  <p>Kontak</p>
          <Form.Item
            name="contact"
            rules={[{ required: true, message: "Mohon inputkan kontak Anda!" }]}
          >
            <Input />
          </Form.Item>
		  <p>Username</p>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "Mohon inputkan username Anda!" },
            ]}
          >
            <Input />
          </Form.Item>
		  
		  <p>Alamat</p>
          <Form.Item
            name="address"
            rules={[{ required: true, message: "Mohon inputkan alamat Anda!" }]}
          >
            <Input />
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
            <ButtonContainer>
              <Button
                style={{ width: 300 }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={loading}
              >
                Daftar
              </Button>
            </ButtonContainer>
          </Form.Item>

          <Form.Item>
            <center>
              Sudah memiliki akun?{" "}
              <a>
                <Link to="/signin" className="identity">
                  Masuk disini.
                </Link>
              </a>
            </center>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};