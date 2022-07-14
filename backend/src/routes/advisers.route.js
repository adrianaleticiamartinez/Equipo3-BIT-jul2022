const { Router } = require('express');

const router = Router();
const { getAdvisers, getAdviser, loginAdviser } = require('../controllers/advisers.controller');

/* GET ALL CUSTOMERS */
router.route('/')
    .get(getAdvisers)
    .post(loginAdviser)

/* GET CUSTOMERS BY ID */
router.route('/:id')
    .get(getAdviser)

module.exports = router;