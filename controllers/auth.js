const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
});


exports.register = (req, res) => {
    console.log(req.body);


const {indexno, email, password} = req.body;

db.query('SELECT id_number FROM user WHERE id_number = ?', [maticniBroj], async (error, results) => {
    if(error){
       console.log(error); 
    }
    if(results.length > 0){
       return res.render('register', {
        message: 'You are already registered!'
       }) 
    }

    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    db.query('INSERT INTO test SET ?', {id_number: maticniBroj, password: hashedPassword}, (error, results) =>{
        if(error){
            console.log(error);
        } else {
            console.log(results);
            return res.render('register', {
                message: 'User registered!'
            });
        }
    })

});

}