const express = require('express');
const controller = require('./controllers');

const router= express.Router();

router.get('/', controller.homepage);
router.get('/company', controller.company);
module.exports.router = router;
