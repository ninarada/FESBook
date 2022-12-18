var path = require('path');
var express = require('express');
var app = express();
const mysql = require("mysql");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var dir = path.join(__dirname, 'public');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); //to accept data in json format
app.use(express.urlencoded()); //this is to decode the data sent through html form

dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, './public');
//console.log(__dirname);

app.get('/register', (req, res) =>{
    res.sendFile(__dirname + '/public/signup.html');

});

app.post('/registerPost', (req, res) => {
    console.log(req.body);
});

app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    } else {
        console.log("MYSQL Connected. . .")
    }
})

app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));


app.listen(8080, () => console.log('Listening on http://localhost:8080/ Use 8080/homepage.html for access to the website'));