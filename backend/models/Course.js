const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, unique: true },
    cost: Number,
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    reunions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reunion' }]
});

const Course = mongoose.model('Course', courseSchema, 'Courses');

module.exports = Course;
