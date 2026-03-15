const User = require('./userModel');
const bcrypt = require('bcryptjs');

exports.register = async(req, res) => {
    const {username, email, password, confirmPassword, fullName} = req.body;
    
    try {
        // 1- verificar se as senhas batem
        if (password !== confirmPassword) {
            req.flash('error','As senhas não coincidem.');
            return res.direct('/register');
        }

        // 2- verificar se o usuário ou email já existem no banco
        const emailExists = await User.findOne({where: {email}});
        const usernameExist = await User.findOne({where: {username}});
        if(emailExists || usernameExist) {
            req.flash('error', 'Este email ou usuário já está cadastrado');
            return render.redirect('/register');
        }

        // 3- hash de senha
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 4- inserir o registro no banco de dados
        await User.create({username, email, password: hashedPassword, fullName});

        // 5- redireciona o novo usuário para o login
        req.flash('sucess','Conta criada com sucesso! Faça seu login');
        res.redirect('/login');

    } catch (error){
        console.log(error);
        req.flash('error','Erro ao criar conta. Tente novamente.');
        res.redirect('/register');
    }
};