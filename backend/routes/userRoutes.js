const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Ruta para obtener los primeros 10 usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await User.aggregate([{ $sample: { size: 10 } }]); // Obtener 10 usuarios aleatorios
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

module.exports = router;