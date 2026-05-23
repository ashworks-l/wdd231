const apiKey = "87fd0b8c8abeedf925b7a098c9b9c464";
const lat = 42.8125;
const lon = -1.6458;

// CLOCK
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// YEAR + DATE
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// WEATHER
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("temperature").textContent =
        `${data.main.temp}°C`;

    document.getElementById("description").textContent =
        data.weather[0].description;

    document.getElementById("weather-icon").src =
        `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

getWeather();

// SPOTLIGHT (JSON + RANDOM + GOLD/SILVER)
async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const filtered = members.filter(m =>
        m.membership === 2 || m.membership === 3
    );

    const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";

    random.forEach(m => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${m.image}" alt="${m.name}">
            <h3>${m.name}</h3>
            <p>${m.phone}</p>
            <p>${m.address}</p>
            <a href="${m.website}" target="_blank">Visit</a>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();