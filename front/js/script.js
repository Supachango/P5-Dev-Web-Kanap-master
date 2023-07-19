
async function getCanapes(){
    try {
        const reponse = await fetch('http://localhost:3000/api/products');
        // L'argument obligatoire de Fetch est l'url des ressources à récupérer.
        if (!reponse.ok) {
            throw new Error('Le serveur est inaccessible');
        }
        const canapes = await reponse.json();
        // La promesse est résolue par l'objet reponse. On indique le format choisi : JSON
        console.log (canapes);
        
        //On entoure le code de génération par une boucle FOR
        for (let i= 0; i < canapes.length; i++ ){
            
            //On crée une variable i pour récupérer le canapé à l'index du parcours de la boucle dans le tableau.
            const article = canapes[i];
            //Récupération de l'élément du DOM qui acceuillera les produits
            const sectionItems = document.querySelector(".items");
            
            const KLink = document.createElement('a');
            KLink.href=`./product.html?id=${article._id}`;
            sectionItems.appendChild (KLink);
            
            
            //Création d'une balise article dédiée aux canapés
            const articleElement = document.createElement("article"); 
            //Ajout des éléments du DOM : On rattache la balise article à la section "item"
            KLink.appendChild(articleElement);
            
            
            //génération de la balise html <img> pour imageUrl déclarée imgK avec une propriété src pour la source de l'image
            const imgK = document.createElement("img");
            imgK.src = article.imageUrl;
            //Ajout des éléments du DOM : On rattache l'élement image à la balise "img"
            articleElement.appendChild(imgK);
            
            //génération de la balise html <p> pour altTxt déclarée altTxt avec une propriété alt pour s'afficher en l'absence de l'image
            const altTxtElement = document.createElement("p");
            altTxtElement.alt = article.altTxtElement;
            //Ajout des éléments du DOM : On rattache l'élement alttxt à la balise "p"
            articleElement.appendChild(altTxtElement);
            
            //génération de la balise html <p> déclarée "name"
            const nomElement = document.createElement("p");
            nomElement.innerText = article.name; 
            //Ajout des éléments du DOM : On rattache l'élement nom à la balise "p"
            articleElement.appendChild(nomElement);
            
            //génération de la balise html <p> pour "description" déclarée "descr"
            const descrElement = document.createElement("p");
            descrElement.innerText = article.description;
            //Ajout des éléments du DOM : On rattache l'élement descr à la balise "p"
            articleElement.appendChild(descrElement);
        };
        
        
    } catch (error) {
        console.error(error);
        
        // Afficher un message d'erreur dans le DOM
        const sectionItems = document.querySelector('.items');
        const errorMessage = document.createElement('p');
        errorMessage.innerText = 'Une erreur s\'est produite lors de la récupération des canapés. Veuillez réessayer plus tard.';
        sectionItems.appendChild(errorMessage);
    }
    
}    
getCanapes();























