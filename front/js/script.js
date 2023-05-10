
async function getCanapes(){
    const reponse = await fetch('http://localhost:3000/api/products')
    const canapes = await reponse.json();
    console.log (canapes)

//On entoure le code de génération par une boucle FOR
for (let i= 0; i < canapes.length; i++ ){

    //Code de génération
    //On crée une variable i pour récupérer le canapé à l'index du parcours de la boucle.
    const article = canapes[i]

    //Récupération de l'élément du DOM qui acceuillera les produits
    const sectionItems = document.querySelector(".items");

    //Création d'une balise article dédiée aux canapés
     const articleElement = document.createElement("article"); 
    //Ajout du DOM : On rattache la balise article à la section "item"
    sectionItems.appendChild(articleElement);


    //génération de la balise html <img> pour imageUrl déclarée imgK avec une propriété src pour la source de l'image
    const imgKElement = document.createElement("img");
    imgKElement.src = article.imageUrl;
    //Ajout des éléments du DOM
    articleElement.appendChild(imgKElement);

    //génération de la balise html <p> pour altTxt déclarée altTxt avec une propriété alt pour s'afficher en l'absence de l'image
    const altTxtElement = document.createElement("p");
    altTxtElement.alt = article.altTxtElement;
    //Ajout des éléments du DOM
    articleElement.appendChild(altTxtElement);

    //génération de la balise html <p> pour name déclarée name
    const nomElement = document.createElement("p");
    nomElement.innerText = article.name; 
    //Ajout des éléménts du DOM
    articleElement.appendChild(nomElement);

    //génération de la balise html <p> pour price déclarée price
    const priceElement = document.createElement("p");
    priceElement.innerText = article.price;
    //Ajout des elemens du DOM
    articleElement.appendChild(priceElement);

    //génération de la balise html <p> pour description déclarée descr
    const descrElement = document.createElement("p");
    descrElement.innerText = article.description;
    //Ajout des élements du DOM
    articleElement.appendChild(descrElement);
    }
}

getCanapes()




    










