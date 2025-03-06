document.addEventListener("DOMContentLoaded", function() {
    // Effet de survol sur les liens du menu
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#FFD700";
        });
        link.addEventListener("mouseout", () => {
            link.style.color = "white";
        });
    });

    // Vérification si les sections existent avant d'ajouter du contenu
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
        aboutSection.innerHTML = `
            <h2>À propos de GO SHOP AFRICA</h2>
            <p>Nous sommes une entreprise spécialisée dans la vente de produits de beauté, de cuisine, d'électroménager et bien plus encore.</p>
            <p>Notre mission est de proposer des produits de qualité pour améliorer votre quotidien.</p>
        `;
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
        contactSection.innerHTML = `
            <h2>Contactez-nous</h2>
            <form id="contactForm">
                <label for="name">Nom :</label>
                <input type="text" id="name" required>
                <label for="email">Email :</label>
                <input type="email" id="email" required>
                <label for="message">Message :</label>
                <textarea id="message" required></textarea>
                <button type="submit">Envoyer</button>
                <p id="responseMessage"></p>
            </form>
        `;

        // Gestion de la soumission du formulaire
        const contactForm = document.getElementById("contactForm");
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("responseMessage").textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
            contactForm.reset();
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Empêcher le rechargement de la page

            // Afficher un message de confirmation
            const responseMessage = document.getElementById("responseMessage");
            responseMessage.textContent = "Merci pour votre message ! Nous vous répondrons bientôt.";
            responseMessage.style.display = "block";

            // Réinitialiser le formulaire après 2 secondes
            setTimeout(() => {
                contactForm.reset();
                responseMessage.style.display = "none";
            }, 3000);
        });
    }
});

// Rediriger vers la page de paiement avec les infos du produit
function redirigerPaiement(produit, prix) {
    window.location.href = `paiement.html?product=${encodeURIComponent(produit)}&price=${encodeURIComponent(prix)}`;
}

// Charger les infos du produit sur la page de paiement
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get("product");
    const price = urlParams.get("price");

    if (product && price) {
        document.getElementById("product-info").innerText = `Produit : ${product} - Prix : ${price} CFA`;
    }

    // Envoi du formulaire vers WhatsApp
    document.getElementById("paymentForm")?.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const paymentMethod = document.getElementById("paymentMethod").value;

        // Remplace "229XXXXXXXX" par ton numéro WhatsApp
        const whatsappMessage = `Nouvelle commande :\nProduit : ${product}\nPrix : ${price} CFA\nNom : ${name}\nTéléphone : ${phone}\nMode de paiement : ${paymentMethod}`;
        const whatsappURL = `https://wa.me/22954561133?text=${encodeURIComponent(whatsappMessage)}`;

        alert("Votre commande a été envoyée !");
        window.location.href = whatsappURL;
    });
});

function searchProduct() {
    let searchQuery = document.getElementById('search-bar').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.classList.remove('hidden');  // Affiche le produit
        } else {
            product.classList.add('hidden');  // Cache le produit
        }
    });
}

fetch('http://localhost:5000/')
    .then(response => response.text())
    .then(data => {
        console.log("Réponse du backend :", data);
    })
    .catch(error => console.error("Erreur :", error));

