const express = require('express');
const router = express.Router();
const { getCars, getCarById, createCar } = require('../controllers/carController');

router.route('/').get(getCars).post(createCar);
router.route('/:id').get(getCarById);

module.exports = router;
