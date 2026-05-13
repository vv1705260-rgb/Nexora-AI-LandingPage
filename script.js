/* =========================================
   AOS ANIMATION INITIALIZATION
========================================= */
AOS.init({

    duration: 1000,
    once: true

});


/* =========================================
   MOBILE NAVBAR TOGGLE
========================================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================
   CLOSE MOBILE MENU ON LINK CLICK
========================================= */
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   DARK / LIGHT MODE TOGGLE
========================================= */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

/* LOAD SAVED THEME */
if (localStorage.getItem("theme") === "light") {

    body.classList.add("light-mode");

    themeToggle.innerHTML =
        `<i class="fa-solid fa-sun"></i>`;

}

/* TOGGLE THEME */
themeToggle.addEventListener("click", () => {

    body.classList.toggle("light-mode");

    /* SAVE THEME */
    if (body.classList.contains("light-mode")) {

        localStorage.setItem("theme", "light");

        themeToggle.innerHTML =
            `<i class="fa-solid fa-sun"></i>`;

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.innerHTML =
            `<i class="fa-solid fa-moon"></i>`;

    }

});


/* =========================================
   TYPING TEXT EFFECT
========================================= */
const typingText = document.querySelector(".typing-text");

const words = [

    "Artificial Intelligence",
    "Smart Automation",
    "Future Technology",
    "Powerful Analytics",
    "Digital Innovation"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 120);

}

typeEffect();


/* =========================================
   SCROLL PROGRESS BAR
========================================= */
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* =========================================
   CUSTOM CURSOR
========================================= */
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


/* =========================================
   COUNTER ANIMATION
========================================= */
const counters =
    document.querySelectorAll(".counter");

const speed = 200;

counters.forEach(counter => {

    const animateCounter = () => {

        const target =
            +counter.getAttribute("data-target");

        const count =
            +counter.innerText;

        const increment =
            target / speed;

        if (count < target) {

            counter.innerText =
                Math.ceil(count + increment);

            setTimeout(animateCounter, 20);

        } else {

            counter.innerText = target;

        }

    };

    animateCounter();

});


/* =========================================
   FAQ ACCORDION
========================================= */
const faqItems =
    document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question =
        item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            question.querySelector("i");

        /* CLOSE OTHER FAQs */
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.querySelector(
                    ".faq-answer"
                ).style.maxHeight = null;

                otherItem.querySelector(
                    "i"
                ).classList.remove("fa-minus");

                otherItem.querySelector(
                    "i"
                ).classList.add("fa-plus");

            }

        });

        /* TOGGLE CURRENT FAQ */
        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;

            icon.classList.remove("fa-minus");

            icon.classList.add("fa-plus");

        } else {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            icon.classList.remove("fa-plus");

            icon.classList.add("fa-minus");

        }

    });

});


/* =========================================
   NAVBAR BACKGROUND ON SCROLL
========================================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(15, 23, 42, 0.9)";

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.3)";

    } else {

        header.style.background =
            "rgba(15, 23, 42, 0.5)";

        header.style.boxShadow = "none";

    }

});


/* =========================================
   ACTIVE NAV LINK ON SCROLL
========================================= */
const sections =
    document.querySelectorAll("section");

const navLinkItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute("id");

        }

    });

    navLinkItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   SMOOTH BUTTON ANIMATION
========================================= */
const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";

    });

});


/* =========================================
   CONTACT FORM SUBMISSION
========================================= */
const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Message Sent Successfully 🚀"
    );

    contactForm.reset();

});


/* =========================================
   PAGE LOADER EFFECT
========================================= */
window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* =========================================
   CONSOLE MESSAGE
========================================= */
console.log(

    "🚀 Nexora AI Landing Page Loaded Successfully"

);
