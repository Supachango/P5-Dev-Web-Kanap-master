
async function getCanapes(){
    const reponse = await fetch('http://localhost:3000/api/products')
    const canapes = await reponse.json();
    console.log (canapes)

//On entoure le code de génération par une boucle FOR
for (let i= 0; i < canapes.length; i++ ){
    //On crée une variable i pour récupérer le canapé à l'index du parcours de la boucle.
    const article = canapes[i]

    //Récupération de l'élément du DOM qui acceuillera les produits
    const sectionItems = document.querySelector(".items");

    // mis avant
     //Création d'une balise article dédiée aux canapés
     const articleElement = document.createElement("article"); 
    //Ajout du DOM : On rattache la balise article à la section "item"
    sectionItems.appendChild(articleElement);


    //génération de la balise html img pour imageUrl
    const imageUrlElement = document.createElement("img")
    imageUrlElement.src = article.imageUrl;
    //Ajout des éléments du DOM
    articleElement.appendChild(imageUrlElement)

    //génération de la balise html p avec la propriété alt pour apparaitre à la place de l'image. (à tester)
    const altTextElement = document.createElement("p");
    altTextElement.alt = article.altTxt;
    //Ajout des éléments du DOM
    articleElement.appendChild(altTextElement)

    //génération de la balise html h3 pour name
    const nameElement = document.createElement("h3");
    nameElement.innerText = article.name;  
    //Ajout des éléments du DOM
    articleElement.appendChild(nameElement)

    //génération de la balise html p pour description
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
    //Ajout des éléments du DOM
    articleElement.appendChild(descriptionElement)

}
}

getCanapes()




    










