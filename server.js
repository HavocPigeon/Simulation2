const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
// const createInitialSession = require('./middlewares/session');
app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: false,
//     resave: false,
// }))
// app.use(createInitialSession);
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
}).catch(err => {console.log(err)});

//endpoints
app.get('/api/users', (req, res) => {
const db = req.app.get('db');
db.get_users()
.then(data => {res.status(200).send(data)})
.catch(err => {console.log(err)
res.status(500).send('there was an error')})
});
app.get('/api/getage', (req, res) => {
    const db = req.app.get('db');
    db.userinfo()
    .then(data => {res.status(200).send(data)})
    .catch(err => {console.log(err)
res.status(500).send('there was an error')})
});

//port connection
const port = 4000;
app.listen(port, () => {console.log(`server listening on $${port}`)});