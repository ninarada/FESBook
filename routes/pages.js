const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('homepage');
});

router.get('/register', (req, res) => {
    res.send("public/signup.html", {root:"./public"} );
});

router.get('/login', (req, res) => {
    res.send("public/login.html", {root:"./public"} );
});


module.exports = router;


