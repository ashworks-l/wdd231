const timestamp =
document.getElementById("timestamp");

timestamp.value =
new Date().toLocaleString();

/* YEAR */

const year =
document.getElementById("year");

year.textContent =
new Date().getFullYear();

/* LAST MODIFIED */

const modified =
document.getElementById("lastModified");

modified.textContent =
document.lastModified;

/* HAMBURGER */

const menuButton =
document.getElementById("menu-button");

const navigation =
document.getElementById("navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
})