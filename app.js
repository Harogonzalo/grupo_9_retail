const express = require('express');
const app = express();
const path = require('path');
const session = require("express-session"); //paquete para loguear usuarios
const methodOverride = require("method-override"); // paquete para usar PUT y Delete
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Routes
const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productRoutes');
const usersRoutes = require('./routes/userRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Middlewares globales

app.use(express.urlencoded({ extended: false }));  //sin esto fallan rutas que van en POST, creo.
app.use(cookieParser());
app.use(methodOverride("_method"));
app.use(
    session({
    secret: "This is the secret used to sign the session cookie",
    // resave: false,
    // saveUninitialized: true,
    })
);

// configuarcion de public static
app.use(express.static(path.join(__dirname, 'public')));

//Rutas index
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);


app.listen(PORT, ()=>{
    console.log(`Server running at http://${HOST}:${PORT}/`);
});

// Para que muestre pagina de error, esta comentado por razones de troubleshooting 

// 404  
// app.use((req, res, next) => {
//     res.status(404).render("../views/404.ejs")
// })



// Rutas a vistas (obsoleto, se pueden borrar creo)

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

