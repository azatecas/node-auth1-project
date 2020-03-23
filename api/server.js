const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
const session = require('express-session');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(CORS());



server.get('/', (req, res) => {
    res.status(200).json({ api: "server is 🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️"})
})

module.exports = server;