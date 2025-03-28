document.querySelector('.navbar-toggle').addEventListener('click', function () {
    document.querySelector('.navbar-collapse').classList.toggle('show');
});

document.querySelector('.navbar-collapse').addEventListener('click', function () {
    this.classList.remove('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("change", () => {
        if (menuToggle.checked) {
            navLinks.classList.add("show");
        } else {
            navLinks.classList.remove("show");
        }
    });

    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.checked = false;
            navLinks.classList.remove("show");
        }
    });

    navLinks.addEventListener("click", (event) => {
        if (event.target.tagName === "A") {
            menuToggle.checked = false;
            navLinks.classList.remove("show");
        }
    });
});