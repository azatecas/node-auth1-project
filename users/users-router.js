const router = require("express").Router();

const User = require('./users-model.js');

router.get("/", (req, res) => {
    User.find()
        .then(user => {
            res.status(200).json({currentUser: user});
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

module.exports = router;