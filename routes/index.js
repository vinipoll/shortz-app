var express = require('express');
var router = express.Router();

/* requisição GET para apresentar a home page  */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bem Vindo!' });
});

/* requisição GET para apresentar o form de cadastro */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Criar conta' });
});

module.exports = router;
