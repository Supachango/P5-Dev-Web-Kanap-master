// Pour le mentorat de mercredi 7 Juin
/*
//Récupération du contenu du local storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);
const positionEmptyCart = document.querySelector("#cart__items");

// Dans le cas où le panier est vide
function getCart(){
if (produitLocalStorage === null || produitLocalStorage == 0) {
    const emptyCart = `<p>Votre panier est vide</p>`;
    positionEmptyCart.innerHTML = emptyCart;
} else {
// Dès qu'il y a un élément dans le local storage:    
for (let produit in produitLocalStorage){
    // déclaration de la variable et insertion de l'élément "article"
    let productArticle = document.createElement("article");
    //récupération de l'emplacement dans le DOM
    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.className = "cart__item";
    //modification de l'élément pour changer son nom en fonction de son id
    productArticle.setAttribute('data-id', produitLocalStorage[produit].idProduit);


    // Insertion de l'élément "div"
    let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

    // Insertion de l'image
    let productImg = document.createElement("img");
    productDivImg.appendChild(productImg);
    productImg.src = produitLocalStorage[produit].imgProduit;
    productImg.alt = produitLocalStorage[produit].altImgProduit;
    
    // Insertion de l'élément "div"
    let productItemContent = document.createElement("div");
    productArticle.appendChild(productItemContent);
    productItemContent.className = "cart__item__content";

    // Insertion de l'élément "div"
    let productItemContentTitlePrice = document.createElement("div");
    productItemContent.appendChild(productItemContentTitlePrice);
    productItemContentTitlePrice.className = "cart__item__content__titlePrice";
    
    // Insertion du titre h3
    let productTitle = document.createElement("h2");
    productItemContentTitlePrice.appendChild(productTitle);
    productTitle.innerHTML = produitLocalStorage[produit].nomProduit;

    // Insertion de la couleur
    let productColor = document.createElement("p");
    productTitle.appendChild(productColor);
    productColor.innerHTML = produitLocalStorage[produit].couleurProduit;
    productColor.style.fontSize = "20px";

    // Insertion du prix
    let productPrice = document.createElement("p");
    productItemContentTitlePrice.appendChild(productPrice);
    productPrice.innerHTML = produitLocalStorage[produit].prixProduit + " €";

    // Insertion de l'élément "div"
    let productItemContentSettings = document.createElement("div");
    productItemContent.appendChild(productItemContentSettings);
    productItemContentSettings.className = "cart__item__content__settings";

    // Insertion de l'élément "div"
    let productItemContentSettingsQuantity = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsQuantity);
    productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
    
    // Insertion de "Qté : "
    let productQte = document.createElement("p");
    productItemContentSettingsQuantity.appendChild(productQte);
    productQte.innerHTML = "Qté : ";

    // Insertion de la quantité
    let productQuantity = document.createElement("input");
    productItemContentSettingsQuantity.appendChild(productQuantity);
    productQuantity.value = produitLocalStorage[produit].quantiteProduit;
    productQuantity.className = "itemQuantity";
    productQuantity.setAttribute("type", "number");
    productQuantity.setAttribute("min", "1");
    productQuantity.setAttribute("max", "100");
    productQuantity.setAttribute("name", "itemQuantity");

    // Insertion de l'élément "div"
    let productItemContentSettingsDelete = document.createElement("div");
    productItemContentSettings.appendChild(productItemContentSettingsDelete);
    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";

    // Insertion de "p" supprimer
    let productSupprimer = document.createElement("p");
    productItemContentSettingsDelete.appendChild(productSupprimer);
    productSupprimer.className = "deleteItem";
    productSupprimer.innerHTML = "Supprimer";
}
}}
getCart();

*/

//_______________________________________________________________Methode du squelette (Peter Bolt)

//Création d'un tableau qui récupère les items du panier
let productArray = JSON.parse(localStorage.getItem("panier"));
const produitsPanier = document.getElementById("cart__items");

//Création d'un boucle pour l'affichage du panier
let squeletteProduitPanier = [];
for (i = 0; i < productArray.length; i++) {
  squeletteProduitPanier =
    squeletteProduitPanier +
    // Concaténation ou stockage de la valeur dans la variable.
    //Le squelette est un gabarit littéral écrit en <html>,  lui même composé de gabarits littéraux
                //insertion de l'image et texte alternatif
                //Insertion du nom, de la couleur, et du prix. 
    `
        <article class="cart__item" data-id="${productArray[i].id}" data-color="${productArray[i].color}">
            <div class="cart__item__img">
                <img src="${productArray[i].img}" alt="${productArray[i].alt}">
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