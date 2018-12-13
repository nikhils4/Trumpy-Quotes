const express = require('express');
const hbs = require('hbs');
const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/views/styles') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('front.hbs');
});


app.get('/quote', (req,res) => {
    res.render('result.hbs');
});