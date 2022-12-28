const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const mysql = require("mysql");
const dotenv = require('dotenv');
var path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json()); //to accept data in json format
app.use(express.urlencoded()); //this is to decode the data sent through html form

dotenv.config({path: './.env'});

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE,
});

app.use(express.static('public'));

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/homepage.html'));
    //__dirname : It will resolve to your project folder.
  });
  
router.get('/profile',function(req,res){
    res.sendFile(path.join(__dirname+'/public/profile.html'));
  });
  
router.get('/upload',function(req,res){
    res.sendFile(path.join(__dirname+'/public/upload.html'));
  });
  
router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/public/login.html'));
  });
    

router.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname+'/public/signup.html'));
  });


app.use('/', router);

//za registraciju!
app.post('/signup', async (req,res) => {

    const {maticniBroj, email, password} = req.body;

    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
        if(error){
        console.log(error); 
        }
        if(results.length > 0){
        return res.send({ message: 'Email already in use!' });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO user SET ?', {id_number: maticniBroj, email: email, password: hashedPassword}, (error, results) =>{
            if(error){
                console.log(error);
            } else {
                console.log(results);
                return res.send({ message: 'User registered!' });
            }
        })

    });

});

app.listen(8080, () => {
    console.log("Application started and Listening on port 8080!");
  });
  
module.exports = router;