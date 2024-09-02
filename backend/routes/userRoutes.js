const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Ruta para obtener los primeros 10 usuarios
router.get('/randomusers', async (req, res) => {
    try {
        const users = await User.aggregate([{ $sample: { size: 10 } }]); // Obtener 10 usuarios aleatorios
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

router.get('/topusers', async (req, res) => {
    try {
        const { criteria, lvl, region } = req.query;

        // Construir el objeto de filtro
        let filter = {};

        // Filtrar por 'criteria' si no es 'Overall'
        if (criteria && criteria !== 'Overall') {
            filter.criteria = criteria;
        }

        // Filtrar por 'lvl' (nivel) si está definido
        if (lvl) {
            filter.lvl = lvl;  // Ahora se comparará directamente con la cadena
        }

        // Filtrar por 'region' si no es 'World'
        if (region && region !== 'World') {
            filter.region = region;
        }

        // Buscar y ordenar los usuarios por 'puntuation' en orden descendente
        const users = await User.find(filter).sort({ puntuation: -1 });

        // Enviar la lista de usuarios como respuesta
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

module.exports = router;