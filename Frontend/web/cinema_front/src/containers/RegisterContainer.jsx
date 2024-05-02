import React, { useState } from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import Link from '../components/Link';
import '../styles/authentif.css';
import {register} from '../service/AuthService';
import { useNavigate  } from 'react-router-dom';


const RegisterContainer = () => {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate ();
  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //if (/* form is valid */) {
      try {
        await register(user);
        // Handle successful registration here
      } catch (error) {
        console.error(error.response.data);
        // Handle error here
      }
  //  }
  };

  return (
    <div className='user-auth' style={{ backgroundColor: 'rgba(104, 27, 27, 0.6)' , borderRadius: '20px', padding: '30px'}}>
    <Form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <InputBox
        type="text"
        placeholder="nom"
        name="nom"
        value={user.nom}
        onChange={handleChange}
        required
      />
      <InputBox
        type="text"
        placeholder="prenom"
        name="prenom"
        value={user.prenom}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Register</button>
      <div className="login-link">
        <p>
          Already have an account?{' '}
          <Link onClick={handleLoginLinkClick}>Login</Link>
        </p>
      </div>
    </Form>
    </div>
  );
};

export default RegisterContainer;