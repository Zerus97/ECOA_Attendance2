const controller = require('../controllers/hello.controllers');

const config = require('../utilities/config.utils');
const express = require('express');

var router = express.Router();

router.get( config.getProperty('URL_BASENAME', '') + '/hello_world_abc', controller.hello_word );


module.exports = router