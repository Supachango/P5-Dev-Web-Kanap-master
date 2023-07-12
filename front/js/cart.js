// Méthode du squelette
async function getCart() {
  // Création d'un tableau qui récupère les items du panier
  let productArray = JSON.parse(localStorage.getItem("panier"));
  const produitsPanier = document.getElementById("cart__items");
  
  // Création d'une boucle pour l'affichage du panier
  let squeletteProduitPanier = "";
  for (let i = 0; i < productArray.length; i++) {
    const idProduct = productArray[i].id;
    
    const apiUrl = `http://localhost:3000/api/products/${idProduct}`;
    const fetchProduct = async (apiUrl) => {
      return await fetch(apiUrl)
      .then((res) => res.json())
      .catch((error) => console.log(error));
    };
    const products = await fetchProduct(apiUrl);
    squeletteProduitPanier +=
    // Concaténation ou stockage de la valeur dans la variable.
    // Le squelette est un gabarit littéral écrit en <html>, lui-même composé de gabarits littéraux
    // Insertion de l'image et texte alternatif
    // Insertion du nom, de la couleur, et du prix.
    `
    <article class="cart__item" data-id="${productArray[i].id}" data-color="${productArray[i].color}">
      <div class="cart__item__img">
        <img src="${products.imageUrl}" alt="${products.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${products.name}</h2>
          <p>${productArray[i].color}</p>
          <p>${products.price} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" data-id="${productArray[i].id}" data-color="${productArray[i].color}" value="${productArray[i].quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem">Supprimer</p>
          </div>
        </div>
      </div>
    </article>
    `;
  }
  produitsPanier.innerHTML = squeletteProduitPanier;
  deleteItems();
  modifQteItem();
}

getCart();

// Fonction suppression d'un élément du panier
function supprItemPanier(color, id) {
  let productArray = JSON.parse(localStorage.getItem("panier"));

  const PanierMaj = productArray.filter(
    (item) => item.color !== color || item.id !== id
    );
    // Filtre tous les produits sauf ceux qui ont le même id et couleur que celui appelé par le clic/bouton
    // Logique l'inverse de même couleur ET même id c'est OU
    localStorage.setItem("panier", JSON.stringify(PanierMaj));
    alert("Le produit a été supprimé");
    window.location.reload();
    // Recharge la page après avoir changé le local storage
  }
  
  // Ajouter un eventListener aux boutons de suppression
  function deleteItems() {
    const deleteButtons = document.querySelectorAll(".deleteItem");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const parentArticle = event.target.closest(".cart__item");
        const color = parentArticle.dataset.color;
        const id = parentArticle.dataset.id;
        supprItemPanier(color, id);
      });
    });
  }
  
  // Modification de la quantité d'un article dans le panier
  function modifQteItem() {
    const quantityInputs = document.querySelectorAll(".itemQuantity");
    quantityInputs.forEach((input) => {
      input.addEventListener("change", (event) => {
        const parentArticle = event.target.closest(".cart__item");
        const id = parentArticle.dataset.id;
        const color = parentArticle.dataset.color;
        const quantity = parseInt(event.target.value);
        
        let productArray = JSON.parse(localStorage.getItem("panier"));
        for (let i = 0; i < productArray.length; i++) {
          if (productArray[i].id === id && productArray[i].color === color) {
            productArray[i].quantity = quantity;
          }
        }
        localStorage.setItem("panier", JSON.stringify(productArray));
      });
    });
  }
  
  /*********************************/
  
  // Etape 10 Passer la commande 
  // 1- Récupérer et analyser les données saisies par l'utilisateur dans le formulaire
  /*
  // 1-1 Prénom : Écrire une Reg Ex qui autorise les lettres en maj ou min, les espaces, les appostrophes, et les accents.
  const regexNom = /^[A-Za-z\s\u00C0-\u017F']+$/;
  
  // 1-2 Prénom : Idem
  const regexPrenom = /^[A-Za-z\s\u00C0-\u017F']+$/;
  
  // 1-3 Adresse : Ecrire une Reg Ex qui interdit les ";" et "`" 
  const regexAdresse = /^[^;`]*$/;
  
  // 1-4 Ville : Écrire une Reg Ex qui autorise les lettres en maj ou min, les espaces, les appostrophes, et les accents.
  const regexVille = /^[A-Za-z\s\u00C0-\u017F']+$/;
  
  // 1-5 Email : Écrire une Reg Ex qui ... recherche Google "expressions régulières JavaScript email."
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  */
  const form = document.querySelector('.cart__order__form');
  const inputs = form.querySelectorAll('.cart__order__form__question input');
  const errorMessages = form.querySelectorAll('.cart__order__form__question p');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nomInput = document.getElementById('firstName');
    const prenomInput = document.getElementById('lastName');
    const adresseInput = document.getElementById('address');
    const villeInput = document.getElementById('city');
    const emailInput = document.getElementById('email');
    
    const regexNom = /^[A-Za-z\s\u00C0-\u017F']+$/;
    const regexPrenom = /^[A-Za-z\s\u00C0-\u017F']+$/;
    const regexAdresse = /^[^;`]{2,}\s*\d{5}/; 
    const regexVille = /^[A-Za-z\s\u00C0-\u017F']+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const champs = [
      { input: nomInput, regex: regexNom, errorMessage: "Indiquez votre prénom sans chiffre ni caractères spéciaux" },
      { input: prenomInput, regex: regexPrenom, errorMessage: "Indiquez votre énom sans chiffre ni caractères spéciaux" },
      { input: adresseInput, regex: regexAdresse, errorMessage: "Indiquez votre adresse suivi d'un code postal" },
      { input: villeInput, regex: regexVille, errorMessage: "Indiquez votre ville sans chiffre ni caractères spéciaux" },
      { input: emailInput, regex: regexEmail, errorMessage: "Indiquez votre mail dans le format obligatoire" }
    ];
    
    //technique des drapeaux : piège à souris 1/3
    let estValide = true;
    
    champs.forEach((champ) => {
      const { input, regex, errorMessage } = champ;
      const value = input.value;
      
      if (!regex.test(value)) {
        estValide = false;
        //technique des drapeaux 2/3
        input.classList.add('invalide');
        const errorMessageElement = input.parentElement.querySelector('p');
        errorMessageElement.textContent = errorMessage;
      } else {
        input.classList.remove('invalide');
        const errorMessageElement = input.parentElement.querySelector('p');
        errorMessageElement.textContent = '';
      }
    });
    //technique des drapeaux 3/3
    if (estValide){
      console.log ('Formulaire OK')
      
      // Récupère les données du formulaire et du panier pour envoyer un objet commande à l'API
      // vu en mentorat le 12/07
      const contact = {
        firstName : document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        address : document.getElementById("address").value,
        email : document.getElementById("email").value,
        city : document.getElementById("city").value,
      };
      
      //récriture de la variable pour qu'elle soit hors de la fonction ligne 93
      let productArray = JSON.parse(localStorage.getItem("panier"));
      
      const products = [];
      productArray.forEach((kanap) => {
        products.push(kanap.id)
      })
      
      const order = {
        contact,
        products
      }
      
      
      fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      location.href = `confirmation.html?id=${data.orderId}`;
    })
    .catch(() =>
    alert("Il y a un problème avec le serveur, merci de réessayer plus tard")
    );
  }
  
});
