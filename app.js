const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
});

// Error 404
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, './views/404.html'));
// });

// Login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
});

// productCart
app.get('/productCart', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productCart.html'));
});

// productDetail
app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(__dirname, './views/productDetail.html'));
});

// register
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});

/*app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
});*/


app.listen(process.env.PORT || 3000, function() {
    console.log('Servidor corriendo en el pueretpo 3000');
});