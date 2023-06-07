//_______________________________________________________________Methode du squelette (Peter Bolt)
async function getCart (){
    

//Création d'un tableau qui récupère les items du panier
let productArray = JSON.parse(localStorage.getItem("panier"));
const produitsPanier = document.getElementById("cart__items");


//Création d'une boucle pour l'affichage du panier
let squeletteProduitPanier = [];
for (i = 0; i < productArray.length; i++) {
    const idProduct = productArray.id 
    
    const apiUrl = `http://localhost:3000/api/products/${idProduct}`; 
    
    const fetchProduct = async () => {
      await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          //products = data;
          return data
        })
        .catch((error) => console.log(error));
    };
const products = await fetchProduct ();
console.log (products)
  squeletteProduitPanier =
    squeletteProduitPanier +
    // Concaténation ou stockage de la valeur dans la variable.
    //Le squelette est un gabarit littéral écrit en <html>,  lui même composé de gabarits littéraux
                //insertion de l'image et texte alternatif
                //Insertion du nom, de la couleur, et du prix. 
    `
        <article class="cart__item" data-id="${productArray[i].id}" data-color="${productArray[i].color}">
            <div class="cart__item__img">
                <img src="${products.imageUrl}" alt="${products.altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${productArray[i].name}</h2>
                    <p>${productArray[i].color}</p>
                    <p>${productArray[i].price} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" data-id="${productArray[i].id}" data-color="${productArray[i].color}" value="${productArray[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem" data-id="${productArray[i].id}" data-color="${productArray[i].color}">Supprimer</p>
                    </div>
                </div>
            </div>
        </article>
    `;
  produitsPanier.innerHTML = squeletteProduitPanier;
}
}

getCart()