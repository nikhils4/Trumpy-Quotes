const express = require('express');
const hbs = require('hbs');
const qt = require('./qt.js');

const port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + '/views/styles') );
app.set('view engine', hbs);

app.get('/', (req,res) => {
    res.render('main.hbs');
});


app.get('/quote', (req,res) => {
    qt.getQuotes((error, quote) => {
        if(error){
            res.render('error.hbs')
        }
        else {
            res.render('quote.hbs', {
                quote : quote.quotes
            })
        }
    })


});

app.get('/name', (req, res) => {
    res.render('name.hbs');
});


app.listen(port, () => {
    console.log('Server is up at port : ', port)
    }
);