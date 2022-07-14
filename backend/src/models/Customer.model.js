const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    idCliente: {
        type: String,
        required: true,
        restringido: false
    }, 
    nombre: {
        type: String,
        required: true,
        restringido: false
    }, 
    apellidoPaterno: {
        type: String,
        required: true,
        restringido: true
    }, 
    apellidoMaterno: {
        type: String,
        required: false,
        restringido: true
    }, 
    fechaNacimiento: {
        type: Date,
        required: true,
        restringido: true
    }, 
    sexo: {
        type: String,
        required: true,
        restringido: false
    }, 
    segmento: {
        type: String,
        required: true,
        restringido: false
    }, 
    nacionalidad: {
        type: String,
        required: true,
        restringido: true
    }, 
    rfc: {
        type: String,
        required: false,
        restringido: true
    }, 
    tipoId: {
        type: String,
        required: true,
        restringido: true
    }, 
    numeroId: {
        type: String,
        required: true,
        restringido: true
    }, 
    cuenta: {
        type: String,
        required: true,
        restringido: false
    }, 
    email: {
        type: String,
        required: false,
        restringido: true
    }, 
    tdd: {
        type: String,
        required: false,
        restringido: true
    }
});


module.exports = model('Customer', customerSchema )