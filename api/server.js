const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
const session = require('express-session');

const restricted = require('../auth/restricted-middleware.js');


//routers
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/router');


const server = express();
const sessionConfig = {
    name: "monster",
    secret: "keep it secret, in production use this secret in env",
    cookie: {
      maxAge: 1000 * 60 * 30,
      secure: false, //true in production to send only over https
      httpOnly: true, // true means no access from JS
    },
    resave: false,
    saveUninitialized: false, //GDPR laws require to check with client
  }
  

server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(session(sessionConfig));



server.use('/api/auth', authRouter);
server.use('/api/users',restricted, usersRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: "server is 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️"})
})

module.exports = server;