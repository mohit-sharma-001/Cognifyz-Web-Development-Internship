// ==========================
// Responsive Navigation
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const menuIcon = menuBtn.querySelector("i");

// Open / Close Menu

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");

    } else {

        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");

    }

});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");

    });

});