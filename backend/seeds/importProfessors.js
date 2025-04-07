const Professor = require('../models/Professor'); // ajusta la ruta según tu estructura

const createSampleProfessors = async () => {
    const sampleProfessors = [
        {
          "name": "Ana Martínez",
          "email": "ana.martinez@example.com",
          "password": "prof1234",
          "speciality": "Mathematics",
          "punctuation": 85,
          "lvl": "University",
          "profileImg": "https://example.com/img/ana.jpg",
          "treat": 20,
          "city": "Madrid",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Luis Gómez",
          "email": "luis.gomez@example.com",
          "password": "prof1234",
          "speciality": "Physics",
          "punctuation": 98,
          "lvl": "Primary",
          "profileImg": "https://example.com/img/luis.jpg",
          "treat": 10,
          "city": "Barcelona",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Clara Ruiz",
          "email": "clara.ruiz@example.com",
          "password": "prof1234",
          "speciality": "Chemistry",
          "punctuation": 73,
          "lvl": "Secondary",
          "profileImg": "https://example.com/img/clara.jpg",
          "treat": 15,
          "city": "Valencia",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Pedro Sánchez",
          "email": "pedro.sanchez@example.com",
          "password": "prof1234",
          "speciality": "History",
          "punctuation": 100,
          "lvl": "University",
          "profileImg": "https://example.com/img/pedro.jpg",
          "treat": 25,
          "city": "Sevilla",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Lucía Fernández",
          "email": "lucia.fernandez@example.com",
          "password": "prof1234",
          "speciality": "Literature",
          "punctuation": 89,
          "lvl": "University",
          "profileImg": "https://example.com/img/lucia.jpg",
          "treat": 30,
          "city": "Bilbao",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Carlos Pérez",
          "email": "carlos.perez@example.com",
          "password": "prof1234",
          "speciality": "Biology",
          "punctuation": 96,
          "lvl": "Doctoral",
          "profileImg": "https://example.com/img/carlos.jpg",
          "treat": 12,
          "city": "Granada",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "María López",
          "email": "maria.lopez@example.com",
          "password": "prof1234",
          "speciality": "Philosophy",
          "punctuation": 94,
          "lvl": "Primary",
          "profileImg": "https://example.com/img/maria.jpg",
          "treat": 18,
          "city": "Zaragoza",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Javier Torres",
          "email": "javier.torres@example.com",
          "password": "prof1234",
          "speciality": "Economics",
          "punctuation": 87,
          "lvl": "Secondary",
          "profileImg": "https://example.com/img/javier.jpg",
          "treat": 22,
          "city": "Salamanca",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Sofía Romero",
          "email": "sofia.romero@example.com",
          "password": "prof1234",
          "speciality": "Art",
          "punctuation": 91,
          "lvl": "Doctoral",
          "profileImg": "https://example.com/img/sofia.jpg",
          "treat": 14,
          "city": "Alicante",
          "country": "Spain",
          "courses": []
        },
        {
          "name": "Daniel Herrera",
          "email": "daniel.herrera@example.com",
          "password": "prof1234",
          "speciality": "Computer Science",
          "punctuation": 88,
          "lvl": "University",
          "profileImg": "https://example.com/img/daniel.jpg",
          "treat": 35,
          "city": "Málaga",
          "country": "Spain",
          "courses": []
        }
      ];

  try {
    await Professor.insertMany(sampleProfessors);
    console.log('Profesores insertados correctamente');
  } catch (error) {
    console.error('Error insertando profesores:', error);
  }
};

module.exports = createSampleProfessors;
