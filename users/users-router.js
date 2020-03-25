const router = require("express").Router();

const User = require('./users-model.js');

router.get("/", (req, res) => {
    User
        .find()
        .then(user => {
            res.json(user);
        })
        .catch(err => res.send(err));
})

module.exports = router;