const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/register', (req, res) => {
    res.render("public/signup.html", {root:"./public"} );
});

router.get('/login', (req, res) => {
    res.render("public/login.html", {root:"./public"} );
});

module.exports = router;


