const apiKey = "87fd0b8c8abeedf925b7a098c9b9c464";
const lat = 42.8125;
const lon = -1.6458;

const weatherURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
const res = await fetch(weatherURL);
const data = await res.json();

document.querySelector("#temperature").textContent =
`${Math.round(data.list[0].main.temp)}°C`;

document.querySelector("#description").textContent =
data.list[0].weather[0].description;

document.querySelector("#weather-icon").src =
`https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
}

getWeather();

/* SPOTLIGHT */

async function getSpotlights() {
const res = await fetch("data/members.json");
const data = await res.json();

const filtered = data.filter(m =>
m.membership === 2 || m.membership === 3
);

const random = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

const container = document.querySelector("#spotlight-container");

random.forEach(m => {
container.innerHTML += `
<div class="member-card">
<h3>${m.name}</h3>
<p>${m.address}</p>
<p>${m.phone}</p>
<a href="${m.website}" target="_blank">Visit</a>
</div>`;
});
}

getSpotlights();

/* FOOTER */

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

/* CLOCK */

setInterval(() => {
document.querySelector("#clock").textContent =
new Date().toLocaleTimeString();
}, 1000);