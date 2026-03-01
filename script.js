const themeBtn = document.getElementById('theme-btn');
const icon = themeBtn.querySelector('i');
const body = document.body;

// Load saved theme preference on startup
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    // Change icon between Moon and Sun
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const icon = document.querySelector(".hamburger-menu i");
    
    // Toggle the 'active' class to show/hide the menu
    menu.classList.toggle("active");
    
    // Change icon from Bars to "X" when open
    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}
function toggleSkills(element) {
    const parent = element.parentNode;

    if (parent.classList.contains('skills__open')) {
        parent.classList.replace('skills__open', 'skills__close');
    } else {
        // Optional: Close other accordions when one is opened
        const allContent = document.querySelectorAll('.skills__content');
        allContent.forEach(item => item.classList.replace('skills__open', 'skills__close'));
        
        parent.classList.replace('skills__close', 'skills__open');
    }
}

// ACCORDION
function toggleSkills(element) {
    const parent = element.parentElement;

    document.querySelectorAll(".skills__content").forEach(item => {
        if (item !== parent) {
            item.classList.remove("skills__open");
            item.classList.add("skills__close");
        }
    });

    parent.classList.toggle("skills__open");
    parent.classList.toggle("skills__close");
}

// THEME TOGGLE
const themeButton = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeButton.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});