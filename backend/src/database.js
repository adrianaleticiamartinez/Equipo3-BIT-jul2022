const mongoose = require('mongoose');

/* USE DB OR CREATE IF NECCESARY */
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test';

/* CONNECT WITH DB */
mongoose.connect(URI, {});

const connection = mongoose.connection;

/* CONNECTION SUCCESSFULLY */
connection.once('open', () => {
    console.log('Database is conected');
});
