
// Récupère les params de l'URL
const urlParams = new URLSearchParams(document.location.search);
// Prends l'ID dans les params
const idCommande = urlParams.get("id"); 

if (idCommande == "undefined" || idCommande == null || idCommande == "") {
    window.location.href = "index.html"
}

localStorage.clear()
// supprime le local storage au moment de la création d'un numéro de commande

let span = document.getElementById("orderId");
span.innerHTML = idCommande 

