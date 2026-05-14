const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();

    console.table(data.prophets);

    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {

        let card = document.createElement("section");

        let name = document.createElement("h2");
        let birth = document.createElement("p");
        let birthplace = document.createElement("p");
        let portrait = document.createElement("img");

        // NAME
        name.textContent = `${prophet.name} ${prophet.lastname}`;

        // INFO
        birth.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // IMAGE
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        portrait.setAttribute("height", "250");

        // BUILD CARD
        card.appendChild(name);
        card.appendChild(birth);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};

getProphetData();