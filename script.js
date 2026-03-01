// ===================================================
// THEME TOGGLE
// ===================================================
const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector('i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Initialize theme
initTheme();

// ===================================================
// MOBILE MENU TOGGLE
// ===================================================
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const icon = document.querySelector(".hamburger-menu i");
    
    menu.classList.toggle("active");
    
    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}

// ===================================================
// SKILLS ACCORDION
// ===================================================
function toggleSkills(element) {
    const parent = element.parentElement;

    // Close all other accordions
    document.querySelectorAll(".skills__content").forEach(item => {
        if (item !== parent) {
            item.classList.remove("skills__open");
            item.classList.add("skills__close");
        }
    });

    // Toggle current accordion
    parent.classList.toggle("skills__open");
    parent.classList.toggle("skills__close");
}

// ===================================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================================
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================================
// SCROLL TO TOP BUTTON
// ===================================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================================
// NAVBAR SHRINK ON SCROLL
// ===================================================
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});