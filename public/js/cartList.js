window.addEventListener("load", (e) => {
    const productContainer = document.querySelector(".cart-container");
    const priceContainer = document.querySelector(".shop-price");

    const initialValue = 0;

    // si no hay valores en LS, decimos que esta vacio

    if (!localStorage.getItem("shoppingList") || localStorage.getItem("shoppingList") === []) {
        productContainer.innerHTML += "<h3>El carrito esta vacio</h3>";
        // y el precio es 0, dado que no hay productos
        priceContainer.innerHTML += `<h3> TOTAL: $${initialValue} </h3>`;
    }

    // leemos el LS y si hay contenido...
    if (localStorage.getItem("shoppingList")) {
        const products = JSON.parse(localStorage.shoppingList);

        // recorremos el array de productos y devolvemos la data
        products.forEach((product) => {
            // creamos un div con los valores del producto
            productContainer.innerHTML += `
      <div class="cart-product-container">
        <h3>${product.title}</h3>
        <img src="${product.image}"/>
        <p>${product.price}</p>
        <button class='delete-btn' data-id='${product.id}'>Borrar</button>
      </div>
      `;
        });

        // seleccionamos todos los botones del array de prods.
        const deleteProductButton = document.querySelectorAll(".delete-btn");

        // recorremos el querySelector all que devuelve un array
        deleteProductButton.forEach((button, i) => {
            // console.log(button)
            button.addEventListener("click", (e) => {
                const shoppingList = JSON.parse(localStorage.shoppingList);
                // let indexToDelete;  --> Se puede borrar si no se trabaja con el indice
                const filteredProduct = shoppingList.filter((prod) => {
                    // if (prod.id === shoppingList[i].id) {
                    //     indexToDelete = shoppingList.indexOf(shoppingList[i]);
                    // } --> Se puede borrar si no se trabaja con el indice
                    return prod.id != shoppingList[i].id;
                });
                let productsPrice = [];
                filteredProduct.forEach((e) => productsPrice.push(e.price));

                // const filteredPrice = priceList.filter((price, index) => {
                //     console.log(price[index]);
                //     console.log(price[indexToDelete]);
                //     return price[index] == price[indexToDelete];
                // });
                // console.log(JSON.parse(localStorage.shoppingPrice[i]));
                // console.log(JSON.parse(localStorage.shoppingPrice));
                localStorage.setItem("shoppingList", JSON.stringify(filteredProduct));
                localStorage.setItem("shoppingPrice", JSON.stringify(productsPrice));
                location.reload();

                // console.log(filteredProduct);
            });
        });
    }

    if (localStorage.getItem("shoppingPrice")) {
        const price = JSON.parse(localStorage.shoppingPrice);

        const sumWithInitial = price.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

        console.log(sumWithInitial);
        priceContainer.innerHTML += `
    <h3> TOTAL: $${sumWithInitial} </h3>
    <button id="reset-cart">Limpiar</button>
    `;

        //funcionalidad limpiar Carrito despues de que aparezca el boton y dentro del if para evitar errores.
        const resetCart = document.querySelector("#reset-cart");

        resetCart.addEventListener("click", () => {
            localStorage.removeItem("shoppingPrice");
            localStorage.removeItem("shoppingList");
            location.reload();
        });
    }
});

// pasarle a la etiqueta
// onclick='deleteItem(this)'

// function deleteItem (button) {
//   button.parentNode.remove()
// }
