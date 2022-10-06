// si vamos a usar un solo archivo JS en el HTML, usamos window.onload = () => {}
//si vamos a usar mas de un archivo en un mismo HTML, usamos window.addEventListener("load", () => {})
//ya que de la otra manera, la misma funcion se sobreescribe y por eso agarra solo un script.

window.addEventListener("load", (e) => {
  const addProductButton = document.querySelector("#btn-buy");

  // innerText nos permite capturar el valor de nuestra etiqueta.
  const productTitle = document.querySelector("h3").innerText;
  const productPrice = document.querySelector(".price").innerHTML;
  const productImage = document.querySelector("img").getAttribute("src");
  let url = window.location.href.split("/");
  let id = url[url.length - 1];

  // console.log(url);
  // console.log(id);

  // funcion que se va a ejecutar al momento de hacer click en agregar Producto
  addProductButton.addEventListener("click", (e) => {
    // prevenimos que se recargue la pagina
    e.preventDefault();
    //ejecutamos la funcion que contendra la logica de agregar un producto
    addProductToList();
  });

  const addProductToList = () => {
    // creamos un objeto con los valores del producto que vamos a listar en el carrito
    const newProduct = {
      title: productTitle,
      price: parseInt(productPrice),
      image: productImage,
      id: id,
    };
    // verificamos que el LS no tenga seteado nada.
    if (
      !localStorage.getItem("shoppingList") ||
      localStorage.shoppingList.length == 0
    ) {
      //creamos un array vacio donde se van a empezar a almacenar los prods.
      let shoppingList = [];
      let precioCarrito = [];
      //le agregamos el nuevo producto
      shoppingList.push(newProduct);
      precioCarrito.push(newProduct.price);
      // seteamos el LS con el nuevo valor del array.
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
      //seteamos el precio del primer producto agregado
      localStorage.setItem("shoppingPrice", JSON.stringify(precioCarrito));
      // agregamos un alert que indica que el producto se agrego.
      //se puede hacer una ventana modal tambien
      alert(`agregaste ${newProduct.title} al carrito`);
    } else {
      //leemos el array desde localStorage ya con contenido.
      let shoppingList = JSON.parse(localStorage.shoppingList);
      let shoppingPrice = JSON.parse(localStorage.shoppingPrice);
      // pusheamos el nuevo producto
      shoppingList.push(newProduct);
      shoppingPrice.push(newProduct.price);
      // volvemos a setear el LS con el nuevo array.
      localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
      localStorage.setItem("shoppingPrice", JSON.stringify(shoppingPrice));
      //ejecutamos el alert de que se agrego el nuevo producto
      alert(`agregaste ${newProduct.title} al carrito`);
      //leemos el precio que almacenamos en LS
      // const firstPrice = JSON.parse(localStorage.shoppingPrice);
      // // sumamos el precio almacenado con el del nuevo producto
      // const totalPrice = firstPrice + newProduct.price;
      // //seteamos de nuevo el LS con el nuevo precio
      // localStorage.setItem("shoppingPrice", JSON.stringify(totalPrice));
    }
  };
});
