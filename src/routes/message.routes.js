const express = require('express');
const router = express.Router();
const messageControllers = require('../controllers/message.controllers');

router.post('/', messageControllers.postMessage);

module.exports = router;
