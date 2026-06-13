const grid = document.querySelector("#grid");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector("#modalContent");
const search = document.querySelector("#search");

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

async function loadDestinations() {
  try {
    const res = await fetch("./data/destinations.json");
    const data = await res.json();

    render(data);

    search.addEventListener("input", e => {
      const filtered = data.filter(d =>
        d.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      render(filtered);
    });

  } catch (error) {
    console.error("Error loading data", error);
  }
}

function render(items) {
  grid.innerHTML = "";

  items.forEach(dest => {

    const isFav = favorites.includes(dest.id);

    grid.innerHTML += `
      <div class="card">
        <img src="${dest.image}" loading="lazy">

        <h3>${dest.name}</h3>
        <p>${dest.country}</p>
        <p>⭐ ${dest.rating}</p>

        <button onclick="openModal(${dest.id})">Details</button>

        <button onclick="toggleFav(${dest.id})">
          ${isFav ? "💖 Saved" : "🤍 Save"}
        </button>
      </div>
    `;
  });
}

function toggleFav(id) {

  if (favorites.includes(id)) {
    favorites = favorites.filter(f => f !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));

  loadDestinations();
}

function openModal(id) {
  fetch("./data/destinations.json")
    .then(res => res.json())
    .then(data => {
      const item = data.find(d => d.id === id);

      modalContent.innerHTML = `
        <h2>${item.name}</h2>
        <p>${item.country}</p>
        <p>Continent: ${item.continent}</p>
        <p>Price: $${item.price}</p>
        <p>Rating: ${item.rating}</p>
      `;

      modal.style.display = "flex";
    });
}

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

loadDestinations();