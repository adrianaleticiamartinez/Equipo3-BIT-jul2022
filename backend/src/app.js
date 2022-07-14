const express = require('express');
const cors = require('cors');

//* CREATE EXPRESS-APP */
const app = express();

/* SET PORT */
app.set('port', process.env.PORT || 4000);

/* SET MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* API - ROUTES */
app.use('/api/advisers', require('./routes/advisers.route'));
app.use('/api/customers', require('./routes/customers.route'));


module.exports = app;