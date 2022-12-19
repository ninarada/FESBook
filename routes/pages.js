const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/register', (req, res) => {
    res.render("signup.html", {root:"./public"} );
});

router.get('/login', (req, res) => {
    res.render("login.html", {root:"./public"} );
});

module.exports = router;


