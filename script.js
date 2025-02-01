// Language Toggle
function toggleLanguage() {
    const html = document.documentElement;
    const currentLang = html.getAttribute("lang") || "en";
    const newLang = currentLang === "en" ? "fr" : "en";
    
    // Update HTML lang attribute
    html.setAttribute("lang", newLang);
    
    // Update language toggle button
    const langToggle = document.querySelector(".lang-toggle");
    if (newLang === "fr") {
        langToggle.innerHTML = '<span class="lang-text">EN</span><span class="separator">/</span><span class="lang-text active">FR</span>';
    } else {
        langToggle.innerHTML = '<span class="lang-text active">EN</span><span class="separator">/</span><span class="lang-text">FR</span>';
    }

    // Update navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        const text = link.getAttribute(`data-${newLang}`);
        if (text) link.textContent = text;
    });

    // Update hero text
    document.querySelectorAll('[data-en], [data-fr]').forEach(element => {
        const text = element.getAttribute(`data-${newLang}`);
        if (text) element.textContent = text;
    });

    // Update interview cards
    updateInterviewCards(newLang);
}

// Mobile Menu Toggle
document.querySelector(".mobile-menu").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Sample interview data
const interviews = [
    {
        id: 1,
        image: "https://static.fabrik.io/13ql/4a8fa8e19fac5028.jpg?lossless=1&w=720&fit=max&s=99fbe15f2d5ec62a2423097b5f69211d",
        titleEn: "Interview with Young Climate Activist",
        titleFr: "Entrevue avec un jeune militant pour le climat",
        dateEn: "March 15, 2024",
        dateFr: "15 mars 2024",
    },
    {
        id: 2,
        image: "https://static.fabrik.io/13ql/bdf2d1602927a9a.jpg?lossless=1&w=480&fit=crop&ar=4:3&crop=faces%2Centropy&s=7f22594fa1a05481573de244b04bdfeb",
        titleEn: "A Chat with Teen Tech Innovator",
        titleFr: "Une conversation avec un jeune innovateur en technologie",
        dateEn: "March 10, 2024",
        dateFr: "10 mars 2024",
    },
    {
        id: 3,
        image: "https://static.fabrik.io/13ql/d01b6d1f0d4524fa.jpg?lossless=1&w=480&fit=crop&ar=4:3&crop=faces%2Centropy&s=021c48a0acfc32370c44facd35cde04f",
        titleEn: "Young Artist Changing Communities",
        titleFr: "Jeune artiste transformant les communautés",
        dateEn: "March 5, 2024",
        dateFr: "5 mars 2024",
    },
    {
        id: 4,
        image: "https://static.fabrik.io/13ql/e31f0915406a8579.jpg?lossless=1&w=480&fit=crop&ar=4:3&crop=faces%2Centropy&s=9d0162d1f87c6efd61e60f6402a769e2",
        titleEn: "Interview with Young Climate Activist",
        titleFr: "Entrevue avec un jeune militant pour le climat",
        dateEn: "March 15, 2024",
        dateFr: "15 mars 2024",
    },
    {
        id: 5,
        image: "https://static.fabrik.io/13ql/b820174b0df5dc1e.webp?lossless=1&w=480&fit=crop&ar=4:3&crop=faces%2Centropy&s=f4dc6aa4e89b325d8ba4a9f445511134",
        titleEn: "A Chat with Teen Tech Innovator",
        titleFr: "Une conversation avec un jeune innovateur en technologie",
        dateEn: "March 10, 2024",
        dateFr: "10 mars 2024",
    },
    {
        id: 6,
        image: "https://static.fabrik.io/13ql/e768fe997b9eaa23.png?lossless=1&w=480&fit=crop&ar=4:3&crop=faces%2Centropy&s=fb498a12d64c96b0f6bea7e009012a71",
        titleEn: "Young Artist Changing Communities",
        titleFr: "Jeune artiste transformant les communautés",
        dateEn: "March 5, 2024",
        dateFr: "5 mars 2024",
    },
];

// Populate interviews grid
function populateInterviews(lang = 'en') {
    const grid = document.querySelector(".grid");
    grid.innerHTML = ''; // Clear existing cards

    interviews.forEach((interview) => {
        const card = document.createElement("article");
        card.className = "interview-card";

        card.innerHTML = `
            <img src="${interview.image}" alt="">
            <div class="content">
                <h3>
                    <span class="en" data-en="${interview.titleEn}">${interview.titleEn}</span>
                    <span class="fr" data-fr="${interview.titleFr}">${interview.titleFr}</span>
                </h3>
                <p class="date">
                    <span class="en" data-en="${interview.dateEn}">${interview.dateEn}</span>
                    <span class="fr" data-fr="${interview.dateFr}">${interview.dateFr}</span>
                </p>
            </div>
        `;

        grid.appendChild(card);
    });
}

function updateInterviewCards(lang) {
    const cards = document.querySelectorAll('.interview-card');
    cards.forEach(card => {
        const titleEn = card.querySelector('h3 .en').getAttribute('data-en');
        const titleFr = card.querySelector('h3 .fr').getAttribute('data-fr');
        const dateEn = card.querySelector('.date .en').getAttribute('data-en');
        const dateFr = card.querySelector('.date .fr').getAttribute('data-fr');

        if (lang === 'fr') {
            card.querySelector('h3 .fr').textContent = titleFr;
            card.querySelector('.date .fr').textContent = dateFr;
        } else {
            card.querySelector('h3 .en').textContent = titleEn;
            card.querySelector('.date .en').textContent = dateEn;
        }
    });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    populateInterviews();
    
    // Set initial language
    const html = document.documentElement;
    const initialLang = html.getAttribute("lang") || "en";
    html.setAttribute("lang", initialLang);
});