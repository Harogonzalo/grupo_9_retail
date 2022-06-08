const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));
//app.use(express.static('views'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views'));
});


/*const loginRoutes = require("./views/login.html");

app.use('/login', loginRoutes);*/



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/404.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});



app.listen(4000, () => {
    console.log('listening on http://localhost:4000');
});