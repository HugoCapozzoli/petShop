require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const WithAuth = (req, res, next) => {
    const { url, method } = req;

    console.log(url, method)

    const free = [
        { method: 'POST', urls: ['/api/login', '/api/register'] },
        { method: 'OPTIONS', urls: ['/api/login', '/api/register'] }
    ]

    free.some(public => {
        if (method === public.method && public.urls.includes(url)) {
            console.log("Luiz liberou")
            return next();
        }
    })

    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) return res.status(401).json({ error: 'Sem token, acesso negado' });

    jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Token inválido' });

        req.email = decoded.email;
        next();
    });
};

module.exports = WithAuth;