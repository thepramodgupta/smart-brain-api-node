const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin')
const profile = require('./controllers/profile');
const image = require('./controllers/image');

// const db = knex({
//     client: 'pg',
//     connection: {
//         server: '127.0.0.1',
//         user: 'pramod',  
//         password: '',    
//         database: 'smart-brain'
//     }
//   });

const app = express();
app.use(express.json())
app.use(cors());



// app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) });

// app.post('/signin', (req,res) => { signin.handleSignin(req, res, db, bcrypt) });

// app.put('/image', (req,res) => { image.handleImage(req, res, db)});
// app.post('/imageurl', (req,res) => { image.handleClarifaiApi(req, res)});

// app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.get('/', (req, res) => {
    res.json('success');
});

app.listen(process.env.PORT || 4000,()=>{ 
    console.log(`listening at ${process.env.PORT} `);
})

