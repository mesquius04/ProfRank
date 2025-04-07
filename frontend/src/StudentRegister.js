import './StudentRegister.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hiveImage from './assets/hive.png';
import axios from './utils/axios'; // Importar la instancia de Axios

function StudentRegister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
        console.log("LALALA");
      const response = await axios.post('/api/students/register', { name, email, password }); // Ruta para registrar
      console.log('Registro exitoso:', response.data);
      // Redirigir al inicio de sesión o a otra página si el registro fue exitoso
      navigate('/login'); // Cambia la ruta según corresponda
    } catch (error) {
      console.error('Error en el registro:', error.response ? error.response.data : error.message);
      // Mostrar un mensaje de error al usuario
    }
  };  

  return (
    <div className="App">
      <h1 id="title">Student Register</h1>

      <div className="register-container">
        <div id = "regcont" className="register-form student-form">
          <form onSubmit={handleRegister}>
            <div className="input-group">
              <label class="pass" htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label class="pass" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label class="pass" htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button id="regbtn" type="submit" className="register-btn">REGISTER</button>
          </form>
        </div>
      </div>
      <img src={hiveImage} alt="Hive" className="hive-image" />
    </div>
  );
}

export default StudentRegister;
