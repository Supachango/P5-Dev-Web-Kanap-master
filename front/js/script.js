
async function getCanapes(){
    const reponse = await fetch('http://localhost:3000/api/products')
    const canapes = await reponse.json();
    console.log (canapes)
}

getCanapes()

for (let i= 0; i < canapes.length; i++ ){
    const products = canapes[i]

    const sectionItems = document.querySelector(".items");

    const imageElement = document.createElement('products'); 
    
    
    
    const colorsElement = document.createElement("h2");
    colorsElement.innerText = products[c].colors;

    const _idElement = document.createElement("p");
    _idElement.innerText = products._id;

    const nameElement = document.createElement("h3");
    nameElement.innerText = products.name;

    const priceElement = document.createElement("p");
    priceElement.innerText = products.price;

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = products[i].imageUrl;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = products.description ?? "Pas de description pour le moment.";

    const altTextElement = document.createElement("p");
    altTextElement.innerText = products.altText;

    sectionItems.appendChild(productsElement);
    productsElement.appendChild(colorsElement);
    productsElement.appendChild(_idElement)
    productsElement.appendChild(nameElement)
    productsElement.appendChild(priceElement)
    productsElement.appendChild(imageUrlElement)
    productsElement.appendChild(descriptionElement)
    productsElement.appendChild(altTextElement)

}

    










