import React from "react";
import "./RegisterUser.css";
import axios from "axios";

const RegisterUser = () => {
  const [user, setFormData] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/utilisateur/register",
        user
      );
      console.log(response.data);
      // Handle successful registration here
    } catch (error) {
      console.error(error.response.data);
      // Handle error here
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/utilisateur/login",
        user
      );
      console.log(response.data);
      // Handle successful login here
    } catch (error) {
      console.error(error.response.data);
      // Handle error here
    }
  };

  const [showRegister, setShowRegister] = React.useState(true); // Afficher le formulaire d'inscription par défaut

  const registerLink = () => {
    setShowRegister(true); // Afficher le formulaire d'inscription
  };

  const loginLink = () => {
    setShowRegister(false); // Afficher le formulaire de connexion
  };

  return (
    <div className="wrapper">
      {showRegister ? (
        <div className="form-box register">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="nom"
                name="nom"
                onChange={handleChange}
                value={user.nom}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="prenom"
                name="prenom"
                onChange={handleChange}
                value={user.prenom}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <div className="input-box">
              <input type="password" placeholder="confirm password" />
            </div>
            <button type="submit">Register</button>
            <div className="login-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-box login">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default RegisterUser;
