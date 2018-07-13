const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());


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
app.get('/api/addinfo', (req, res) => {
    const db = req.app.get('db');
    db.add_lastname()
    .then(data => {res.status(200)})
    .catch(err => {console.log(err)
res.status(500).send('there was an error')})
})
app.post('/api/addlastname', (req, res) => {
    const db = req.app.get('db');
    db.update_lastname({
        lastname: req.body.lastname
    })
    .then(data => {res.status(200)})
    .catch(err => {console.log(err)
    res.status(500).send('there was an error')})
})
app.put('/api/changecolor', (req, res) => {
    const db = req.app.get('db');
    db.change_color({
        color: req.body.color
    })
    .then(data => {res.status(200)})
    .catch(err => {console.log(err)
    res.status(500).send('there was an error')})
})
// app.delete('/api/deletecolor/:id', (req, res) => {
//     const db = req.app.get('db');
//     const {id} = req.params;
//     db.delete_color()
//     .then(res => {res.statue(200)})
//     .catch(err => {console.log(err)
//     res.statue(500).send('there was an error')})
// })
//port connection
const port = 4000;
app.listen(port, () => {console.log(`server listening on $${port}`)});