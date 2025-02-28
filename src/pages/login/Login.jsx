import React from 'react';
import LoginComponent from '../../components/login/Login';

const Login = () => (
  <div className='h-[100vh] border w-full flex items-center justify-center'>
  <div className='flex w-[40vw] border h-[70vh] items-center justify-center bg-sky-50'>
  <LoginComponent/>
  </div>
  </div>
);
export default Login;