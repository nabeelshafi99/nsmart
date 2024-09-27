import "./signup.scss"
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {Link, useNavigate } from "react-router-dom";
import authImg from "../../../assets/authImg.jpg";
import { createUserWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../../utils/firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log("Account Successfully Create")
      await updateProfile(auth.currentUser, {
        displayName: values.fullname
      })
      signOut(auth)
      navigate("/signin");
    } catch (error) {
      console.log(error, "error");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return(
  <div className="auth-main p-5 ">
  <div className="authBanner">
    <h1>Signup</h1>
    <h2>Lorem, ipsum dolor.</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil sapiente reiciendis esse dicta unde accusamus velit labore corporis. Eaque adipisci recusandae est ea, similique odio itaque ullam, quo veritatis soluta ratione inventore sequi error voluptas ab. A ex ratione autem modi nesciunt! Impedit quia ipsam laudantium qui incidunt quae quidem.</p>
  </div>
<div className="auth-content my-10 p-5 shadow">
<Form
  name="basic"
  labelCol={{
    span: 24,
  }}
  wrapperCol={{
    span: 24,
  }}
  style={{
    maxWidth: 600,
  }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
    <h1 className="mb-3">Signup</h1>
    
     <Form.Item
    label="Fullname"
    name="fullname"
    rules={[
      {
        required: true,
        message: 'Please input your fullname!',
      },
    ]}
  >
    <Input />
  </Form.Item>
  
  
  <Form.Item
    label="Email"
    name="email"
    rules={[
      {
        required: true,
        message: 'Please input your email!',
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    name="remember"
    valuePropName=""
    wrapperCol={{
      offset: 0,
      span: 16,
    }}
  >
    <Checkbox>Trems & Condition</Checkbox>
  </Form.Item>
  
  
  <Form.Item
    wrapperCol={{
      offset: 0,
      span: 24,
    }}
  >
    <Button className="w-full md:text-center" type="primary" htmlType="submit">
      Signup
    </Button>
  </Form.Item>
  
  <Form.Item
    wrapperCol={{
      offset: 0,
      span: 24,
    }}
  >
    <Link to="/signin">
    <Button className="w-full md:text-center" type="" htmlType="submit">
      Already account?
    </Button>
    </Link>
  </Form.Item>
  

 
</Form>
</div>
</div>
  )
};
export default SignUp;