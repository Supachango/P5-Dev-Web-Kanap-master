//Mentorat du 7/06
//_______________________________________________________________Methode du squelette 
async function getCart (){
  
//Création d'un tableau qui récupère les items du panier
let productArray = JSON.parse(localStorage.getItem("panier"));
const produitsPanier = document.getElementById("cart__items");


//Création d'une boucle pour l'affichage du panier
let squeletteProduitPanier = [];
for (i = 0; i < productArray.length; i++) {
    const idProduct = productArray[i].id 
    
    const apiUrl = `http://localhost:3000/api/products/${idProduct}`; 
    const fetchProduct = async (apiUrl) => {
        return await fetch(apiUrl)
        .then((res) => res.json())
        .catch((error) => console.log(error));
    };
    const products = await fetchProduct(apiUrl);
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


//Création d'un tableau qui récupère les items du panier
let productArray = JSON.parse(localStorage.getItem("panier"));
const produitsPanier = document.getElementById("cart__items");


//Création d'une boucle pour l'affichage du panier
let squeletteProduitPanier = [];
for (i = 0; i < productArray.length; i++) {
    const idProduct = productArray[i].id 
    const apiUrl = `http://localhost:3000/api/products/${idProduct}`; 
    const fetchProduct = async (apiUrl) => {
        return await fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          //products = data;
          return data
        })
        .catch((error) => console.log(error));
    };
const products = await fetchProduct();
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
                    <h2>${products.name}</h2>
                    <p>${choixCouleur}</p>
                    <p>${products.price} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" data-id="${choixNombre}" data-color="${productArray[i].color}" value="${productArray[i].quantity}">
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

getCart()

/*
// Pour le mentorat du mercredi 14 juin 2023
// Pour supprimer les entrées du local storage avec un bouton advent listener.
// ad event listener mais pas de function delete
function supprItem() {
  document.querySelectorAll(".supprItem").forEach((btn) => {
// fournit un accès en lecture et écriture aux attribut de données de l'élement
    btn.addEventListener("click", (e) => {
      for (let s = 0; s < productArray.length; s++) {
        if (
          productArray[s].id === e.target.dataset.id &&
          productArray[s].color === e.target.dataset.color
        ) {
          productArray.splice(s, 1);
          //La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments.
          break;
        }
      }
      localStorage.setItem("panier", JSON.stringify(productArray));
    // Déjà vu étape 7:  La méthode JSON.stringify() convertit une valeur JavaScript en chaîne JSON. 
      calculTotal();
      window.location.reload();
    });
    
});
}
*/


