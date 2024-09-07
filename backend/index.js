const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const profRoutes = require('./routes/profRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });

// Rutas básicas
app.use('/api', profRoutes);

app.get('/', (req, res) => {
    res.send('Hello WWWorld');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});