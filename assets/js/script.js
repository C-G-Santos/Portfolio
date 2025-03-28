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
            navLinks.style.display = "flex";
        } else {
            navLinks.style.display = "none";
        }
    });
});
