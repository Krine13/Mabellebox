var express = require('express');
var router = express.Router();
const Client= require("../models/client");
const { checkBody }= require("../modules/checkBody")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
module.exports = Client;
