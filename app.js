const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/userRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas index
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

// 404
// app.use((req, res, next) => {
//     res.status(404).render("../views/404.ejs")
// })



// Rutas a vistas

/**/




/*
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
*/

