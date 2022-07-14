const { Schema, model } = require('mongoose');

const adviserSchema = new Schema({
    usuario: String, 
    auth: String, 
    nombreCompleto: String, 
    area: String,
    ubicacion: Date,
    segmento: String,
    perfil: String
});


module.exports = model('Adviser', adviserSchema )