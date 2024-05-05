import React, { useState } from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import Link from '../components/Link';
import '../styles/authentif.css';
import {login} from '../service/AuthService';
import { useNavigate  } from 'react-router-dom';


const LoginContainer = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const handleRegisterLinkClick = (e) => {
    e.preventDefault();
    navigate('/register');
  }

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (/* form is valid */) {
      try {
        await login(user);
        navigate('/')
        // Handle successful registration here
      } catch (error) {
        console.error(error.response.data);
        // Handle error here
      }
  //  }
  };

  return (
    <div className='user-auth' style={{ backgroundColor: 'rgba(104, 27, 27, 0.6)' , borderRadius: '20px'}}>
    
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputBox
        type="email"
        placeholder="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <InputBox
        type="password"
        placeholder="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <div className="register-link">
        <p>
          Don't have an account?{' '}
          <Link onClick={handleRegisterLinkClick}>Register</Link>
        </p>
      </div>
   </Form>
   </div>
  );
};

export default LoginContainer;