/* ================= TIMESTAMP ================= */

const timestamp = document.getElementById("timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

/* ================= YEAR ================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

/* ================= LAST MODIFIED ================= */

const modified = document.getElementById("lastModified");

if (modified) {
    modified.textContent = document.lastModified;
}

/* ================= HAMBURGER MENU ================= */

const menuButton = document.getElementById("menu-button");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

/* ================= MODALS (NO ONCLICK) ================= */

const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        if (modal) modal.showModal();
    });
});

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.close);
        if (modal) modal.close();
    });
});