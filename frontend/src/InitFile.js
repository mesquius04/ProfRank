import './InitFile.css';
import React, { useState } from 'react'; // Importamos useState para manejar el estado
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para redirección
import hiveImage from './assets/hive.png';

function InitFile() {
  const [isStudent, setIsStudent] = useState(true); // Estado para cambiar entre estudiante y profesor
  const navigate = useNavigate(); // Hook para navegación

  // Funciones para manejar la navegación
  const handleLogin = () => {
    if (isStudent) {
      navigate('/studentlogin');
    } else {
      navigate('/professorlogin');
    }
  };

  const handleRegister = () => {
    if (isStudent) {
      navigate('/studentregister');
    } else {
      navigate('/professorregister');
    }
  };

  return (
    <div className="App">
      <div className="Cont">
        <h1 id="title">Welcome to MentorHive</h1>

        {/* Selector para Students o Professors */}
        <div className="user-type-selector">
          <button
            className={`toggle-btn ${isStudent ? 'active' : ''}`}
            onClick={() => setIsStudent(true)}
          >
            I'm a Student
          </button>
          <button
            className={`toggle-btn ${!isStudent ? 'active' : ''}`}
            onClick={() => setIsStudent(false)}
          >
            I'm a Professor
          </button>
        </div>

        {/* Mostrar el formulario correspondiente */}
        <div className="login-container">
          {isStudent ? (
            <div className="student-container">
              <h2>Students</h2>
              <button className="login-btn" onClick={handleLogin}>LOG IN</button>
              <button className="register-btn" onClick={handleRegister}>REGISTER</button>
            </div>
          ) : (
            <div className="teacher-container">
              <h2>Professors</h2>
              <button className="login-btn" onClick={handleLogin}>LOG IN</button>
              <button className="register-btn" onClick={handleRegister}>REGISTER</button>
            </div>
          )}
        </div>
        <img src={hiveImage} alt="Hive" className="hive-image" />
      </div>
    </div>
  );
}

export default InitFile;
  