import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card'
import Header from './Header';

function App() {
  const [users, setUsers] = useState([]);  // Cambiar a una lista de usuarios
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');  // Reemplaza con tu API
        const data = await response.json();
        setUsers(data.slice(0, 10));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Header />
      <h1 id="title">Welcome to <b>ProfRank</b></h1>
      <div className="card-list">
        {users.map((user, index) => (
          <Card key={index} user={user} />  // Renderiza un componente Card por cada usuario
        ))}
      </div>
    </div>
  );
}

export default App;
