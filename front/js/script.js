
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

    //Création d'une balise article dédiée aux canapés
     const articleElement = document.createElement("article"); 
    //Ajout du DOM : On rattache la balise article à la section "item"
    sectionItems.appendChild(articleElement);


    //génération de la balise html img pour imageUrl déclarée imgK
    const imgKElement = document.createElement("img")
    imgKElement.src = article.imageUrl;
    //Ajout des éléments du DOM
    articleElement.appendChild(imgKElement)

}
}

getCanapes()




    










