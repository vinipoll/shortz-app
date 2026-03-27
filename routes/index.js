var express = require('express');
var router = express.Router();

// requisição GET para apresentar a landing page
router.get('/', function(req, res, next) {
  res.render('landing', { title: 'Vídeos Curtos e Engajadores!' });
});

module.exports = router;