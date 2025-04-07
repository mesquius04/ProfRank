import './Login.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import hiveImage from './assets/hive.png';
import axios from './utils/axios'; // Importar la instancia de Axios
import { AuthContext } from './context/AuthContext'; // Importar el contexto de autenticación

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext); // Obtener setIsAuthenticated del contexto

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/students/login', { email, password }); // Asegúrate de usar la ruta correcta
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Actualiza el estado de autenticación
      setIsAuthenticated(true);
      
      navigate('/myspace');
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      // Mostrar un mensaje de error al usuario
    }
  };  

  return (
    <div className="App">
      <div className="Cont">

      <h1 id="title">Student Login</h1>

      <div className="login-container">
        <div className="login-form student-form">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">LOG IN</button>
          </form>
        </div>
      </div>
      <img src={hiveImage} alt="Hive" className="hive-image" />
      </div>
    </div>
  );
}

export default Login;
