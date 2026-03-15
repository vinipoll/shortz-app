var express = require('express');
var router = express.Router();
const userController = require('../modules/user/userController');

// requisição GET para apresentar a home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Vídeos Curtos e Engajadores!' });
});

// rota para exibir o formulário de registro
router.get('/register', (req, res) => {
  res.render('register', {tittle: 'Criar Conta'});
});

// rota que processa o form de cadastro
router.post('/register', userController.register);

// rota para exibir o form de login
router.get('/login', (req, res) => {
   res.render('login', { title: 'Entrar' });
});

module.exports = router;
