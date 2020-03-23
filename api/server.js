const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
// const session = require('express-session');
const usersRouter = require('../users/users-router.js');



const server = express();

server.use(helmet());
server.use(express.json());
server.use(CORS());


server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.status(200).json({ api: "server is 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️"})
})

module.exports = server;