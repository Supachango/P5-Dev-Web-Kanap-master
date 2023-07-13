let products = []
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

  products.colors.forEach(color => {
    colors.innerHTML += `<option value="${color}">${color}</option>` 
  }); 
};

displayProduct();
// Affiche les produits
// Vu en mentorat du 31 mai 2023


const ajoutPanierBtn = document.getElementById("addToCart");
// Ajout d'un panneau d'une écoute de clic souris sur le bouton "Ajouter au panier"


ajoutPanierBtn.addEventListener("click", () => {
  let productArray = [];
  const choixCouleur = document.getElementById("colors").value;
  const choixNombre = document.getElementById("quantity").value;
  const choixID = products._id;

  let produitPanier = {
    id: choixID,
    color: choixCouleur,
    quantity: parseInt(choixNombre, 10),
  };

  let articleExisteDansPanier = false;

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
        }
      }
    }

    if (!articleExisteDansPanier) {
      productArray.push(produitPanier);
    }

    localStorage.setItem("panier", JSON.stringify(productArray));

    if (choixNombre === "0") {
      alert("Aucun élément n'a été ajouté au panier.");
    } else if (choixNombre === "1") {
      alert("Un élément a été ajouté au panier.");
    } else {
      alert("Plusieurs éléments ont été ajoutés au panier.");
    }
  } else {
    alert("Veuillez choisir une couleur.");
  }
});
