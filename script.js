// ==========================================
// MENU MOBILE
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// ==========================================
// FECHAR MENU AO CLICAR EM UM LINK
// ==========================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// ==========================================
// BOTÃO "SENTIR A EMOÇÃO"
// ==========================================

const exploreBtn = document.getElementById("exploreBtn");
const toast = document.getElementById("toast");

exploreBtn.addEventListener("click", () => {

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);

});


// ==========================================
// EFEITO DE REVEAL AO ROLAR
// ==========================================

const elements = document.querySelectorAll(
    ".player-card, .section-title, .highlight-content, .about-box"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ==========================================
// EFEITO PARALLAX NA BOLA
// ==========================================

const ball = document.querySelector(".basketball");

document.addEventListener("mousemove", (event) => {

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    ball.style.transform =
        `translate(${x}px, ${y}px) rotate(${x}deg)`;

});


// ==========================================
// ANIMAÇÃO DE NÚMEROS
// ==========================================

const ratings = document.querySelectorAll(".player-rating strong");

ratings.forEach(rating => {

    const target = parseInt(rating.textContent);

    let current = 0;

    const updateNumber = () => {

        if (current < target) {

            current++;

            rating.textContent = current;

            setTimeout(updateNumber, 15);

        }

    };

    const ratingObserver = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) {

            updateNumber();
            ratingObserver.disconnect();

        }

    });

    ratingObserver.observe(rating);

});
