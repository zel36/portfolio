// Scroll animation navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

// Typing effect
const textArray = [
    "Développeur Web",
    "Étudiant en Informatique",
    "Passionné de Cybersécurité",
    "Créateur d'applications modernes"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typed = document.getElementById("typed");

function typeEffect() {
    if (index >= textArray.length) index = 0;
    currentText = textArray[index];

    if (!isDeleting) {
        typed.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typed.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Particles
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#38bdf8" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4
        },
        move: { enable: true, speed: 2 }
    }
});