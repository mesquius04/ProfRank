import axios from 'axios';

// Crear una instancia de Axios con configuración predeterminada
const instance = axios.create({
  baseURL: 'http://localhost:5000', // URL base de tu servidor Express
});

// Interceptor para agregar el token a las solicitudes
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtener el token del localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Agregar token a los headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
