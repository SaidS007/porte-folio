console.log('Hello, world!');

window.onload = function() {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    // Afficher la modale lorsque la page est chargée
    modal.style.display = "block";

    // Fermer la modale lorsque l'utilisateur clique sur (x)
    span.onclick = function() {
        modal.style.display = "none";
        modal2.style.display = "block";
    }

    // Fermer la modale lorsque l'utilisateur clique en dehors de la modale
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal2.style.display = "block";
        }
    }
};

     // Initialisation de l'index courant
let currentIndex = 0;

// Récupération de tous les articles avec la classe 'image'
const images = document.querySelectorAll('.image');

// Nombre total d'articles
const totalImages = images.length;

// Fonction pour afficher l'article actif
function showImage(index) {
    images.forEach((article, i) => {
        // Retirer la classe 'tete' de tous les articles
        article.classList.remove('tete');
        // Ajouter la classe 'tete' à l'article actif
        if (i === index) {
            article.classList.add('tete');
        }
    });
}

// Fonction pour passer à l'article suivant
function suiv() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// Fonction pour passer à l'article précédent
function prec() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Ajout des événements aux boutons
document.getElementById('suiv').onclick = suiv;
document.getElementById('prec').onclick = prec;

// Défilement automatique toutes les 15 secondes
setInterval(suiv, 10000);

// Affichage initial de l'article
showImage(currentIndex);