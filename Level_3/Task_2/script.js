// ==========================
// Smooth Scroll for Navigation
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// CTA Button Interaction
// ==========================

const applyButtons = document.querySelectorAll(".btn");

applyButtons.forEach(button => {

    button.addEventListener("click", function () {

        if (this.textContent.includes("Apply")) {

            alert("Thank you for your interest in the Web Developer Internship at Cognifyz Technologies!");

        }

    });

});

// ==========================
// Reveal Sections on Scroll
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.8s ease";

    observer.observe(section);

});