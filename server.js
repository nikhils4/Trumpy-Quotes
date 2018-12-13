const express = require('express');
const hbs = require('hbs');
const geocode = require('./geocode.js');
const weather = require('./weather.js');
const reverse = require('./reverse.js');
const MongoClient = require('mongodb').MongoClient;

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/views/images') );
app.set('view engine', hbs);


app.get('/', (req,res) => {
    res.render('front.hbs');
});