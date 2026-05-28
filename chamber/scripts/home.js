const apiKey = "87fd0b8c8abeedf925b7a098c9b9c464";

const lat = 42.8125;
const lon = -1.6458;

/* YEAR */

document.getElementById("year").textContent =
new Date().getFullYear();

document.getElementById("lastModified").textContent =
document.lastModified;

/* HAMBURGER */

const menuButton =
document.getElementById("menu-button");

const navigation =
document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

/* WEATHER */

async function getWeather() {

    const url =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    const data = await response.json();

    const current = data.list[0];

    document.getElementById("temperature").textContent =
`${Math.round(current.main.temp)}°C`;

    document.getElementById("description").textContent =
current.weather[0].description;

    document.getElementById("weather-icon").src =
`https://openweathermap.org/img/wn/${current.weather[0].icon}.png`;

    const forecast = document.getElementById("forecast");

    forecast.innerHTML = "";

    const filtered = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    filtered.slice(0, 3).forEach(day => {

        const date = new Date(day.dt_txt);

        const p = document.createElement("p");

        p.textContent =
`${date.toLocaleDateString("en-US", { weekday: "short" })}: ${Math.round(day.main.temp)}°C`;

        forecast.appendChild(p);
    });
}

getWeather();

/* SPOTLIGHTS */

async function loadSpotlights() {

    const response =
    await fetch("data/members.json");

    const members =
    await response.json();

    const filtered =
    members.filter(member =>
        member.membership === 2 ||
        member.membership === 3
    );

    const random =
    filtered.sort(() => 0.5 - Math.random())
    .slice(0, 3);

    const container =
    document.getElementById("spotlight-container");

    container.innerHTML = "";

    random.forEach(member => {

        const card =
        document.createElement("section");

        card.classList.add("member-card");

        const level =
        member.membership === 3
        ? "Gold Member"
        : "Silver Member";

        card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${level}</p>
        <p>${member.phone}</p>
        <p>${member.address}</p>
        <a href="${member.website}" target="_blank">
        Visit Website
        </a>
        `;

        container.appendChild(card);
    });
}

loadSpotlights();