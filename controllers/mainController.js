const listProducts = [
    {
    id: 1,
    name: "Horno Electrico",
    description: "bla bl bla",
    imagen: "/img/horno-electrico-.jpg",
    price: 34200,
    discount: 10,
    category: "novedades",
  },
  {
    id: 2,
    name: "Cafetera Moulinex",
    description: "Juego Red Dead Redemption II para xbox, Rockstar Games",
    imagen: "/img/img-cafetera-moulinex.jpg",
    price: 30500,
    discount: 40,
    category: "ofertas",
  },
  {
    id: 3,
    name: "Pava Electrica Atma",
    description: "PAva bla bla bla",
    imagen: "/img/pava-atma.jpg",
    price: 6770,
    discount: 15,
    category: "novedades",
  },
  {
    id: 4,
    name: "Notebook Lenovo",
    description: "Intel Core i5 10210U 12GB de RAM 512GB SSD, Intel UHD Graphics 620 1920x1080px",
    price: 154999,
    discount: 15,
    interes: "novedades",
    imagen: "/img/notebook.jpg",
  },
  {
    id: 5,
    name: "Samsung Galaxy A33",
    description: "5g 128 Gb Awesome Black 6 Gb Ram",
    price: 65000,
    discount: null,
    interes: "novedades",
    imagen: "/img/telefono.jpg",
  },
  {
    id: 6,
    name: "Heladera Patrick",
    description: "HPK141M10 silver con freezer 355L 220V",
    imagen: "/img/imagen-1617485554035.jpg",
    price: 102000,
    discount: 25,
    category: "ofertas",
  },
  {
    id: 7,
    name: "SmartTv Samsung 43",
    description: "bla bnla bla",
    imagen: "/img/img-tv-samsung-smart.jpg",
    price: 60200,
    discount: 5,
    category: "ofertas",
  },
];


const mainController = {
  index: (req, res) => {
    res.render("index", { products: listProducts });
},
};
module.exports = mainController;

//    const mainProducts = {
//        index: (req, res) => {
//            res.render("index", { products: listProducts });
//        },
//        ofertas: (req, res) => {
//             res.render("index", { ofertas: listProducts.category == "ofertas"})}
//
//        detalle: (req, res) => {
//            const id = req.params.id;
//            const anyPrducts = listProducts.find(anyPrducts => anyPrducts.id == id);
//            res.render("detalleProducts", { anyPrducts });
//        }
//    }

