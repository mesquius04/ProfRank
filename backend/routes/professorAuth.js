const express = require('express');
const jwt = require('jsonwebtoken');
const Professor = require('../models/Professor');
const router = express.Router();

// Registro de profesor
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, speciality } = req.body;
        const professor = new Professor({ name, email, password, speciality });
        await professor.save();
        res.status(201).json({ message: 'Profesor registrado con éxito' });
    } catch (err) {
        res.status(500).json({ message: 'Error al registrar el profesor' });
    }
});

// Inicio de sesión de profesor
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const professor = await Professor.findOne({ email });
        if (!professor || !(await professor.comparePassword(password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: professor._id, role: 'professor' }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

module.exports = router;
