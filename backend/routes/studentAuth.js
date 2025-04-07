const express = require('express');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');
const router = express.Router();

// Registro de estudiante
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const student = new Student({ name, email, password });
        await student.save();
        res.status(201).json({ message: 'Estudiante registrado con éxito' });
    } catch (err) {
        console.error('Error al registrar el estudiante:', err); // Imprime el error en la consola
        res.status(500).json({ message: 'Error al registrar el estudiante', error: err.message });  
    }
});

// Inicio de sesión de estudiante
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const student = await Student.findOne({ email });
        if (!student || !(await student.comparePassword(password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: student._id, role: 'student' }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

module.exports = router;