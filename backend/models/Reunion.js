const mongoose = require('mongoose');

const reunionSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    name: { type: String, required: true },
    description: String,
    link: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' } // Referencia al curso
});

const Reunion = mongoose.model('Reunion', reunionSchema, 'Reunions');

module.exports = Reunion;
