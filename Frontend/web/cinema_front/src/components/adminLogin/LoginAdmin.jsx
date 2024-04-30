import React from 'react';
import './loginadmin.css'; 
import axios from 'axios';

const LoginAdmin = () => {
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
      const response = await axios.post('http://localhost:8080/api/admin/login', adminData);
      console.log(response.data);
      // Handle successful admin addition here
    } catch (error) {
      console.error(error.response.data);
      // Handle error here
    }
  };

  return (
    <div className='wrapper'>
      <div className='form-box admin'>
        <form onSubmit={handleSubmit}>
          <h1>Login </h1>
          <div className='input-box'>
            <input type='email' placeholder='Email' name='email' onChange={handleChange} value={adminData.email} required />
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password' name='password' onChange={handleChange} value={adminData.password} required />
          </div>
          {/* Add more input fields for additional admin data */}
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
