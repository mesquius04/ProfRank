import './Ranking.css';
import React, { useState } from 'react';
import Card from './Card'

function Ranking() {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true);
  
  // Estados para los filtros
  const [criteria, setCriteria] = useState('Overall');
  const [level, setLevel] = useState('Primary');
  const [region, setRegion] = useState('World');

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/topusers?criteria=${criteria}&lvl=${level}&region=${region}`);
      const data = await response.json();
      setUsers(data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };
  if (loading) {
    fetchUsers();
  }

  return (
    <div className="App">
      <h1 id="title">RANKING</h1>
      <div id="filters">
        <label htmlFor="criteria" className="intern">Criteria: </label>
        <select id="criteria" name="criteria" value={criteria} onChange={(e) => setCriteria(e.target.value)}>
            <option value="Overall">Overall</option>
            <option value="Puntuation">Puntuation</option>
            <option value="Experience">Experience</option>
        </select>

        <label htmlFor="level" className="intern">Level: </label>
        <select id="level" name="level" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="Primary">Primary</option>
            <option value="Secondary">Secondary</option>
            <option value="Bachelor">Bachelor</option>
            <option value="University">University</option>
            <option value="Doctoral">Doctoral</option>
        </select>

        <label htmlFor="region" className="intern">Region: </label>
        <select id="region" name="region" value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="World">World</option>
            <option value="My Language">My Language</option>
            <option value="My Country">My Country</option>
            <option value="My City">My City</option>
        </select>

        <button className="intern" onClick={() => fetchUsers()}>
            Filter
        </button>

      </div>
      <div className="card-list">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Ranking;