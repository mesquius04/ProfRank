import React, { useState } from 'react';
import axios from '../utils/axios';

function ProfessorRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [speciality, setSpeciality] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/professors/register', { name, email, password, speciality });
            alert('Profesor registrado con éxito');
        } catch (err) {
            console.error(err);
            alert('Error al registrar el profesor');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Speciality" value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    );
}

export default ProfessorRegister;
