const jwt = require('jsonwebtoken');
const Cliente = require('../../model/cliente');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
    const {nome, email, password, local} = req.body;
    const cliente = new Cliente({nome, email, password, local});

    try {
        await cliente.save();
        res.status(200).json(cliente);
    } catch (error) {
        ress.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let cliente = await Cliente.findOne({ email });
        if (!cliente) return res.status(401).json({ error: 'Email ou senha incorretos' });

        user.isCorrectPassword(password, (err, same) => {
            if (!same) return res.status(401).json({ error: 'Email ou senha incorretos' });

            // Isso aqui vai gerar o token
            const token = jwt.sign({ email }, secret, { expiresIn: '30d' });
            res.json({ user, token });
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno, tente novamente' });
    }
};

module.exports = {
    login, register
};