var express = require('express');
var router = express.Router();
var destinationsCtrl = require('../controllers/destinations')

router.put('/:id/destinations', destinationsCtrl.udpate);

module.exports = router;