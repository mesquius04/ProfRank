const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fame: Number,
    profileImg: String, 
    city: String,
    country: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

studentSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Comparar contraseñas
studentSchema.methods.comparePassword = function(password) {
    return bcrypt.compare(password, this.password);
};

const Student = mongoose.model('Student', studentSchema, 'Students');

module.exports = Student;
