import { saveFavorite } from "./storage.js";

const grid = document.querySelector(".grid");
const dialog = document.querySelector("dialog");

async function loadData() {
  try {
    const res = await fetch("data/destinations.json");
    const data = await res.json();

    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.image}" loading="lazy" width="300" height="200">
        <h3>${item.name}</h3>
        <p><strong>Country:</strong> ${item.country}</p>
        <p><strong>Continent:</strong> ${item.continent}</p>
        <p><strong>Temperature:</strong> ${item.temperature}</p>
        <p>${item.description}</p>
        <button class="details">Details</button>
        <button type="button" class="fav">❤️</button>
      `;

      card.querySelector(".details").addEventListener("click", () => {
        dialog.innerHTML = `
          <h2>${item.name}</h2>
          <p>${item.desc}</p>
        `;
        dialog.showModal();
      });

      card.querySelector(".fav").addEventListener("click", () => {
      saveFavorite(item.name);
      });

      grid.appendChild(card);
    });

  } catch (error) {
    console.log(error);
    console.log(localStorage.getItem("favorites"));
  }
  
}

loadData();