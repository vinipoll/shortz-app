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

// Rota para processar o formulário de login
router.post('/login', userController.login);

// Rota para processar o logout
router.get('/logout', userController.logout);

// Rota para exibir o feed de vídeos (protegida por autenticação)
router.get('/feed', authMiddleware, (req, res) => {
   res.render('home', { user: req.session.user });
});

module.exports = router;
