const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const professorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    speciality: String,
    puntuation: Number,
    lvl: String,
    profileImg: String, 
    treat: Number,
    city: String,
    country: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }] // Referencia a cursos que enseña
});

professorSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Comparar contraseñas
professorSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

const Professor = mongoose.model('Professor', professorSchema, 'Professors');

module.exports = Professor;
