const router = require('express').Router();

const User = require('./users-model.js');

router.get("/", (req, res) => {
    User.find()
        
})