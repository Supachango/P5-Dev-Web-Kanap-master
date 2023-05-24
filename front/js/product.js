
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
  const item_img = document.getElementsByClassName("item__img");

  img.setAttribute("src", products.imageUrl);
  img.setAttribute("alt", products.altTxt);
  // relie les éléments au DOM
  item_img[0].appendChild(img);
  

  title.textContent = `${products.name}`;
  price.textContent = `${products.price}`;
  description.textContent = `${products.description}`;

  //injection des choix de couleur dans le html
  colors.innerHTML += products.colors
    .map(
      (color) =>
        `
      <option value="${color}">${color}</option>
      `
    )
    .join("");
};
displayProduct();

