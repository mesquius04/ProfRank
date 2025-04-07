const express = require('express');
const Professor = require('../models/Professor');
const router = express.Router();

// Ruta para obtener los primeros 10 usuarios
router.get('/randomprof', async (req, res) => {
    try {
        const users = await Professor.aggregate([{ $sample: { size: 10 } }]); // Obtener 10 usuarios aleatorios
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});

router.get('/topprof', async (req, res) => {
    try {
        const { criteria, level, region } = req.query;

        // Construir el objeto de filtro
        let filter = {};

        // Filtrar por 'criteria' si no es 'Overall'
        if (criteria && criteria !== 'Overall') {
            filter.criteria = criteria;
        }

        // Filtrar por 'level' (nivel) si está definido
        if (level) {
            filter.lvl = level;  // Ahora se comparará directamente con la cadena
        }

        // Filtrar por 'region' si no es 'World'
        if (region && region !== 'World') {
            filter.region = region;
        }

        // Buscar y ordenar los usuarios por 'puntuation' en orden descendente
        const profs = await Professor.find(filter).sort({ puntuation: -1 });

        // Enviar la lista de usuarios como respuesta
        res.json(profs);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los profesores' });
    }
});

module.exports = router;