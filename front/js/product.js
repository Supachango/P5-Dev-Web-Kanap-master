
//Code vu en mentorat le 17/05
// Récupère les params de l'URL
const urlParams = new URLSearchParams(document.location.search);
// Prends l'ID dans les params
const idProduct = urlParams.get("id"); 
// retourne un nouvel URL avec l'ID
const apiUrl = `http://localhost:3000/api/products/${idProduct}`; 

// Va chercher le produit avec l'ID correspondant
const fetchProduct = async () => {
  await fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      products = data;
    })
    .catch((error) => console.log(error));
};

// Affiche le produit sur la page produit
const displayProduct = async () => {
  await fetchProduct();
  // ajoute le nom du produit dans l'onglet
  document.title = products.name; 
  
  //ajoute l'image du produit dans la page
  const img = document.createElement("img");
  const item_img = document.querySelector(".item__img");

  img.src = products.imageUrl;
  img.alt = products.altTxt;
  // relie les éléments au DOM
  item_img.appendChild(img);
  

  title.textContent = `${products.name}`;
  price.textContent = `${products.price}`;
  description.textContent = `${products.description}`;

//injection des choix de couleur dans le html
/*
  colors.innerHTML += products.colors
    .map(
      (color) =>
        `<option value="${color}">${color}</option>`
    )
    .join("");
*/

  products.colors.forEach(color => {
    colors.innerHTML += `<option value="${color}">${color}</option>` 
  }); 
};

displayProduct();
// Affiche les produits


// *** Pour le mentorat du 31 mai 2023 ***

// Anjou d'un panneau d'une écoute de clic souris sur le bouton "Ajouter au panier"
const ajoutPanierBtn = document.getElementById("addToCart");
ajoutPanierBtn.addEventListener("click", (e) => {
//fonction lambda ou flechée donne la valeur de la fonction englobante
  let productArray = [];
  // Crée le tableau pour stocker les données dans le local storage
  const choixCouleur = document.getElementById("colors").value;
  const choixNombre = document.getElementById("quantity").value;
  const choixID = products._id;
  const choixNom = products.name;
  const choixPrix = products.price;
  const choixImg = products.imageUrl;
  const choixImgAltTxt = products.altTxt;
  //Crée un objet Produit panier avec les critère id, nom
  let produitPanier = {
    id: choixID,
    name: choixNom,
    price: choixPrix,
    color: choixCouleur,
    quantity: parseInt(choixNombre, 10),
    //analyse une chaine de caractère fournit en argument et renvoie un entier exprimé dans une base de donnée.
    img: choixImg,
    alt: choixImgAltTxt,
  };
  //-----
  if (localStorage.getItem("panier")) {
    productArray = JSON.parse(localStorage.getItem("panier"));
    for (i = 0; i < productArray.length; i++) {
      if (
        produitPanier.id == productArray[i].id &&
        // && opérateur logique AND qui renvoie true si les comparaisons sont à true et false sinon
        produitPanier.color == productArray[i].color
        // Vérifie l'id du produit' ET la couleur avant d'en ajouter.
      ) {
        productArray[i].quantity =
          productArray[i].quantity + produitPanier.quantity;
        if (productArray[i].quantity > 100) {
          productArray[i].quantity = 100;
          alert("Le nombre d'articles selectionnés est trop important !");
          //Vérifie que le nombre de canapé mis au panier n'est pas égale à 100 ou plus
        }
        localStorage.setItem("panier", JSON.stringify(productArray));
        //converti une valeur javascript en chaine JSON
        return;
      }
    }
    productArray.push(produitPanier);
    localStorage.setItem("panier", JSON.stringify(productArray));
    // Ajoute un élément à la fin du tableau de stockage ou met à jour la valeur
  } else {
    productArray.push(produitPanier);
    localStorage.setItem("panier", JSON.stringify(productArray));
  }
});