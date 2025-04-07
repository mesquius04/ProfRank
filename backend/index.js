const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const createSampleProfessors = require('./seeds/importProfessors');
const profRoutes = require('./routes/profRoutes');
const professorAuth = require('./routes/professorAuth');
const studentAuth = require('./routes/studentAuth');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB');
        await createSampleProfessors();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Rutas básicas
app.use('/api/students', studentAuth);
app.use('/api/professors', professorAuth);
app.use('/api', profRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});