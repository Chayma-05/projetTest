import axios from 'axios';

const apiUrl = 'http://localhost:8080/api';

const handleApiCall = async (endpoint, user) => {
  try {
    const response = await axios.post(`${apiUrl}/${endpoint}`, user);
    console.log(response.data);
    // Handle successful API call here
  } catch (error) {
    console.error(error.response.data);
    // Handle error here
  }
};

const register = (user) => {
  handleApiCall('utilisateur/register', user);
};

const login = (user) => {
  handleApiCall('utilisateur/login', user);
};

const adminLogin = (admin) => {
  handleApiCall('admin/login', admin);
};

export { register, login ,adminLogin};

