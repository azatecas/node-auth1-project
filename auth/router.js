const bcrypt = require('bcryptjs');

const router = require("express").Router();
const Users = require("../users/users-model.js");



router.post("/register", (req, res) => {
    const body = req.body;
    const ROUNDS = process.env.HASHING_ROUNDS || 12;
    const hash = bcrypt.hashSync(body.password, ROUNDS);

    body.password = hash;

    Users
        .add(body)
        .then(user => {
            console.log('userINFO', body);
            res.status(200).json(user);
        })
        .catch(err => res.send({errorMessage: err.message}))
})


module.exports = router;