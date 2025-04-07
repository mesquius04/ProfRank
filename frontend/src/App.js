import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './Header';
import Profile from './Profile';
import Explore from './Explore';
import Ranking from './Ranking';
import Settings from './Settings';
import MySpace from './MySpace';
import StudentRegister from './StudentRegister';
import Login from './Login';
import InitFile from './InitFile';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { UserProvider, UserContext } from './context/UserContext';

// Componente para proteger rutas
const PrivateRoute = ({ element }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Mientras esté cargando, muestra un indicador de carga o nada
  if (loading) {
    return <div>Loading...</div>;  // O algún otro componente de carga
  }

  // Cuando termine la carga, verifica si el usuario está autenticado
  return isAuthenticated ? element : <Navigate to="/main" />;
};

const AppContent = () => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  console.log('Current Path:', location.pathname);
  console.log('Is Authenticated:', isAuthenticated);

  const showHeaderM = location.pathname !== '/main';
  const showHeaderL1 = location.pathname !== '/studentlogin';
  const showHeaderL2 = location.pathname !== '/professorregister';
  const showHeaderR1 = location.pathname !== '/studentregister';
  const showHeaderR2 = location.pathname !== '/professorlogin';

  return (
    <>
      {/* Renderiza el Header solo si no estás en la ruta "/main" */}
      {showHeaderM && showHeaderL1 && showHeaderR1 && showHeaderR2 && showHeaderL2 && <Header />}
      <Routes>
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/explore" element={<PrivateRoute element={<Explore />} />} />
        <Route path="/myspace" element={<PrivateRoute element={<MySpace />} />} />
        <Route path="/ranking" element={<PrivateRoute element={<Ranking />} />} />
        <Route path="/settings" element={<PrivateRoute element={<Settings />} />} />
        <Route path="/professorregister" element={<Login />} />
        <Route path="/studentlogin" element={<Login />} />
        <Route path="/studentregister" element={<StudentRegister />} />
        <Route path="/professorlogin" element={<Login />} />
        <Route path="/main" element={<InitFile />} />
        <Route path="/" element={<PrivateRoute element={<MySpace />} />} />  {/* Ruta por defecto protegida */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <AppContent />
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
