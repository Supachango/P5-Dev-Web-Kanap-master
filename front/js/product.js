let products = []

// Récupère les params de l'URL
const urlParams = new URLSearchParams(document.location.search);
// Prends l'ID dans les params
const idProduct = urlParams.get("id"); 
// retourne un nouvel URL avec l'ID
const apiUrl = `http://localhost:3000/api/products/${idProduct}`; 

// Va chercher le produit avec l'ID correspondant
const fetchProduct = async () => {
//déclaration de fonction asynchrone pour la requète à venir encapsulée par la fonction lambda
  await fetch(apiUrl)
  //appel de l'API avec l'opérateur await pour attendre la résolution
    .then((res) => res.json())
    //convertion de la réponse de l'API en un objet JSON utilisable
    .then((data) => {
      products = data;
    //stockage des données JSON dans une variable
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

  products.colors.forEach(color => {
    colors.innerHTML += `<option value="${color}">${color}</option>` 
  }); 
};

displayProduct();
// Affiche les produits



const ajoutPanierBtn = document.getElementById("addToCart");
// Ajout d'un panneau d'une écoute de clic souris sur le bouton "Ajouter au panier"


ajoutPanierBtn.addEventListener("click", () => {
  let productArray = [];
  //création d'un tableau pour changer la quantité d'article sélectionnés
  const choixCouleur = document.getElementById("colors").value;
  const choixNombre = document.getElementById("quantity").value;
  const choixID = products._id;

  let produitPanier = {
    id: choixID,
    color: choixCouleur,
    quantity: parseInt(choixNombre, 10),
  };

  let articleExisteDansPanier = false;
  // méthode du drapeau : Variable témoin : Le produit n'existe pas 

  if (produitPanier.color) {
    if (localStorage.getItem("panier")) {
      productArray = JSON.parse(localStorage.getItem("panier"));
      for (i = 0; i < productArray.length; i++) {
        if (
          produitPanier.id == productArray[i].id &&
          produitPanier.color == productArray[i].color
        ) {
          productArray[i].quantity += produitPanier.quantity;
          if (productArray[i].quantity > 100) {
            productArray[i].quantity = 100;
            alert("Le nombre d'articles sélectionnés est trop important !");
          }
          articleExisteDansPanier = true;
          break;
          //arrète la variable témoin : Le produit existe
        }
      }
    }

    if (!articleExisteDansPanier) {
    // Si le produit n'existe pas déjà on en ajoute un ou plusieurs  
      productArray.push(produitPanier);
    }

    localStorage.setItem("panier", JSON.stringify(productArray));
    // modifie le nombre d'article de la même couleur dans le local storage

    if (choixNombre === "0") {
    // si le choix du nombre d'article est strictement égal à 0, message pop-up:  
      alert("Aucun élément n'a été ajouté au panier.");
    } else if (choixNombre === "1") {
          // sinon si le choix du nombre d'article est strictement égal à 1, message alerte pop-up:   
      alert("Un élément a été ajouté au panier.");
    } else {
          // sinon; message pop-up:
      alert("Plusieurs éléments ont été ajoutés au panier.");
    }
  } else {
    alert("Veuillez choisir une couleur.");
    // sinon (pas de couleur sélectionnée) message alerte pop-up:
  }
});
