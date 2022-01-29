const router = require('express').Router();
const apiRoutes = require('./api');

const express = require('express');
const app = express();

const PORT = 3001;


router.use('/api', apiRoutes);



router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});


app.post('/login')

// listening for server creating a server



module.exports = router;