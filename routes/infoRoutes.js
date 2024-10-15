const express = require('express');
const router = express.Router();
const infoController = require('../controllers/infoController');

// Define route for /information
router.get('/', infoController.getInfo);

module.exports = router;