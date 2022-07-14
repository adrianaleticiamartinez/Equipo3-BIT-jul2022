const { Router } = require('express');

const router = Router();
const { getCustomers, getCustomer } = require('../controllers/customers.controller');

/* GET ALL CUSTOMERS */
router.route('/')
    .get(getCustomers)

/* GET CUSTOMERS BY ID */
router.route('/:id')
    .get(getCustomer)

module.exports = router;