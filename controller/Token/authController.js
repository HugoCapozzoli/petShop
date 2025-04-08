const jwt = require('jsonwebtoken');
const Cliente = require('../../model/cliente');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const register = async (req, res) => {
    const { nome, email, password, local } = req.body;
    console.debug(email, password)
    const cliente = new Cliente({ nome, email, password, local });

    try {
        await cliente.save();
        res.status(200).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao registrar usuário' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    console.log("---->", email, password)

    try {
        console.debug("Entrou no try")
        let cliente = await Cliente.findOne({ email });
        console.debug("Entrou no try")

        console.log(cliente);

        if (cliente == null) {
            return res.status(401).json({ error: 'Email ou senha incorretos' });
        }
        console.debug("Entrou no try")


        cliente.isCorrectPassword(password, (err, same) => {
            if (!same) return res.status(401).json({ error: 'Email ou senha incorretos' });
            console.log(cliente);

            // Isso aqui vai gerar o token
            const token = jwt.sign({ email }, secret, { expiresIn: '30d' });
            res.json({ cliente, token });
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro interno, tente novamente' });
    }
};

module.exports = {
    login, register
};