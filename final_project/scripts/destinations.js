const container = document.querySelector("#cardsContainer");
const modal = document.querySelector("#details");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

function saveFavorites() {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function toggleFavorite(id, button) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(item => item !== id);
        button.textContent = "⭐ Add Favorite";
    } else {
        favorites.push(id);
        button.textContent = "⭐ Saved";
    }

    saveFavorites();
}

function isFavorite(id) {
    return favorites.includes(id);
}

function displayDestinations(data) {
    container.innerHTML = "";

    data.forEach(item => {
        const card = document.createElement("article");
        card.classList.add("card");

        const favText = isFavorite(item.id) ? "⭐ Saved" : "⭐ Add Favorite";

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p>${item.country}</p>
            <p>${item.description}</p>

            <button class="details-btn">Details</button>
            <button class="favorite-btn">${favText}</button>
        `;

        /* DETAILS MODAL */
        card.querySelector(".details-btn").addEventListener("click", () => {
            modal.innerHTML = `
                <h2>${item.name}</h2>
                <p>${item.details}</p>
                <button onclick="details.close()">Close</button>
            `;
            modal.showModal();
        });

        /* FAVORITES */
        const favBtn = card.querySelector(".favorite-btn");

        favBtn.addEventListener("click", () => {
            toggleFavorite(item.id, favBtn);
        });

        container.appendChild(card);
    });
}

async function loadDestinations() {
    try {
        const res = await fetch("scripts/destinations.json");
        const data = await res.json();

        displayDestinations(data);

    } catch (error) {
        console.error("Error loading destinations:", error);
    }
}

loadDestinations();