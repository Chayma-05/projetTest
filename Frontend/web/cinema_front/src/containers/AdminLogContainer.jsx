import React from 'react';
import Form from '../components/Form';
import InputBox from '../components/InputBox';
import '../styles/authentif.css';
import { adminLogin } from '../service/AuthService';

const AdminLogContainer = () => {
  const [adminData, setAdminData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setAdminData({
      ...adminData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminLogin(adminData);
      // Handle successful admin addition here
    } catch (error) {
      console.error(error);
      // Handle error here
    }
  };

  
  return (
    <div className='admin-login' style={{ backgroundColor: 'rgba(193, 110, 77, 0.6)' , borderRadius: '20px'}}>
    <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputBox
        type="email"
        placeholder="email"
        name="email"
        value={adminData.email}
        onChange={handleChange}
      />
      <InputBox
        type="password"
        placeholder="password"
        name="password"
        value={adminData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>   
   </Form>
   </div>

  );
};

export default AdminLogContainer;


