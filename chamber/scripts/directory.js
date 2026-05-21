const url = "data/members.json";

const cards = document.querySelector("#members");

async function getMembers() {

    const response = await fetch(url);

    const data = await response.json();

    displayMembers(data);
}

const displayMembers = (members) => {

    members.forEach((member) => {

        let card = document.createElement("section");

        card.classList.add("member-card");

        card.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        cards.appendChild(card);
    });
};

getMembers();

/* GRID BUTTON */

document.querySelector("#grid").addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

/* LIST BUTTON */

document.querySelector("#list").addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

document.addEventListener("DOMContentLoaded", () => {

    const year = document.getElementById("year");
    const modified = document.getElementById("lastModified");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (modified) {
        modified.textContent = document.lastModified;
    }

});