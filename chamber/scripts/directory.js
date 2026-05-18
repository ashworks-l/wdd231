const membersContainer = document.querySelector("#members");

async function getMembers() {
const res = await fetch("data/members.json");
const data = await res.json();
displayMembers(data);
}

function displayMembers(members) {

members.forEach(member => {

const card = document.createElement("div");

card.innerHTML = `
<h3>${member.name}</h3>
<p>${member.address}</p>
<p>${member.phone}</p>
<a href="${member.website}" target="_blank">Website</a>
<img src="images/${member.image}" alt="${member.name}">
`;

membersContainer.appendChild(card);

});

}

getMembers();

/* view toggle */
document.querySelector("#grid").addEventListener("click", () => {
membersContainer.className = "grid";
});

document.querySelector("#list").addEventListener("click", () => {
membersContainer.className = "list";
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
