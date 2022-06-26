const express = require('express');
const app = express();


const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';
app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productcart.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});